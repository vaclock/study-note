# 什么是微前端

> <https://micro-frontends.org/>

多个独立应用的组合 形成一个完整的网站或者app

## 背景

前端技术栈的多样性与快速变化性 以及 各 library 和 framework 新版本的不向后兼容[^1] , 也不支持支持向前兼容[^2] , 造成了在接手老项目时 痛苦的迭代和渐进式重构, 所以 需要一种 技术栈无关 独立开发、独立部署的解决方案 就是微前端

## 名词

1. 主应用 or 基座: 是整个微前端架构的核心。
2. 子应用: 主应用管理的各个独立的模块。

## 比较

1. iframe: [Why Not Iframe](https://www.yuque.com/kuitos/gky7yw/gesexv)

2. web component:  [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components)

3. Micro-app: [micro-app Q & A](https://micro-zoe.github.io/micro-app/0.x/#/zh-cn/questions)

4. qiankun: [qiankun的优势](https://www.yuque.com/kuitos/gky7yw/nwgk5a)

## 展望

[^1]: 向后兼容: 新版本软件支持旧数据(如operate system、c、mysql、javascript的polyfill)
[^2]: 旧版本软件支持新数据(如html)

## 使用

在umi和qiankun框架中的使用

### 父应用

### 子应用
