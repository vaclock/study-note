## 特性

### 依赖预购建
1. 规范化包(减少转换的次数)
2. 减少请求瀑布流(可能会合并文件)


### HMR
#### 原理
1. 基于原生的ESM规范来实现 在文件发生变化时 vite监听到相应模块的变化 触发相应的api 实现局部的更新
2. 基于ESM-HMR规范
3. import.meta对象为现代浏览器原生的内置对象 vite在这个对象上的hot属性定义了一套完整的属性和方法 在vite中 可以通过import.meta.hot来访问HMR这些属性和方法

#### 属性
hot.accept模块更新时逻辑
1. 自身模块的更新
```js
accept(cb: (mod: ModuleNameSpace | undefined) => void): void
```
2. 指定某个子模块的更新
```js
accept(dep: string, cb: (mod: ModuleNameSpace | undefined) => void): void
```
3. 指定多个子模块的更新
```js
accept(deps: readonly string[], cb: (mod: ModuleNameSpace | undefined) => void): void
```