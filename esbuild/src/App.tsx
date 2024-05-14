import React from 'react';
import ReactServer from 'react-dom/server';
import logo from './assets/logo.png';

let HelloComp = () => <h1>hello world</h1>

console.log(ReactServer.renderToString(<div>
    <HelloComp />
    <div>
        <img src={logo} />
    </div>
</div>));