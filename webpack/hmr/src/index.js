import a from './a';
console.log(a);
console.log('test')

if (module.hot) {
    module.hot.accept()
}