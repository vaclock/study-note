
export function render(element, container) {
    // 将element都遍历成html creteElement createTextNode
    const dom = element.type === 'text' ? document.createTextNode('') : document.createElement(element.type);
    Object.keys(element.props)
        .filter(prop => prop !== 'children')
        .map(prop => {
            dom[prop] = element.props[prop]
        })

    element.props?.children?.map(child => render(child, dom));

    container.appendChild(dom)
}