import {setupCounter} from './counter';
document.querySelector('#app')!.innerHTML = `<div>
    <button id="counter"></button>
</div>`;
setupCounter(document.querySelector('#counter'))
