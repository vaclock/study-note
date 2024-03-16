[toc]
## 五层网络模型
从上到下分别为：
应用层：跟具体应用相关的协议                HTTP FTP（文件共享） DNS SMTP（发邮件） POP3（收邮件）
传输层：保证消息的可靠传输                  TCP（消息准确, HTTP基于TCP） UDP（消息可能会丢包）
网络层：在互联网找到对方                    IP 路由器（设备）
数据链路层：在一个子网（局域网）中找到对方？    MAC 交换机（设备）
物理层：上面给我的东西如何用信号表示并传输？   光纤 双绞线 同轴电缆 集线器


## 常见的请求方式
本质：本质就是请求行中的一个单词 它向服务器描述了客户端发出请求的动作类型
在HTTP中 不同的请求方法只是包含了不同的语义，但服务器和客户端约定俗成的一些行为造成了他们的区别

**HTTPS常见请求方法有哪些**
- GET 表示向服务器获取资源 请求数据在请求行中(浏览器规定大概是4KB--其他环境比如node环境无限制) 无须请求体(写了浏览器中fetch会报错、node环境会忽视请求体)
- POST 表示向服务器提交信息 通常用于产生新的数据或者获取登录信息 请求数据一般在请求体中(当然也可以在请求体中,请求体提交数据浏览器无限制)
- PUT 表示希望服务器修改数据 业务数据在请求体中
- DELETE 删除
- OPTIONS 发生跨域时预检请求 向服务端提交跨域申请
- TRACE 用于测试与诊断
- CONNECT 用于建立连接管道 用于代理 网页中几乎很少

**GET与POST的区别**
- GET在浏览器无法添加请求体,会报错 在node环境则无效
- GET请求的请求行参数大小有限制 POST请求体浏览器无限制
- GET请求只支持ASCII编码,如果有中文 需要转码(现在浏览器会自动编码)
- 大概率GET请求传递的参数都在path中 能够通过分享地址完整的重现页面 但是也暴露了数据 所以敏感数据不应该使用GET请求 起码请求参数不应该放到path中
- 刷新页面时 如果是POST请求 浏览器会提示用户是否重现提交 如果是GET请求 则不会
- GET请求可以被收藏浏览器书签 POST请求则不行

## cookie

由于http协议是无状态的 为了在客户端不需要用户每次都输入身份认证 所以可以用cookie来存储用户信息
> 在html5之前是没有localStorage的 不然localStorage也可以实现

在后续请求服务端的时候 请求中带着cookie即可

### cookie的构成
- key: 键
- value: 值
- domain: 生效的域
- path: 请求path 比如/login请求 (该参数可选)
- secure: 如果是true 则请求协议必须是https 否则不会发送该cookie
- expire: 过期时间 时间戳
- max-age: 设置cookie的相对有效期。expire和max-age通常仅设置一个即可。比如设置max-age为1000，浏览器在添加cookie时，会自动设置它的expire为当前时间加上1000秒，作为过期时间。
- http-only: 设置cookie是否仅用于传输 如果为true 则代表无法通过js获取 只会在请求时携带 可以防止XSS

具体如何将cookie加入到请求中呢?
- 浏览器会将符合条件的cookie 自动添加到请求中

### 如何设置cookie
- 服务端设置cookie 在响应体中依次添加cookie 可设置多个cookie 浏览器接受之后会自动写入并覆盖path&domain相同的cookie
  每个cookie的格式为: 键=值; path=?; domain=?; expire=?; max-age=?; secure; httponly
```shell
set-cookie: cookie1
set-cookie: cookie2
set-cookie: cookie3
```

- 客户端设置cookie
```js
document.cookie = "键=值; path=?; domain=?; expire=?; max-age=?; secure";
```
## storage
localStorage、sessionStorage、cookie区别？
三者都可以存储本地数据
cookie的兼容性最佳 所有浏览器都支持 浏览器也对cookie有一些默认行为 比如服务端的响应体中有```set-cookie:key=value;```字段时 浏览器会自动设置cookie 每次客户端发生请求时 浏览器也会自动携带合法的cookie 浏览器对cookie的限制大小大概是4KB 正因为这些默认行为 使得网站攻击者可以使用cookie进行攻击

html5新增的sessionStorage和localStorage 区别是前者只存在于会话阶段 会话结束 则sessionStorage的数据失效 localStorage用于持续的存储数据 如果用户不删除 则不会失效 浏览器针对storage没有默认行为 使得相对cookie比较安全 读取数据 存储数据的工作交给了js代码 同时storage大小限制一般在5MB 而且storage只和domain有关联 cookie和domain和path有关联

## 加密
### 对称加密
- 明文通过密钥 得到密文
- 密文通过相同的密钥得到明文
常见的有AES DES
优点: 加密 解密速度快 适合大数据量加密
缺点: 在网络中需要分发密钥 增加了密钥被窃取的风险

### 非对称加密
- 明文通过公钥得到密文
- 密文通过私钥得到明文
常见的有RSA DSA
- 优点: 安全(仅有一方可以解密 私钥是永远不会在网络进行传输的 一般存储在服务器)--当然服务器如果被攻击了就没法了
- 缺点: 仅有一方可以解密

### 摘要/哈希/散列
- 明文通过算法得到密文 (可以用于将用户密码存储成md5加密之后的密码, 好处是服务器万一被攻击 攻击者也不知道密码是啥 用户密码不应该被除了用户之外的任何人知道)
常见算法: MD4 MD5
优点: 密文占用空间小(定长的短字符串) 难以被破解
缺点: 目前无法解密


## JWT(JSON-Web-Token)
- 用户登录的流程: 使用cookie自动实现 请求体中```set-cookie: key=value;``` 通过浏览器每次发起请求自动携带cookie 服务端使用cookie进行验证

- 问题: 非浏览器环境怎么办? 如何防止令牌被伪造?


## 同源策略

## 跨域

## 文件上传

## 输入url之后

## session

## HTTP缓存

## TCP协议

## web攻击
### CSRF攻击
### XSS攻击

## 网络性能优化

## 断点续传

## 域名和DNS

## SSL TLS HTTPS

## HTTP各版本差异

## WebSocket
