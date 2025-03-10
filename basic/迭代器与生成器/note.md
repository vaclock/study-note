
练习

为了巩固这些概念，你可以尝试以下练习：

实现一个无限斐波那契数列的生成器
创建一个对象，使其可迭代并生成自定义序列
使用生成器实现一个简单的异步任务队列
尝试使用生成器处理文件读取操作

js中数据类型的双重特性

比如这段代码

```js
Array.prototype.abc = function() {this; // 这个this是什么?}
const arr = [1, 2, 3]; arr.abc()
```

`arr`明显是一个对象，因为我们可以`arr.abc`, 以及`Array.prototype`的所有方法或属性

但是, `this`和`arr`打印后又是`[1, 2, 3]`, 这有数一系列有序的元素

所以，js中的数组，即使`数据`也是`对象`, 我们看到的`[1, 2, 3]`只是`Array`对象的表现形式

js数组的双重性质

1. 数据视角: 作为一系列有序的元素
2. 对象视角: 作为一个继承自`Array.prototype`的对象

`arr`本身就是一个完整的对象，而不仅仅是c++实现中某个原始数组数据的引用

V8引擎如何实现这种双重性

```cpp
class JSArray : public JSObject {
private:
  // 存储元素的内部结构
  ElementsAccessor* elements_; // 指向实际元素存储的指针

  // 数组长度
  unit32_t length_;

  // ...其他方法以及JSObject的重载
}
```

V8所做的事:

1. 当我们在js中访问`arr[0]`、`arr.length`时，V8会直接访问元素内部的`elements_`存储和`length_`属性
2. 当我们调用`arr.abc`等方法时，V8会通过原型链查找，找到`Array.prototype.abc`方法, 同时将整个`JSArray`对象作为`this`传递

特别的，当我们调用数组的`[Symbol.iterator]()`时，其实是在`Array.prototype`上找到的，方法内，调用内置的`ArrayPrototypeIterator`

`Array.prototype[Symbol.iterator]`的实现在V8的启动代码中，主要位于：`src/builtins/array.js或src/builtins/builtins-array.cc`中定义核心函数
在V8启动时通过`src/init/bootstrapper.cc`注册到全局对象上

生成器函数

生成器函数是一种语法糖，便于简洁创造出迭代器
