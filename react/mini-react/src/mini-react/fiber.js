import { commitRoot } from "./commit"
import { RenderDom } from "./react-dom"
import { reconcileChildren } from "./reconciler"

let deletions = []

let nextUnitOfWork = null
// 一开始其实就是rootFiber, 之后就是workInProgressRoot
let workInProgressRoot = null

// 上一次渲染的fiber树
let currentRoot = null

export function createRoot(element, container) {
  workInProgressRoot = {
    stateNode: container,
    element: {
      props: {children: [element]}
    },
    alternate: currentRoot
  }
  nextUnitOfWork = workInProgressRoot
}

export function commitRender() {
  workInProgressRoot = {
    stateNode: currentRoot.stateNode,
    element: currentRoot.element,
    alternate: currentRoot
  }
  nextUnitOfWork = workInProgressRoot
}


let currentFunctionFiber = null
let hookIndex = 0

export function getCurrentFunctionFiber() {
  return currentFunctionFiber
}

export function getHookIndex() {
  return hookIndex++
}


export function updateFunctionComponent(fiber) {
  currentFunctionFiber = fiber
  currentFunctionFiber.hooks = []
  hookIndex = 0
  const {type: Comp, props} = fiber.element
  const jsx = Comp(props)
  reconcileChildren(fiber, [jsx])
}

function updateClassComponent(fiber) {
  let jsx
  const alternate = fiber.alternate
  if (alternate) {
    // 存在实例, 复用, 更新props和state
    const component = alternate.component
    fiber.component = component
    component._updateProps(fiber.element.props)
    jsx = component.render()
  } else {
    const {type: Comp, props} = fiber.element
    const component = new Comp(props)
    fiber.component = component
    jsx = component.render()
  }

  reconcileChildren(fiber, [jsx])
}

// 包含迭代处理 fiber 的逻辑, 从workInProgressRoot开始, 构造出一个链表, 而不是react-dom中那样直接递归遍历树
function performUnitOfWork(workInProgress) {

  // 1. 根据fiber创建dom(没太理解, )
  if (!workInProgress.stateNode) {
    workInProgress.stateNode = RenderDom(workInProgress.element)
  }

  // // 不懂这里为什么要这样挂载
  // if (workInProgress.return && workInProgress.stateNode) {
  //   let parentFiber = workInProgress.return
  //   while(!parentFiber.stateNode) {
  //     parentFiber = parentFiber.return
  //   }
  //   parentFiber.stateNode.appendChild(workInProgress.stateNode)
  // }


  // 2. 构造fiber树
  let children = workInProgress?.element?.props?.children
  const type = workInProgress?.element?.type

  const {type: Comp, props} = workInProgress.element
  if (typeof type === 'function') {
    // 如果每次都是重新调用, 就没法实现单例, 且无法感知到state变化‘/、’
    if (type.prototype.isReactComponent) {
      // class组件
      // const jsx = new Comp(props).render()
      // children = [jsx]
      updateClassComponent(workInProgress)
    } else {
      // const jsx = Comp(props)
      // children = [jsx]
      updateFunctionComponent(workInProgress)
    }
  }

  // 不懂这里为什么children === 0
  if (children || children === 0) {
    // 不懂为什么要flat
    let elements = (Array.isArray(children) ? children : [children]).flat()
    reconcileChildren(workInProgress, elements)
  }

  console.log(workInProgress, 'workInProgress')
  // 3. 设置下一个工作单元
  if (workInProgress.child) {
    nextUnitOfWork = workInProgress.child
  } else {
    let nextFiber = workInProgress
    while(nextFiber) {
      if (nextFiber.sibling) {
        nextUnitOfWork = nextFiber.sibling
        return
      } else {
        nextFiber = nextFiber.return
      }
    }

    if (!nextFiber) {
      nextUnitOfWork = null
    }
  }
}

// 执行工作单元, 若工作单元超时, 则中断当前工作单元, 将浏览器线程释放给浏览器
// 等下一帧浏览器空余时间, 重新执行工作单元
function workLoop(deadline) {
  let shouldYield = false
  while(nextUnitOfWork && !shouldYield) {
    console.log(nextUnitOfWork, 'nextUnitOfWork')
    performUnitOfWork(nextUnitOfWork)
    shouldYield = deadline.timeRemaining() < 1
  }

  if (!nextUnitOfWork  && workInProgressRoot) {
    commitRoot(workInProgressRoot)
    currentRoot = workInProgressRoot
    workInProgressRoot = null
    deletions = []
  }

  requestIdleCallback(workLoop)
}
requestIdleCallback(workLoop);

export function deleteFiber(fiber) {
  deletions.push(fiber)
}

export function getDeletions() {
  return deletions;
}