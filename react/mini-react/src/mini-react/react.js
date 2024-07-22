// isReactComponent
// setState ===> preRender

import { commitRender, getCurrentFunctionFiber, getHookIndex } from "./fiber"

export function useState(initial) {
  const currentFunctionFiber = getCurrentFunctionFiber()
  const hookIndex = getHookIndex()

  const oldHook = currentFunctionFiber?.alternate?.hooks?.[hookIndex]

  const hook = {
    state: oldHook ? oldHook.state : initial,
    queue: []
  }

  const actions = oldHook ? oldHook.queue : []
  actions.forEach(action => {
    hook.state = action(hook.state)
  })

  const setState = (action) => {
    if (typeof action === 'function') {
      hook.queue.push(action)
    } else {
      hook.queue.push(() => {
        return action
      })
    }
    commitRender()
  }
  currentFunctionFiber.hooks.push(hook)
  return [hook.state, setState]
}

// _updateProps
export class Component {
  constructor(props) {
    this.props = props
  }
}

Component.prototype.isReactComponent = true
Component.prototype._updateProps = function (props) {
  this.props = props
}

Component.prototype.setState = function (arg) {
  // setState((props, state) => {})
  if (typeof arg === 'function') {
    const result = arg(this.props, this.state)
    this.state = {
      ...this.state,
      ...result
    }
  } else {
    // setState({count: 1})
    this.state = {
      ...this.state,
      ...arg
    }
  }

  commitRender()
}
