# 配置

## 参数解释

| 参数 |类型|含义|
|---|---|---|
|input|string|打包入口|
|output|Array \| Object|文件输出|
|>> file|string|输出文件名
|>> format|string|输出文件格式
|>> name| string | 指定在 IIFE 和 UMD 格式中生成的全局变量名|
|>> dir|string|输出文件目录(多文件输入时必填)|
|>> entryFileNames|string|入口文件指纹|
|>> chunksFileNames|string|输出文件指纹|


## 多种格式输出
```js
output: [
	{
		file: 'dist/iife/bundle.js',
		format: 'iife',
	},
	{
		file: 'dist/amd/bundle.js',
		format: 'amd',
	}
]
```

## 动态导入

动态导入的文件会自动进行代码分割

## 一些配置解决方案

### 不同的文件做不同类型的导出
> 其中一个入口文件输出成一种格式 另外一个入口文件输出成另外一种格式
```js
// rollup.config.js
export default [
	{
		input: 'src/index.js',
		output: {
			file: 'dist/esm/index.js',
			format: 'esm'
		}
	},
	{
		input: 'src/main.js',
		output: {
			file: 'dist/iife/main.js'
			format: 'iife'
		}
	}
]
```

## rollup的基本理论点
1. [Unresolved dependencies](https://cn.rollupjs.org/troubleshooting/#warning-treating-module-as-external-dependency): 默认情况下 rollup只解析相对路径, 绝对路径需要使用external或者插件
2. [[name] is not exported by [module]](https://cn.rollupjs.org/troubleshooting/#error-name-is-not-exported-by-module)Rollup 默认只能分析 ESM（ECMAScript Module）模块, 对于其他模块 只能使用插件
3. 默认不会进行es5语法转换 需要安装babel插件

## 使用插件
1. @rollup/plugin-node-resolve: 将依赖打包到打包结果中
2. rollup-plugin-polyfill-node: node内置模块的polyfill
3. @rollup/plugin-commonjs: 将commonjs模块转为esm模块
4. @rollup/plugin-babel: babel插件 用于转换成es5语法, 需要安装babel-core 和 env预设
5. tslib、@rollup/plugin-typescript: 用于支持 typescript 的编译

