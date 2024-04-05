## 安装机制
1. npm安装时会先检查本地的node_modules目录是否存在 如果存在 则不安装
2. 检查缓存中是否存在 如果存在 则使用缓存
3. 如果都没有 则会从制定仓库中进行下载 然后写入到node_modules中 同时会进行缓存
```shell
# 强制清除缓存
npm cache clean -f

# 获取缓存目录
npm config get cache

# 设置缓存目录
npm config set cache "新的路径"
```