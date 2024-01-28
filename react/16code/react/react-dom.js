
// 递归模式render
// export function render(element, container) {
//     // 将element都遍历成html creteElement createTextNode
//     const dom = typeof element === 'string' ? document.createTextNode(element) : document.createElement(element.type);

//     element?.props && Object.keys(element.props)
//         .filter(prop => prop !== 'children')
//         .map(prop => {
//             dom[prop] = element.props[prop]
//         })

//     element.props?.children?.map(child => render(child, dom));

//     container.appendChild(dom)
// }


/**
 *
while(下一个工作单元) {
    下一个工作单元 = 执行工作单元(下一个工作单元)

    // fiberTree、 fiberNode、fiberTask
}
 */

/**
 * render(初始化nextworkunit) -> requesIdleCallback -> workLoop -> performNextUnitOfWork
 */
// 下一个工作单元
let nextUnitOfWork = null
// 更新前的根节点fiber树
let currentRoot = null;
// 根节点
let wipRoot = null

export function render(element, container) {
    wipRoot = {
        dom: container,
        props: {
            children: [element]
        },
        // 最后一个fiber树的引用
        alternate: currentRoot,
    }

    nextUnitOfWork = wipRoot
}

/**
 * 处理提交的fiber树
 */
function commitWork(fiber) {
    if (!fiber) {
        return
    }
    // console.log(fiber, 'fiber', fiber.parent)

    fiber.parent.dom.appendChild(fiber.dom)

    commitWork(fiber.child)
    commitWork(fiber.siblings)

}

/**
 * 提交任务，将fiber-tree转为真实dom
 */
function commitRoot() {
    console.log(wipRoot);
    commitWork(wipRoot.child)
    currentRoot = wipRoot
    wipRoot = null
}


function workLoop(deadline) {
    let shouldYield = false
    while(nextUnitOfWork && !shouldYield) {
        nextUnitOfWork = performNextUnitOfWork(nextUnitOfWork)
        shouldYield = deadline.timeRemaining() < 1
    }
    if (!nextUnitOfWork && wipRoot) {
        commitRoot()
    }

    requestIdleCallback(workLoop)
}

requestIdleCallback(workLoop)

/**
 * 处理工作单元，返回下一个工作单元
 * @param {*} fiber 
 */
function performNextUnitOfWork(fiber) {
    if (!fiber.dom) {
        fiber.dom = new createDom(fiber)
    }

    // if (fiber.parent) {
    //     fiber.parent.dom.appendChild(fiber.dom)
    // }

    let index = 0
    let prevSiblings = null // 上一个兄弟节点
    let elements = fiber.props.children
    while(index < elements.length){
        const element = elements[index]

        const newFiber = {
            type: element.type,
            props: element.props,
            parent: fiber,
            dom: null
        }

        if (index === 0) {
            fiber.child = newFiber
        } else if(element) {
            prevSiblings.siblings = newFiber
        }

        prevSiblings = newFiber
        index++
    }

    if (fiber.child) {
        return fiber.child
    }

    let nextFiber = fiber
    while (nextFiber) {
        if (nextFiber.siblings) {
            return nextFiber.siblings
        }
        nextFiber = nextFiber.parent
    }
}

export function createDom(fiber) {
    /**
     * {
     *   type: 'div',
     *   props: {
     *     className: 'app',
     *     children: []
     *  }
     * }
     */
    const dom = fiber.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(fiber.type);

    fiber?.props && Object.keys(fiber.props)
        .filter(prop => prop !== 'children')
        .map(prop => {
            dom[prop] = fiber.props[prop]
        })

    return dom
}