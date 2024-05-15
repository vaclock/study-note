// import React from 'react';
// import ReactServer from 'react-dom/server';
// import logo from './assets/logo.png';

// let HelloComp = () => <h1>hello world</h1>

// console.log(ReactServer.renderToString(<div>
//     <HelloComp />
//     <div>
//         <img src={logo} />
//     </div>
// </div>));


import React from 'react';
import ReactDOM from 'react-dom/client';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import "./style.css"

const App = () => (
  <div>
    <h1 className='title'>Hello World!</h1>
    <Comp1 />
    <Comp2 />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);