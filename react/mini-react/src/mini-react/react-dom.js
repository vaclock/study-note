import {createRoot} from './fiber';


function render(element, container) {
  // 1. 递归写法
  // const dom = RenderDom(element)
  // container.appendChild(dom)

  // 2. fiber写法
  createRoot(element, container)
}

export function RenderDom(element) {
  // console.log(element, 'element')
  let dom = null
  if (!element && element !== 0) {
    // 什么情况下会是0啊？
    return null
  }
  if (typeof element === 'string') {
    dom = document.createTextNode(element)
    return dom
  }
  if (typeof element === 'number') {
    dom = document.createTextNode(String(element))
    return dom
  }

  // if (Array.isArray(element)) {
  //   dom = document.createDocumentFragment()
  //   element.forEach(item => {
  //     const childDom = RenderDom(item)
  //     if (childDom) {
  //       dom.appendChild(childDom)
  //     }
  //   })
  //   return dom
  // }

  const {
    type,
    props: {children, ...attributes},
  } = element;

  if (typeof type === 'string') {
    dom = document.createElement(type)
  } else if (typeof type === 'function') {
    dom = document.createDocumentFragment()
  }

  // if (typeof type === 'function') {
  //   const {type: Comp, props} = element
  //   if (type.prototype.isReactComponent) {
  //     const component = new Comp(props)
  //     const jsx = component.render()
  //     dom = RenderDom(jsx)
  //   } else {
  //     const jsx = Comp(props)
  //     dom = RenderDom(jsx)
  //   }

  // }
  // if (children) {
  //   const childDom = RenderDom(children)
  //   if (childDom) {
  //     dom.appendChild(childDom)
  //   }
  // }
  updateAttributes(dom, attributes)
  return dom
}

export function updateAttributes(dom, attributes, oldAttributes = {}) {
  Object.keys(oldAttributes).forEach(item => {
    if (item === 'className') {
      attributes[item].split(' ').forEach((curClass) => {
        dom.classList.remove(curClass)
      })
    } else if (item.startsWith('on')) {
      const eventname = item.substring(2).toLowerCase()
      dom.removeEventListener(eventname, oldAttributes[item])
    } else if (item === 'style') {
      // style="color:red;fontSize:12px" style={{color: 'red', fontSize: '12px'}}
      if (typeof attributes[item] === 'object') {
        for(let prop in attributes[item]) {
          dom.setAttribute(`${prop}`, 'initial')
        }
      } else {
        attributes[item].split(';').forEach(cur => {
          const [key, value] = cur.split(':');
          const newKey = key.replace(/(?<!^)[A-Z]/g, '-$&').toLowerCase();
          dom.setAttribute(`${newKey}`, 'initial')
        })
      }
    }
  })

  // className, onClick, children, style, data, typexx
  console.log(Object.keys(attributes), attributes)
  Object.keys(attributes).forEach(item => {
    // item
    // switch(item) {
    //   case (item === 'className'): {
    //     dom.setAttribute('class', attributes[item])
    //   }
    // }
    if (item === 'className') {
      attributes[item].split(' ').forEach((curClass) => {
        dom.classList.add(curClass)
      })
      // dom.setAttribute('class', attributes[item])
    } else if (item === 'style') {
      if (typeof attributes[item] === 'object') {
        for(let prop in attributes[item]) {
          dom.setAttribute(`${prop}`, attributes[item][prop])
        }
      } else {
        // color: red;fontSize: '12px';
        attributes[item].split(';').forEach(cur => {
          const [key, value] = cur.split(':');
          const newKey = key.replace(/(?<!^)[A-Z]/g, '-$&').toLowerCase();
          console.log(newKey, value);
          dom.setAttribute(`${newKey}`, value)
        })
      }
    } else if (item.startsWith('on')) {
      dom.addEventListener(item.substring(2).toLowerCase(), attributes[item])
    } else {
      if (typeof attributes[item] === 'object') {
        for(let prop in attributes[item]) {
          dom.setAttribute(prop, attributes[item][prop])
        }
      } else {
        // 如果是fragment, 这里会报错
        // dom.setAttribute(item, attributes[item])
        dom[item] = attributes[item]
      }
    }
  })
}
const ReactDOM = {
  render
}
export default ReactDOM;