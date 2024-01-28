// import React from 'react';
// import ReactDom from 'react-dom'

import React from '../react/index.js';

const element = <div><div className='test' id="container">
    <h1 title="foo">Hello</h1>
    111
    <a href="">链接</a>
</div></div>
console.log('element: ', element);

const root = document.querySelector('#root')
React.render(element, root)
// console.log(root);

// const content = document.createElement(element.type);
// // content.setAttribute('title', element.props.title);

// const text = document.createTextNode(element.props.children);
// // text.nodeValue = ;
// content.appendChild(text);

// root.appendChild(content);
// ReactDom.render(element, root)
