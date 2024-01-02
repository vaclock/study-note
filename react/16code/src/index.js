import React from 'react';
// import ReactDom from 'react-dom'

const element = <h1 title="foo">Hello</h1>
console.log('element: ', element);

const root = document.querySelector('#root')
console.log(root);

const content = document.createElement(element.type);
// content.setAttribute('title', element.props.title);

const text = document.createTextNode(element.props.children);
// text.nodeValue = ;
content.appendChild(text);

root.appendChild(content);
// ReactDom.render(element, root)
