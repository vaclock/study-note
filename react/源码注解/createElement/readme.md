# createElement

## 用途

## jsx

> <https://esbuild.github.io/api/#jsx>
> <https://babeljs.io/docs/babel-plugin-transform-react-jsx>

1. `.*sx`文件中标识`/** @jsxRuntime classic */`, 表示使用`@babel/plugin-transform-react-jsx`插件进行jsx到React.createElement的转换
2. 使用`react/jsx-runtime`插件(`esbuild`可以通过配置`loader`和`jsx`,`jsxDev`开启), 转换jsx则变成了jsx方法
