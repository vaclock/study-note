export function greet() {
  return 'Hello, world!';
}

if (import.meta.hot) {
  import.meta.hot.accept();
}
