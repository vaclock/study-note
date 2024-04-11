/**
 * {
 *  'h1',
 *   props: {
 *      title: 'aaa',
 *      children: [
 *          '111',
 *          ReactElement
 *      ]
 *   }
 * }
 * @param {*} tagType
 * @param {*} props
 * @param  {...any} children
 */
export default function createElement(tagType, props, ...children) {
    console.log(tagType, 'tagType')
    return {
        type: tagType,
        props: {
            ...props,
            children: children.map(child => typeof child === 'object' ? child : createTextNode(child))
                // if (typeof child === 'string') {
                //     return createTextNode(child)
                // }
                // return child
                // typeof child === 'object' ? child : createTextElement(child)
            // })
        }
    }
}

function createTextNode (text) {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text,
            children: []
        }
    }
}