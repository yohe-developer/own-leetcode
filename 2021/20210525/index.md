# koa 与 express

express：自带路由等规则，使用普通的回调函数

koa： 提供基础框架，依靠中间件来集成；利用 async/await 来处理异步问题

# NodeJS 的优缺点

优点

1. 高并发
2. I/O 密集型应用。 遇到 I/O 事件会创建一个线程去执行，然后主线程会继续往下执行的

缺点

1. 不适合 CPU 密集型应用
2. 只支持单核 CPU，不能充分利用 CPU
3. 可靠性低，一旦代码某个环节崩溃，整个系统都崩溃。原因：单进程，单线程
   1. 解决方案：（1）Nnigx 反向代理，负载均衡，开多个进程，绑定多个端口；
   2. （2）开多个进程监听同一个端口，使用 cluster 模块；

# CDN 加速服务

CDN 的全称是(Content Delivery Network)，即内容分发网络。

- 解决问题
  - 解决由于网络带宽小、用户访问量大、网点分布不均等原因，提高用户访问网站的响应速度。
- 原理
  - 将您源站的资源缓存到位于全球各地的 CDN 节点上，用户请求资源时，就近返回节点上缓存的资源，而不需要每个用户的请求都回您的源站获取，避免网络拥塞、缓解源站压力，保证用户访问资源的速度和体验

# DOM 事件机制

// 参考：https://www.cnblogs.com/starof/p/4066381.html

DOM0: 直接通过标签绑定；

- 特点：同一元素同一种事件只能绑定一个函数。不存在兼容问题
- 清除事件：给改事件函数置为 null

DOM2:通过 addEventListener 绑定的事件;

- 特点：同一元素同一种事件可以绑定多个，按照 addEventListener 绑定顺序执行；
- addEventListener：三个参数 1）事件名 2）函数 3）true 则表示在捕获阶段调用，为 false 表示在冒泡阶段调用。
- 清除事件：removeEventListener

## 事件流

事件发生时会在元素节点与根节点之间按照特定的顺序传播，路径所经过的所有节点都会收到该事件，这个传播过程即 DOM 事件流。

### 事件流模型

事件传播的顺序对应浏览器的两种事件流模型：捕获型事件流和冒泡型事件流。

1. 冒泡型事件流：事件的传播是从最`特定`的事件目标到最不特定的事件目标。即从 DOM 树的`叶子到根`。
   - div>—><body>—>**<html>**—>document
   - 阻止冒泡： e.stopPropagation();
2. 捕获型事件流：事件的传播是从最`不特定`的事件目标到最特定的事件目标。即从 DOM 树的`根到叶子`。
   - 在捕获型事件流中 click 事件传播顺序为**document**—>**<html>**—>**<body>**—>**<div>**

### DOM 事件流

DOM 标准规定事件流包括三个阶段：事件捕获阶段、处于目标阶段和事件冒泡阶段。

- 事件捕获阶段：**实际目标**（<div>）在捕获阶段**不会接收事件**。也就是在捕获阶段，事件从 document 到<html>再到<body>就停止了。上图中为 1~3.
- 处于目标阶段：事件在<div>上发生并处理。**但是事件处理会被看成是冒泡阶段的一部分**。
- 冒泡阶段：事件又传播回文档。

## 事件流的应用

### 事件代理

事件代理的原理用到的就是事件冒泡和目标元素，把事件处理器添加到父元素，等待子元素事件冒泡，并且父元素能够通过 target（IE 为 srcElement）判断是哪个子元素，从而做相应处理

- 优点：1）将多个事件处理器减少到一个，因为事件处理器要驻留内存，这样就提高了性能。2）DOM 更新无需重新绑定事件处理器，因为事件代理对不同子元素可采用不同处理方法

# http 状态码

### 200

表示正常 0k，这个是地球人都知道的了。

### 301

Moved Permanently 表示客户请求的文档在其他地方，新的 URL 在 Location 头中给出，浏览器应该自动地访问新的 URL。

### 304

Not Modified：客户端有缓冲的文件并发出了一个条件性的请求（一般是提供 If-Modified-Since 头表示客户只想比指定日期更新的文档）。服务器告诉客户，原来缓冲的文档还可以继续使用。

# async/await

async 函数就是 Generator 函数的语法糖。

优点

1. 内置执行器。
2. 更好的语义
3. 更广的适用性
   async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数

# TCP/IP

TCP (Transmission Control Protocol)和 UDP(User Datagram Protocol)协议属于传输层协议

TCP 支持的应用协议主要有：Telnet、FTP、SMTP 等； UDP 支持的应用层协议主要有：NFS（网络文件系统）、SNMP（简单网络管理协议）、DNS（主域名称系统）、TFTP（通用文件传输协议）等。 TCP/IP 协议与低层的数据链路层和物理层无关，这也是 TCP/IP 的重要特点

### TCP(Transimision Control Protocal)

- 传输控制协议
- 可靠的、面向连接的协议
- 传输效率低

TCP 建立连接和释放连接

三次握手

四次挥手

### UDP(User Datagram Protocal)

- 用户数据报协议
- 不可靠的、无连接的服务
- 传输效率高

# http、https、HTTP2

http（超文本传输协议(HyperText Transfer Protocol) ）

特点：

1. 无状态性

2. 持久连接

缺陷：

1. 耗时：传输数据每次都要建立连接
2. 不安全：HTTP 是明文传输的
3. Header 内容过大
4. keepalive 压力过大

影响因素：

1. 带宽
2. 延迟：1）浏览器阻塞（浏览器的限制，超过浏览器的最大连接数，后续请求会被阻塞）
3. DNS 查询
4. 建立连接

### https

1. SSL(Secure Sockets Layer)，简称安全套接入层
2. TLS(Transport Layer Security)，简称安全传输层协议，该协议由两层组成： TLS 记录协议（TLS Record）和 TLS 握手协议（TLS Handshake）
3. 一般把 TLS 协议归为传输层安全协议。
4. HTTPS 可以理解为 HTTP+SSL/TLS， 即 HTTP 下加入 SSL 层，HTTPS 的安全基础是 SSL，因此加密的详细内容就需要 SSL，用于安全的 HTTP 数据传输。

### HTTP2.0

    1. 新的二进制格式（Binary Format）

2. 多路复用（MultiPlexing），即连接共享，即每一个 request 都是是用作连接共享机制的。（多个请求可同时在一个连接上并行执行。某个请求任务耗时严重，不会影响到其它连接的正常执行）
3. header 压缩
4. 服务端推送（server push）

# 用户访问网站全过程

1. DNS 解析获取 IP;1）浏览器缓存 DNS 解析。2）本地 host 解析。3）域名解析服务器

2. 发起 TCP 连接请求

3. 负载均衡

4. 浏览器渲染；生成 DOM Tree。根据 CSS 内容，生成 CSS Rule Tree(规则树)。调用 JS 执行引擎执行 JS 代码。

   - 解析 HTML，得到一个 DOM tree

   - 解析 CSS，得到 CSSOM tree
   - 将两者整合成渲染数，render tree
   - 布局（layout）， 根据 Render Tree 计算每个节点的位置大小等信息 （在草稿本上画了个草图）
   - 绘制（Painting ）根据计算好的信息绘制整个页面
   - 重排（回流）步骤 4
   - 重绘 步骤 5

5. 静态资源的加载；在渲染过程中发现页面引用了其他未加载的 image、css 文件、js 文件等静态内容

6. TCP 断开

### 解析 html

1. 自上而下解析 HTML
2. 遇到 style，会下载样式表，同时构建 CSSOM tree，`并不会阻塞HTML解析`
3. 遇到 script，会立即下载并执行得到的脚本，会阻塞`html的解析`；<script> 标签的 async 和 defer 属性可以改变阻塞 HTML 解析的情况，但是较低版浏览器不支持，所以最佳的实践是，将<script>放在</body>前。
   1. 正常 script：下载阻塞，执行阻塞
   2. async： 下载异步，执行阻塞
   3. defer：下载异步，最后执行
4. 可能还有 GPU 渲染 3D 的过程

# 跨域

### 什么是跨域

请注意：localhost 和 127.0.0.1 虽然都指向本机，但也属于跨域。

1. 不同域名（子域名不同）
2. 不同协议
3. 不同端口

同源：是指域名，协议，端口均相同

限制：

1. 不能通过 ajax 的方法去请求不同源中的文档。
2. 浏览器中不同域的框架之间是不能进行 js 的交互操作的。

**兼容表单（form），因为历史上表单一直可以发出跨域请求。**

### 跨域方法

1. jsonp 跨域： 本质上是依靠 js 的跨域加载，利用插入 js 的回调函数获取数据

   - 安全问题，可能执行不安全代码
   - 确认 jsonp 失败不容易

2. document.domain+iframe 来跨子域

   1. document.domain，将父页面设置成子页面的主域，获取 iframe 可以操作

      ```html
      <iframe
      	src="http://script.a.com/dir/b.html"
      	id="iframe"
      	onload="loLoad()"
      ></iframe>
      <script>
      	document.domain = 'a.com' //设置成主域
      	function test() {
      		var iframe = document.getElementById('iframe')
      		var win = iframe.contentWindow
      		//在这里就可以操作b.html
      	}
      </script>
      ```

   2. window.name+iframe

      1. window 的 name 属性特征：name 值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值（2MB），即在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个 window.name 的，每个页面 window.name 都有读写的权限。

3. window.postMessage

   1. html5 新引进的特性，可以使用它来向其它的 window 对象发送消息

      ```js
      win.postMessage('哈哈，我是来自页面a.html的信息哟！', '*') //向不同域的www.script.com/b.html发送消息
      ```

4. 使用跨域资源共享（CORS）来跨域

   1. CORS：一种跨域访问的机制，可以让 AJAX 实现跨域访问；CORS 允许一个域上的网络应用向另一个域提交跨域 AJAX 请求。
      服务器设置 Access-Control-Allow-Origin HTTP 响应头之后，浏览器将会允许跨域请求．
   2. 非简单请求 会发送一次 options 请求去预检查，请求方法是`PUT`或`DELETE`

# CSS 字符截断

```css
overflow: hidden; // 内容会被修剪，并且其余内容是不可见的。
text-overflow: ellipsis; // 显示省略符号来代表被修剪的文本。
white-space: nowrap
	// 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止;;
```

多行

```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2; // 用来限制在一个块元素显示的文本的行数,这是一个不规范的属性（unsupported WebKit property），它没有出现在 CSS 规范草案中。
-webkit-box-orient: vertical; //  设置或检索伸缩盒对象的子元素的排列方式 。
```

1. 利用伪类也可以

# VUE 双向绑定原理

vue 数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的，

Object.defineProperty( )的两个描述属性 get 和 set

1. 实现一个监听器 Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。

2. 实现一个订阅者 Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。

3. 一个解析器 Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。

   ```js
   Observer 它的作用是给对象的属性添加 getter 和 setter，用于依赖收集和派发更新；
   dep Dep 是整个 getter 依赖收集的核心；实际上就是对 Watcher 的一种管理，Dep 脱离 Watcher 单独存在是没有意义的
   Watcher
   ```

   派发更新

   ```js
   引入了一个队列的概念，这也是 Vue 在做派发更新的时候的一个优化的点，它并不会每次数据改变都触发 watcher 的回调，而是把这些 watcher 先添加到一个队列里，然后在 nextTick 后执行 flushSchedulerQueue。
   ```

   - 队列排序

   `queue.sort((a, b) => a.id - b.id)` 对队列做了从小到大的排序，这么做主要有以下要确保以下几点：

   1. 组件的更新由父到子；因为父组件的创建过程是先于子的，所以 `watcher` 的创建也是先父后子，执行顺序也应该保持先父后子。
   2. 用户的自定义 `watcher` 要优先于渲染 `watcher` 执行；因为用户自定义 `watcher` 是在渲染 `watcher` 之前创建的。

# 自定义事件的实现方法

Mdn

```js
var event = new Event('build');
// Listen for the event.
elem.addEventListener('build', function (e) { ... }, false);
// Dispatch the event.
elem.dispatchEvent(event);
```

要向事件对象添加更多数据，可以使用 [CustomEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent)

```js
var event = new CustomEvent('build', {
	bubbles: true, // 事件冒泡
	detail: elem.dataset.time,
})
function eventHandler(e) {
	log('The time is: ' + e.detail)
}
```

# 本地储存

1. cookie，一种会话跟踪技术，

   - 储存大小有限制 4kb
   - cookie 存储的内容是一次性的，它的有效期间是当前会话（需要把整个浏览器都关闭会话就结束）
   - 是不可以跨域
   - 过期时间

2. sessionStorage
   - 容量为 2MB
   - 关掉浏览器的时候 sessionStorage 会把数据清除掉
   - 属于 H5 新特性
3. localStorage
   - 存储量约为 5MB
   - 对象存储的数据没有时间限制,清除所存储的数据，必须手动清除

[store.js](https://github.com/marcuswestin/store.js)
Cross-browser storage for all use cases, used across the web.
store.js 是 2010 年发布的一个兼容所有浏览器的 LocalStorage 包装器，不需要借助 Cookie 或者 Flash。store.js 会根据浏览器自动选择使用 localStorage、globalStorage 或者 userData 来实现本地存储功能。

# web 安全

### CSRF（跨站请求伪造）

CSRF 跨站点请求伪造(Cross—Site Request Forgery)

CSRF 攻击攻击原理及过程如下：

1. 用户 C 打开浏览器，访问受信任网站 A，输入用户名和密码请求登录网站 A；
2. 在用户信息通过验证后，网站 A 产生 Cookie 信息并返回给浏览器，此时用户登录网站 A 成功，可以正常发送请求到网站 A；
3. 用户未退出网站 A 之前，在同一浏览器中，打开一个 TAB 页访问网站 B；
4. 网站 B 接收到用户请求后，返回一些攻击性代码，并发出一个请求要求访问第三方站点 A；

防治：

1. 验证 HTTP Referer 字段
2. 在请求地址中添加 token 并验证
3. 在 HTTP 头中自定义属性并验证

### XSS

跨站脚本攻击是指恶意攻击者往 Web 页面里插入恶意 Script 代码，当用户浏览该页之时，嵌入其中 Web 里面的 Script 代码会被执行，从而达到恶意攻击用户的目的。

- 反射型 XSS：非持久化
- 存储型 XSS：持久化
- DOM 型 XSS

防治

1. 数据验证
2. 字符转义

# MVVM、MVC

### mvvm

Model–View–ViewModel(MVVM) 是一个软件架构设计模式，MVVM 的核心是 ViewModel 层，它就像是一个中转站（value converter），负责转换 Model 中的数据对象来让数据变得更容易管理和使用，该层向上与视图层进行双向数据绑定，向下与 Model 层通过接口请求进行数据交互，起呈上启下作用。[参考](https://www.cnblogs.com/iovec/p/7840228.html)

# addEventListener

参数个数，以及作用[参考](https://www.jianshu.com/p/bad857d649f2)

```js
target.addEventListener(type, listener, useCapture);  // Gecko/Mozilla only
// type 表示监听事件类型的字符串。
// listener 回调函数
// useCapture 可选。布尔值，指定事件是否在捕获或冒泡阶段执行。
第三个参数也可以是对象options
{
 	capture: // Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
	once:  Boolean，//表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
	passive: Boolean，//设置为true时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客											户端将会忽略它并抛出一个控制台警告。
}
```

# koa 中间件机制

# 单点登录

# CSS 居中使用 transform

transform 是合成属性，对于合成属性会形成一个合成层（composite layer），这使得动画元素都在一个独立的层进行，绘制位图上传 GPU，只要该层内容不发生改变，就不会进行重绘，形成一个新的帧

margin-left/right 属于布局属性，改变会进行 CSS 计算-布局- 重绘；浏览器需要对整个层进行重绘

# 移动端 1px 的方案

那么为什么会产生这个问题呢？主要是跟一个东西有关，DPR(devicePixelRatio) 设备像素比，它是默认缩放为 100%的情况下，设备像素和 CSS 像素的比值。

```
window.devicePixelRatio=物理像素 /CSS像素
```

### IOS

在 WWDC 大会上，给出来了 1px 方案，当写 0.5px 的时候，就会显示一个物理像素宽度的 border，而不是一个 css 像素的 border。 所以在 iOS 下，你可以这样写。

```
border:0.5px solid #E5E5E5
```

### 图片边框

```css
border: 1px solid transparent;
border-image: url('./../../image/96.jpg') 2 repeat;
```

### box-shadow

```css
box-shadow: 0  -1px 1px -1px #e5e5e5,   //上边线
            1px  0  1px -1px #e5e5e5,   //右边线
            0  1px  1px -1px #e5e5e5,   //下边线
            -1px 0  1px -1px #e5e5e5;   //左边线
前面两个值 x，y 主要控制显示哪条边，后面两值控制的是阴影半径、扩展半径。
```

### 使用伪元素

```css
&:nth-child(2) {
	position: relative;
	&:after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 1px;
		height: 100%;
		transform: scaleX(0.5);
		background: #e5e5e5;
		transform-origin: 0 0;
	}
}
// 空元素 不支持伪元素
```

# src 和 href

### href：引入

href 是 Hypertext Reference 的缩写，表示超文本引用。用来建立当前元素和文档之间的链接。常用的有：link、a。例如：

```html
<link href="reset.css" rel="stylesheet" />
```

浏览器会识别该文档为 css 文档，并行下载该文档，并且不会停止对当前文档的处理。这也是建议使用 link，而不采用@import 加载 css 的原因。

### Src: 引用

src 是 source 的缩写，src 的内容是页面必不可少的一部分，是引入。src 指向的内容会嵌入到文档中当前标签所在的位置。常用的有：img、script、iframe。例如

```html
<script src="script.js"></script>
```

当浏览器解析到该元素时，会暂停浏览器的渲染，知道该资源加载完毕。这也是将 js 脚本放在底部而不是头部得原因。
简而言之，src 用于替换当前元素；href 用于在当前文档和引用资源之间建立联系

# vue-router link 为什么比 a 标签好

官方解释 `<router-link>` 比起写死的 `<a href="...">`` 会好一些，理由如下：

- 无论是 HTML5 history 模式还是 hash 模式，它的表现行为一致，所以，当你要切换路由模式，或者在 IE9 降级使用 hash 模式，无须作任何变动。
- 在 HTML5 history 模式下，`router-link` 会守卫点击事件，让浏览器不再重新加载页面。
- 当你在 HTML5 history 模式下使用 `base` 选项之后，所有的 `to` 属性都不需要写 (基路径) 了。

# CSS position

position 的含义是指定位类型，取值类型可以有：static、relative、absolute、fixed、inherit 和 sticky，这里 sticky 是 CSS3 新发布的一个属性

### sticky

position 属性中最有意思的就是 sticky 了，设置了 sticky 的元素，在屏幕范围（viewport）时该元素的位置并不受到定位影响（设置是 top、left 等属性无效），当该元素的位置将要移出偏移范围时，定位又会变成 fixed，根据设置的 left、top 等属性成固定位置的效果。

- 该元素并不脱离文档流，仍然保留元素原本在文档流中的位置。
- 当元素在容器中被滚动超过指定的偏移值时，元素在容器内固定在指定位置。亦即如果你设置了 top: 50px，那么在 sticky 元素到达距离相对定位的元素顶部 50px 的位置时固定，不再向上移动。
- 元素固定的相对偏移是相对于离它最近的具有滚动框的祖先元素，如果祖先元素都不可以滚动，那么是相对于 viewport 来计算元素的偏移量

# 观察者模式和发布订阅模式的有什么区别？

### 观察者列表

在软件设计中是一个对象，维护一个依赖列表，当任何状态发生改变自动通知它们。

### 发布订阅者

在发布-订阅模式，消息的发送方，叫做**发布者（publishers）**，消息不会直接发送给特定的接收者，叫做**订阅者**。

- 在**观察者**模式中，观察者是知道 Subject 的，Subject 一直保持对观察者进行记录。然而，在**发布订阅**模式中，发布者和订阅者**不知道对方的存在**。它们只有通过消息代理进行通信。

- 在**发布订阅**模式中，组件是松散耦合的，正好和观察者模式相反。

- **观察者模式**大多数时候是**同步**的，比如当事件触发，Subject 就会去调用观察者的方法。而**发布-订阅**模式大多数时候是**异步的**（使用消息队列）。

- **观察者** 模式需要在单个应用程序地址空间中实现，而**发布-订阅**更像交叉应用模式。

# 网络五层模型

[参考](https://blog.csdn.net/liuchengzimozigreat/article/details/100169829)

1. 应用层
2. 传输层
3. 网络层
4. 数据链路层
5. 物理层

# npm2 和 npm3 有什么区别

处理依赖不一样：npm2 是嵌套依赖，npm3 将所有依赖放在第二层（所有依赖只嵌套一次，彼此平行，也就是平铺的结构）

yarn 也是扁平处理

# git rebase merge 区别

merge: git merge deve：Git 会自动根据两个分支的共同祖先 ，这个 commit 和两个分支的最新提交即 8ab7cff 和 696398a 进行一个三方合并，然后将合并中修改的内容生成一个新的 commit

rebase: 不会像 merge 一样生成一个合并修改内容的 commit，相当于把 master 分支（当前所在分支）上的修改在 deve 分支（目标分支）上原样复制了一遍

# NODE 文件查找的优先级

1. 文件模块的缓存中加载
2. 从原生模块加载
   - 原生模块也有一个缓存区，同样也是优先从缓存区加载。如果缓存区没有被加载过，则调用原生模块的加载方式进行加载和执行。
3. 文件加载
   - 相对路径的文件模块。
   - 绝对路径的文件模块。
   - 非原生模块的文件模块

module path 的生成规则为：从当前文件目录开始查找 node_modules 目录；然后依次进入父目录，查找父目录下的 node_modules 目录；依次迭代，直到根目录下的 node_modules 目录。

# fork 工作流

Forking 工作流程的主要优点是可以汇集提交贡献，又无需每个开发者提交到一个中央仓库中，从而实现干净的项目历史记录。开发者可以推送（push）代码到自己的服务端仓库，而只有项目维护人员才能直接推送（push）代码到官方仓库中。

当开发者准备发布本地提交时，他们的提交会推送到自己的公共仓库中，而不是官方仓库。然后他们向主仓库提交请求拉取（pull request），这会告知项目维护人员有可以集成的更新。

# “git pull”和“git fetch”之间有什么区别？

当你使用 pull，Git 会试着自动为你完成工作。它是上下文（工作环境）敏感的，所以 Git 会把所有拉取的提交合并到你当前处理的分支中。pull 则是 自动合并提交而没有让你复查的过程。如果你没有细心管理你的分支，你可能会频繁遇到冲突。

当你 fetch，Git 会收集目标分支中的所有不存在的提交，并将这些提交存储到本地仓库中。但 Git 不会把这些提交合并到当前分支中。这种处理逻辑在当你需要保持仓库更新，在更新文件时又希望处理可能中断的事情时，这将非常实用。而将提交合并到主分支中，则该使用 merge。

# 对象数组去重

# 深拷贝和浅拷贝

浅拷贝：

- Object.assign 的方式
- 通过对象扩展运算符
- 通过数组的 slice 方法
- 通过数组的 concat 方法。

深拷贝：

- 通过 JSON.stringify 来序列化对象
- 手动实现递归的方式。

# GET 和 POST 的区别

(1) GET 请求在浏览器回退和刷新时是无害的，而 POST 请求会告知用户数据会被重新提交；
(2) GET 请求可以收藏为书签，POST 请求不可以收藏为书签；
(3) GET 请求可以被缓存，POST 请求不可以被缓存，除非在响应头中包含合适的 Cache-Control/Expires 字段，但是不建议缓存 POST 请求，其不满足幂等性，每次调用都会对服务器资源造成影响；
(4) GET 请求一般不具有请求体，因此只能进行 url 编码，而 POST 请求支持多种编码方式。
(5) GET 请求的参数可以被保留在浏览器的历史中，POST 请求不会被保留；
(6) GET 请求因为是向 URL 添加数据，不同的浏览器厂商，代理服务器，web 服务器都可能会有自己的长度限制，而 POST 请求无长度限制；
(7) GET 请求只允许 ASCII 字符，POST 请求无限制，支持二进制数据；
(8) GET 请求的安全性较差，数据被暴露在浏览器的 URL 中，所以不能用来传递敏感信息，POST 请求的安全性较好，数据不会暴露在 URL 中；
(9) GET 请求具有幂等性(多次请求不会对资源造成影响)，POST 请求不幂等；
(10) GET 请求一般不具有请求体，请求中一般不包含 100-continue 协议，所以只会发一次请求，而 POST 请求在发送数据到服务端之前允许双方"握手"，客户端先发送 Expect:100-continue 消息，询问服务端是否愿意接收数据，接收到服务端正确的 100-continue 应答后才会将请求体发送给服务端，服务端再响应 200 返回数据。

# 为什么 vue 组件的 data 必须是函数

1. 组件是为了复用，而 Object 是引用类型，可能会被多次使用，是可能多次实例化。会被同一数据对象引用
2. 根组件可以是对象：是因为，只有一个实例化。不会出现多个实例**共享引用**同一个数据对象的现象。
3. data 如果是函数时候，可以在返回之前，方便做一些其他的操作；解决 this 指向的问题

```js
export function getData(data: Function, vm: Component): any {
	// #7573 disable dep collection when invoking data getters
	pushTarget()
	try {
		return data.call(vm, vm)
	} catch (e) {
		handleError(e, vm, `data()`)
		return {}
	} finally {
		popTarget()
	}
}
```

# ['1','2','3'].map(parseInt)

### parseInt 函数

概念：以第二个参数为基数来解析第一个参数字符串，通常用来做十进制的向上取整（省略小数）如：parseInt(2.7) //结果为 2

特点：接收两个参数 parseInt(string,radix)

### map

```js
;['1', '2', '3'].map((a, b) => console.log(a, b)) // a 是值 b是序号
```

结果分析
parseInt('1',0);radix 为 0，parseInt() 会根据十进制来解析，所以结果为 1；
parseInt('2',1);radix 为 1，超出区间范围，所以结果为 NaN；
parseInt('3',2);radix 为 2，用 2 进制来解析，应以 0 和 1 开头，所以结果为 NaN。

# delete 数组

delete: 只是被删除的元素变成了 undefined 其他的元素的键值还是不变。

```js
//定义数组
var array = ['aa', 'dd', 'cc', 'aa']
//方法1：delete删除数组元素
delete array[1]
//输出结果 : ["aa",undefined,"cc","aa"]
```

# 隐藏页面中的某个元素的方法有哪些？

屏幕并不是唯一的输出机制，比如说屏幕上看不见的元素（隐藏的元素），其中一些依然能够被读屏软件阅读出来（因为读屏软件依赖于可访问性树来阐述）。为了消除它们之间的歧义，我们将其归为三大类：

- 完全隐藏：元素从渲染树中消失，不占据空间。
- 视觉上的隐藏：屏幕中不可见，占据空间。
- 语义上的隐藏：读屏软件不可读，但正常占据空。

# 实现 filter

```js
Array.prototype.filter =
	Array.prototype.filter ||
	function filter(fn, context) {
		if (typeof fn !== 'function') {
			throw new Error(`${fn} is not function`)
		}
		let arr = this
		let t = []
		for (let i = 0; i < arr.length; i++) {
			let res = fn.call(context, arr[i], i, arr)
			if (res) t.push(arr[i])
		}
		return t
	}
```

# flat

(参考)[https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/flat]

# delete 数组

delete 数组没有任何效果

```js
let a = ['a']
delete a
coonsole.log(a.length) // [ 'a' ]
console.log(a); // 1
```

# HTTP 劫持、DNS 劫持与 XSS

### http 劫持

大多数情况是运营商 HTTP 劫持，当我们使用 HTTP 请求请求一个网站页面的时候，网络运营商会在正常的数据流中插入精心设计的网络数据报文，让客户端（通常是浏览器）展示“错误”的数据，通常是一些弹窗，宣传性广告或者直接显示某网站的内容，大家应该都有遇到过。

### DNS 劫持

DNS 劫持就是通过劫持了 DNS 服务器，通过某些手段取得某域名的解析记录控制权，进而修改此域名的解析结果，导致对该域名的访问由原 IP 地址转入到修改后的指定 IP，其结果就是对特定的网址不能访问或访问的是假网址，从而实现窃取资料或者破坏原有正常服务的目的

### XSS 跨站脚本

XSS 指的是攻击者利用漏洞，向 Web 页面中注入恶意代码，当用户浏览该页之时，注入的代码会被执行，从而达到攻击的特殊目的。

# 为什么循环列表 key 最好不要用 index

移动元素和删除元素带来的 开销不一致

```
变化前数组的值是[1,2,3,4]，key就是对应的下标：0，1，2，3
变化后数组的值是[4,3,2,1]，key对应的下标也是：0，1，2，3
```

- 那么 diff 算法在变化前的数组找到 key =0 的值是 1，在变化后数组里找到的 key=0 的值是 4
- 因为子元素不一样就重新删除并更新
- 但是如果加了唯一的 key,如下

```
变化前数组的值是[1,2,3,4]，key就是对应的下标：id0，id1，id2，id3
变化后数组的值是[4,3,2,1]，key对应的下标也是：id3，id2，id1，id0
```

- 那么 diff 算法在变化前的数组找到 key =id0 的值是 1，在变化后数组里找到的 key=id0 的值也是 1
- 因为子元素相同，就不删除并更新，只做移动操作，这就提升了性能

# 子串的查找 KMP

# webpack 打包 vue 速度太慢

1. webpack-bundle-analyze
2. externals
3. DllPlugin
4. CDN 配合
5. HappyPack

# vue 变异数组
