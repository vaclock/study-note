import { getDeletions } from './fiber';
import {updateAttributes} from './react-dom';
export function commitRoot(rootFiber) {
  const deletions = getDeletions();
  deletions.forEach(commitWork);

  commitWork(rootFiber.child)
}

function commitWork(fiber) {
  if (!fiber) return

  let parentDom = fiber.return.stateNode

  if (fiber.flag === 'Delete') {
    if (typeof fiber.element?.type !== 'function') {
      parentDom.removeChild(fiber.stateNode)
    }
    return
  }


  commitWork(fiber.child)
  if (fiber.flag === 'Insert') {
    const targetDom = parentDom.childNodes[fiber.index]
    if (targetDom) {
      parentDom.insertBefore(fiber.stateNode, targetDom)
    } else {
      parentDom.appendChild(fiber.stateNode)
    }
  } else if (fiber.flag === 'Update') {
    const {children, ...newAttributes} = fiber.element
    const oldAttributes = Object.assign({}, fiber.alternate.element.props)
    delete oldAttributes.children

    updateAttributes(fiber.stateNode, oldAttributes, newAttributes)
  }
  commitWork(fiber.sibling)
}