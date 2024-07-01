import { greet } from './module.js';

function render() {
  document.getElementById('app').textContent = greet();
}

render();

if (import.meta.hot) {
  import.meta.hot.accept('./module.js', (newModule) => {
    render();
  });
}

export default render;
