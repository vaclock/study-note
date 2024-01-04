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
    return {
        type: tagType,
        props: {
            ...props,
            children: children.map(child => child)
        }
    }
}
