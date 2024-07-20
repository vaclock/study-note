import {setupCounter} from './counter';
import {countdown} from './countdownRender';
import {debounce} from 'lodash-es'
import React from 'react';
const fn = debounce(() => console.log(11))
console.log(fn)
document.querySelector('#app')!.innerHTML = `<div>
    <h2>hello!222</h2>
    <button id="counter"></button>
</div>`;
setupCounter(document.querySelector('#counter'))

countdown();
