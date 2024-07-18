import { deleteFiber } from "./fiber"

/**
 * elements 使我们想要渲染到页面上的元素，为了使渲染性能最高
 * 我们需要知道如何对旧的 dom 树进行操作的开销最小。
 * 所以我们需要就 elements 和旧的 fiber 进行 diff，
 * 与 elements 所对应的旧 fiber，就是 workInProgress.alternate
 * @param {*} workInProgress
 * @param {*} elements
 */
export function reconcileChildren(workInProgress, elements) {
  let prevSibling = null
  let index = 0

  let oldFiber = workInProgress?.alternate?.child

  while(index < elements.length || oldFiber) {
    const element = elements[index]
    let newFiber = null
    const isSameType = oldFiber?.element.type &&
      element?.type && oldFiber.element.type === element.type;

    // Update
    if (isSameType) {
      newFiber = {
        stateNode: oldFiber.stateNode,
        // element: {
        //   ...element,
        // }
        element: {
          ...element,
          props: element.props
        },
        alternate: oldFiber,
        return: workInProgress,
        flag: 'Update'
      }
    } else {
      // 新增或者删除
      if (element || element === 0) {
        // 记录当前index是用于插入, 知道在哪个元素之前插入, index表示这个元素在第几个
        newFiber = {
          stateNode: null,
          element,
          alternate: null,
          return: workInProgress,
          flag: 'Insert',
          index
        }
      }
      if (oldFiber) {
        // 删除
        oldFiber.flag = 'Delete'
        deleteFiber(oldFiber)
      }
    }

    if (oldFiber) {
      oldFiber = oldFiber.sibling
    }

    if (index === 0) {
      workInProgress.child = newFiber
      prevSibling = newFiber
    } else if (newFiber) {
      prevSibling.sibling = newFiber
      prevSibling = newFiber
    }
    index++
  }
}