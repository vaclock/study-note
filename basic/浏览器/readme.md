**1. script元素的加载**
   1. 默认同步加载(sync)：
加载行为：在解析HTML文档时遇到`<script>`标签时，会停止解析，先加载并执行JavaScript文件，加载完成后继续解析HTML文档。
执行顺序：多个`<script>`标签按照它们在文档中出现的顺序执行。
缺点：会阻塞HTML文档的解析，可能导致页面加载时间增加。
   2. defer：
加载行为：HTML文档解析时遇到带有defer属性的`<script>`标签时，会继续解析文档，同时在后台异步加载JavaScript文件。
执行顺序：所有带defer属性的脚本会按照它们在文档中出现的顺序在HTML文档完全解析完成后执行。
优点：不会阻塞HTML文档的解析，适合依赖于DOM的脚本。

   3. async：
加载行为：HTML文档解析时遇到带有async属性的`<script>`标签时，会继续解析文档，同时在后台异步加载JavaScript文件。
执行顺序：每个async脚本一旦加载完成就会立即执行，因此不同async脚本的执行顺序无法保证。
优点：不会阻塞HTML文档的解析，适合不依赖于其他脚本或DOM的独立脚本。

**2. 浏览器渲染页面的事件**

`DOMContentLoaded`：在DOM加载和解析完成后触发，不必等待其他资源。页面加载过程中只触发一次。
`load`：在所有资源加载完成后触发。页面加载过程中只触发一次。
`beforeunload`：在页面即将卸载前触发。每次用户尝试离开页面时都会触发。例如点击链接、关闭浏览器窗口或标签页、刷新页面等
`unload`：在页面卸载后触发。
`readystatechange`：在文档的准备状态改变时触发。一般出现三次, loading -> interactive -> complete

**点击带有 target="_blank" 的链接不会触发 beforeunload 和 unload 事件。**, 但是点击target="_self" 的链接会触发.

**3. link加载的顺序**

4. link和script元素加载的区别
