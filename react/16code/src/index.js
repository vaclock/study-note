// import React from 'react';
// import ReactDom from 'react-dom'

import React from '../react/index.js';

// const element = <div><div className='test' id="container">
//     <h1 title="foo">Hello</h1>
//     111
//     <a href="">链接</a>
// </div></div>
// console.log('element: ', element);

// const root = document.querySelector('#root')
// React.render(element, root)
// console.log(root);

// const content = document.createElement(element.type);
// content.setAttribute('title', element.props.title);

// const text = document.createTextNode(element.props.children);
// text.nodeValue = 'test text node';
// content.appendChild(text);

// root.appendChild(content);
// React.render(element, root)
// setTimeout(() => {
//     React.render(element, root)
// }, 1000)

function ShowNum() {
    let [num, setNum] = React.useState(0);
    return <div>
        <h1  onClick={() => setNum((num) => num + 10)}>num: {num}</h1>
    </div>
}

function Counter() {
    const [state, setState] = React.useState(1);
    const [state2, setState2] = React.useState(2);
    function onClickHandle(params) {
      setState((state) => state + 1);
      setState((state) => state + 2);
    }
    return (
      <div>
        <ShowNum />
        <h1>Count: {state}</h1>
        <button onClick={onClickHandle}>+Add</button>
        <hr />
        <h1>Count2: {state2}</h1>
        <button onClick={() => setState2((state) => state + 1)}>+1</button>
        <button onClick={() => setState2((state) => state + 2)}>+2</button>
      </div>
    );
}
const element = <Counter />;

React.render(element, document.getElementById('root'));