
export function render(element, container) {
    // 将element都遍历成html creteElement createTextNode
    const dom = typeof element === 'string' ? document.createTextNode(element) : document.createElement(element.type);

    element?.props && Object.keys(element.props)
        .filter(prop => prop !== 'children')
        .map(prop => {
            dom[prop] = element.props[prop]
        })

    element.props?.children?.map(child => render(child, dom));

    container.appendChild(dom)
}