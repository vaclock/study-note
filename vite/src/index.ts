import {setupCounter} from './counter';
import {countdown} from './countdownRender';
document.querySelector('#app')!.innerHTML = `<div>
    <h2>hello!222</h2>
    <button id="counter"></button>
</div>`;
setupCounter(document.querySelector('#counter'))

countdown();
