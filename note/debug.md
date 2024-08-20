# 调试

## 调试工具的四要素

1. frontend: 调试的UI
2. backend: 负责把代码的运行时状态通过调试协议暴露出来
3. 调试协议:
4. 信道

## sourcemap

### 原理

1. bundle.js: `webpack`根据`entry`和`output.path`生成的文件, 默认经过混淆, 并且通过eval的方式包裹代码, 并且在最后加上`//# sourceURL=webpack://xxxx`
2. bundle.js.map: 如果开启了`devtool: sourcemap`, 会生成该文件, 并在`bundle.js`中添加`//# sourceMappingURL=bundle.js.map` 用于devtools解析源码

对比

- 源码:

```js
function add(a, b) {
  return a + b
}

console.log(add(1, 2))
```

- `bundle3e9d6.js`

```js
console.log(3);
//# sourceMappingURL=bundle3e9d6.js.map
```

- `bundle3e9d6.js.map`格式

一个分号就代表一行，这样就免去了行的映射。

然后每一行可能有多个位置的映射，用 , 分隔。

```json
{
  "version": 3,
  "file": "bundle3e9d6.js",
  "mappings": "AAIAA,QAAQC,IAHCC",
  "sources": ["webpack://webpackbuild/./src/index.js"],
  "sourcesContent": ["function add(a, b) {\n  return a + b\n}\n\nconsole.log(add(1, 2))"],
  "names": ["console", "log", "a"],
  "sourceRoot": ""
}
```

1. version: 应该是指webpack使用到的`webpack-sources`主版本号
2. file: 生成的文件名
3. mappings: 源码和bundle.js的映射关系, 分别有这些对应信息
   1. 转换后的代码第几列(行数通过分号 ; 来确定）)
   2. 转换前的在哪个源码文件, 通过编码所在的索引来取sources
   3. 转换前的源码第几行
   4. 转换前的源码第几列
   5. 转换前的源码哪个变量, 通过编码所在索引来取names
4. sourceContent: 通过上述对应关系, 最终解析sourcesContent, 得到源码
5. sourceRoot: 源码的根目录, 默认是空

### webpack中的sourcemap
