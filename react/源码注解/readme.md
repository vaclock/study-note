# React

## api

1. `React.memo`: `React.memo(<ReactComponent />, (prevProps, currentProps): boolean)`, 默认情况下第二个参数可选, React会只用Object.is进行比较, 所以当某个props是对象的情况下, 不更改第二个参数的情况, 即使值没有变化, React也会preRender.

## hooks

1. `useMemo`: `useMemo(calculate, deps)`, 当一个计算比较复杂且依赖项比较稳定的情况下, 可以使用useMemo缓存计算.
2. `useContext`

参考文档:
> <https://zlxiang.com/>
