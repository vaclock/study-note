# React

> <https://zh-hans.react.dev/learn/render-and-commit>

简单地说, react构建用户界面的步骤:

1. render: 渲染组件, 生成根的fiber-node, 深度遍历, 生成fiber-tree
2. commit: 提交更新, 生成dom树, 深度遍历, 更新dom(初次是createElement, 后续pre-render是diff之后updateElement&createElement), commit的根本工作就是在完成render阶段产生的effectList需要更改dom的fiber

## 直观感受fiber

1. [stack渲染](https://claudiopro.github.io/react-fiber-vs-stack-demo/stack.html)
2. [fiber渲染](https://claudiopro.github.io/react-fiber-vs-stack-demo/fiber.html)


## 提几个问题

1. react15的不可中断到底边界在哪里, 是整个root到每个叶子的整个过程不可中断, 还是每个叶子不可中断?
2. 都说react会有大量的pre-render, 这些pre-render是怎么被触发的, 会不会影响性能?
3. render阶段什么情况下会被schedule所打断, 如果被打断, 那会不会打断未提交这部分白渲染了?
4. 一些变量含义, fiberNode, fiberTree, fiberRoot, rootFiber, alternate, effectList, lane, workInProgress fiber, 方法: createWorkInProgress,beginWork, completeWork
5. 一个组件可以有多个fiber？这个点和双缓存池有没有关联, concurrent mode和legacy mode的区别是什么?
6. render多久会进行一次commit?
7. 我编写一个组件完成后, jsx部分是固定的, babel直接转成createElement的格式, 但是如果jsx整个都是动态生成的, 或者局部是在runtime环节生成, 这些情况下, jsx需要如何被渲染?
8. 究竟是怎么标记副作用的, 副作用肯定在初次渲染中也存在, 第一次和后续有什么区别? 都在effectList中用flags标记吗?
9. 什么阶段调用的createWorkInProgress, 第一次render完成时, 每个节点是否存在alternate属性?
10. render时期, createFiber之前的各种legacyxxx方法是做什么用的?
11. react如何实现的分片渲染(没有使用requestIdleCallback)
12. 哪些情况下会发生re-render? 也就是renderWithHooks函数中的递归部分, 如果发生了re-render, 是不是不可中断?
13. fiber架构的链表比树优势在哪里？递归不可中断，fiber的链表就可中断了吗？
14. react和vue的设计理念和区别

回答:

源码没看懂的地方

1. schedule的unstable_now方法

## diff

1. diff过程中会直接抛弃的情况
2. `reconcileChildFibers`方法处理所有情况下的currentFiber和WipFiber的diff, 以新元素是常规的ReactElement, 旧fiber是多个元素来讲, diff发生在`reconcileSingleElement`, 具体的来说, 循环便利父fiber下旧的子fiber, 对比key和type, 然后其余fiber会被添加Deletion 副作用标记. 当key和type相同时, 使用`useFiber`进行clone, 也就是fiber复用.
3. 以新元素时多元素的情况来讲, 需要一个或多个子fiber替换为多个fiber, diff发生在`reconcileChildrenArray`,

## api

1. `React.memo`: `React.memo(<ReactComponent />, (prevProps, currentProps): boolean)`, 默认情况下第二个参数可选, React会只用Object.is进行比较, 所以当某个props是对象的情况下, 不更改第二个参数的情况, 即使值没有变化, React也会preRender.

## hooks

1. `useMemo`: `useMemo(calculate, deps)`, 当一个计算比较复杂且依赖项比较稳定的情况下, 可以使用useMemo缓存计算.
2. `useContext`

参考文档:
> <https://zlxiang.com/>
>
> <https://juejin.cn/post/7016512949330116645>
