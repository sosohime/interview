# 菜狗切图仔面经2.0

> <del>努力只能及格，拼命才能优秀</del> WLB

看了很多人分享的面经，觉得以: 问 - 答 - 资料 的形式阅读起来最高效

面试记录在[2021面试记录](%E9%9D%A2%E8%AF%95%E9%A2%98%E5%88%86%E4%BA%AB/2021%E9%9D%A2%E8%AF%95%E8%AE%B0%E5%BD%95)，并且面经会根据面试的进行不断更新

- 导读
  - [当你在浏览器中输入 google.com 并且按下回车之后发生了什么](https://github.com/alex/what-happens-when)
        - 作为切图仔，基本使命即将一个页面呈现出来，了解从输入网址敲下回车开始，直至页面完全展现都发生了什么
        - 所有知识点基本都是为了这一过程服务，除了通过工程化提升开发效率外，多数知识点就是为了优化这一过程。并且作为面经，手摇目标应该是为了回答面试问题，所以面经2.0的组织方式为:  问题 - 解答 - 优化 - 延伸资料

- 基础
  - DNS
    - 问: DNS
    - 问: DNS查询过程
    - 问: 资源就近访问的原理
      - [关于DNS，前端所需要了解的](https://www.jianshu.com/p/fd5dbd146ec8)
    - 优化
      - [DNS预解析(dns-prefetch)](https://www.jianshu.com/p/fd5dbd146ec8)
    - 延伸
      - [NodeJS 中 DNS 查询的坑 & DNS cache 分析](https://juejin.im/post/6844904149402779661)

  - TCP/IP
    - 问: TCP三次握手、四次挥手
    - 问: TCP 和 UDP 的区别
      - [一文搞懂TCP与UDP的区别](https://blog.fundebug.com/2019/03/22/differences-of-tcp-and-udp/)
    - 问: 拥塞控制

  - HTTP
    - 问: HTTP常见状态码的含义
      - [http状态码常用对照表](http://tool.oschina.net/commons?type=5)
    - 问: HTTP 301 \ 302区别，对SEO的影响
    - 问: HTTP 302 \ 307区别
      - [详解重定向（HTTP状态码301/302/303/307/408）附例子](https://www.cnblogs.com/wuguanglin/p/redirect.html)
    - 问: 跨域问题怎么解决
      - 为什么跨域: [同源策略](https://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)
      - 快速了解: [9种常见的前端跨域解决方案（详解）](https://juejin.im/post/6844903882083024910)
      - 深入理解: [浏览器缓存知识小结及应用](https://www.cnblogs.com/lyzg/p/5125934.html?f=t)
    - 延伸
      - [当 CORS 遇到 SameSite](https://juejin.im/post/6844904095271288840)
      - [SameSite=None 升级指南](https://juejin.im/post/6844904096575537166)
      - 0202年了还考JSONP😶[JSONP的原理和优缺点](https://www.jianshu.com/p/a17cb17d3bba)
    - 问: 什么是简单请求、复杂请求

    - 问: 浏览器缓存规则
    - 问: 强缓存、弱缓存
      - [HTTP缓存——304与200 from cache](http://www.wclimb.site/2018/03/06/HTTP%E7%BC%93%E5%AD%98%E2%80%94%E2%80%94304%E4%B8%8E200-from-cache/)
    - 问: HTTP2 相对 HTTP1.1 有哪些改动
      - 多路复用、首部压缩、服务端推送。相较于HTTP/1.1的文本方式，改为使用二进制帧(frame) + 流(stream)的方式，一次TCP握手可以同时并行多个请求和响应，然后再进行拼装组合
      - [HTTP/2 相比 1.0 有哪些重大改进？](https://www.zhihu.com/question/34074946)
    - 优化（HTTPS）
      - [TLS 握手优化详解](https://imququ.com/post/optimize-tls-handshake.html#toc-4)
      - [减少网站跳转时间，增强网站数据安全——HSTS 详解](https://www.jianshu.com/p/5fa72a4689fc)

    - 延伸
      - HTTPS中间人攻击
        - [一文带你了解中间人攻击和HSTS](https://juejin.cn/post/6844904128146046983)
      - [浏览器 HTTP 并发请求规则探讨](https://sanonz.github.io/2018/http-max-persistent-connections-per-server/)

  - Websocket
    - 问: Websocket握手过程
    - 问: Websocket和轮询的优劣
      - [你不知道的 WebSocket](https://juejin.im/post/6854573221241421838)
    - 问: Websocket、HTTP2
      - websocket是握手阶段采用http1.1的双向通信协议。HTTP2的服务端推送是单向推送，并且没有直接事件与webapp交互，所以放在一块说就不太对劲
      - [websocket-and-http2-coexist](https://www.infoq.com/articles/websocket-and-http2-coexist/)

  - CDN
    - 问: cdn 速度快的原理
    - 问: 动态加速
    - 问: cdn预热
    - 问: 更新cdn的过程
    - 问: cdn容错
    - 问: 回源

  - 页面渲染过程
    - 问: 外部CSS加载，会阻塞【DOM树解析】【DOM树绘制】【JS运行]】吗
      - [css加载会造成阻塞吗？](https://juejin.im/post/6844903667733118983)
    - 问: 衡量页面性能的指标都有哪些
      - [页面加载性能之常见的性能指标](https://juejin.im/post/6856397971467010061)
    - 问: 如何优化页面加载速度
    - 问: 如何优化首屏速度
    - 问: 如何优化可交互时间
      - prefetch、preload
      - 资源压缩
      - 雪碧图
      - 骨架
      - 懒加载
      - 拆包
      - 字体拆分
    - 延伸
      - 图片占位符

  - 浏览器相关
    - 问: 回流和重绘是什么
    - 问: 如何避免回流
    - [介绍下重绘和回流（Repaint & Reflow），以及如何进行优化](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/24)

    - 问: 冒泡、捕获、addEventListener第三个参数
      - [事件捕获、事件冒泡以及事件代理](https://juejin.cn/post/6844904190280466440)
    - 问: 多tab标签如何通信
      - [面试官：前端跨页面通信，你知道哪些方法？](https://segmentfault.com/a/1190000018731597?utm_source=sf-related)
        - 广播模式：Broadcast Channe / Service Worker / LocalStorage + StorageEvent
        - 共享存储模式：Shared Worker / IndexedDB / cookie
        - 口口相传模式：window.open + window.opener
        - 基于服务端：Websocket / Comet / SSE 等
        - 对于非同源页面，则可以通过嵌入同源 iframe 作为“桥”，将非同源页面通信转换为同源页面通信。
    - 问: e.target、e.currentTarget的区别
      - target是触发事件的对象，currentTarget是事件绑定的帝乡
    - 问: onerror 和 addEventlistener('error')区别
    - 问: 外链加载失败用哪个判断
      - [前端代码错误上报](https://juejin.im/post/6844903806849777677)
      - [如何优雅处理前端异常？](http://jartto.wang/2018/11/20/js-exception-handling/index.html)

    - 问: Event Loop
    - 问: 什么是宏任务、微任务
      - 这一篇强烈推荐：讲解了用户触发事件和js事件的区别，并且讲了Mutation等，非常的清晰，[Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
      - [如何解释Event Loop面试官才满意](https://zhuanlan.zhihu.com/p/72507900)
      - [了解js运行机制——微任务与宏任务](https://juejin.cn/post/6844903859949830158)
      - [Eventloop不可怕，可怕的是遇上Promise](https://juejin.cn/post/6844903808200343559)

    - 问: requestAnimationFrame \ requestIdleCallback
      - [神奇的requestAnimationFrame](https://segmentfault.com/a/1190000012175376)
      - [熟悉requestidlecallback到了解react requestidlecallback polyfill实现](https://www.jianshu.com/p/182e91a7df59)
    - 问: 原生观察者模式: MutationObserver \ IntersectionObserver \ ResizeObserver \ PerformanceObserver
      - [JS中的观察者们 —— 四种 Observers](https://xiaotianxia.github.io/blog/vuepress/js/four_kinds_of_observers.html)
      - [浏览器原理 - 宏任务微任务](https://github.com/HXWfromDJTU/blog/issues/23)
      - [浏览器异步处理之MutationObserver](https://zhuanlan.zhihu.com/p/37507811)

  - 安全
    - 问: xss 跨站脚本攻击
      - [前端安全系列（一）：如何防止XSS攻击？](https://tech.meituan.com/2018/09/27/fe-security.html)
    - 问: csrf 跨站伪造请求
      - [前端安全系列（二）：如何防止CSRF攻击？](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)
    - 问: 登录、Cookie-Session、JWT、Token
      - [傻傻分不清之 Cookie、Session、Token、JWT](https://juejin.im/post/6844904034181070861)
    - 问: OAuth2
      - [OAuth 2.0 的四种方式](https://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html)
      - [OAuth2.0与前端无感知token刷新实现](https://juejin.im/post/6876380180319830024)
    - 问: 禁用cookie还能保存登录状态吗
      - 可以通过url明文传递，ssr可以直接渲染到页面上，或者放在本地存储里
    - 问: css存在的安全问题
      - [第三方 CSS 并不安全](https://juejin.cn/post/6844903571075366919)
    - 问: csp
      - [XSS终结者-CSP理论与实践](https://github.com/joeyguo/blog/issues/5)

- CSS
  - 问: 盒模型，IE盒模型
  - 问: BFC是啥，有啥作用
  - 问: 清除浮动
  - 问: IFC、GFC、FFC
    - [第 73 题： 介绍下 BFC、IFC、GFC 和 FFC](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/122)
  - 花式垂直居中
  - 选择器
    - [CSS 选择器参考手册](https://www.w3school.com.cn/cssref/css_selectors.asp)
  - 移动端布局
  - Less、Sass
  - 兼容
  - CSS-IN-JS

- Javascript
  - [You-Dont-Know-JS(中文翻译)](https://github.com/getify/You-Dont-Know-JS/blob/1ed-zh-CN/preface.md)
    - 最近重新复习时发现，【看面经找知识点学习】这种方式有一个问题：零碎的知识靠自己这样看，很难形成体系。并且每个知识点可能只是为了解决一个问题，不够深入。然后发现了这本圣经，从头到尾一步到位。中文版有部分翻译不够准确，或者读起来比较别扭的部分，可以回去读原版[You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)。
    - 如: 原型链、this、call、bind、new、闭包、Promise等常见必考题，都可以在这本书中找到答案。
    - 一篇简明易懂的原型链文章[一张图搞定JS原型&原型链](https://segmentfault.com/a/1190000021232132)
  - JS基础<del>八股文</de>
    - [隐式类型转换](https://blog.csdn.net/itcast_cn/article/details/82887895)
    - 作用域提升
  - 问: 堆与栈
  - 问: new的过程发生了什么，手写一个new
  - 问: 手写bind、call、apply
    - [JavaScript深入之new的模拟实现](https://github.com/mqyqingfeng/Blog/issues/13)
    - [JavaScript深入之bind的模拟实现](https://github.com/mqyqingfeng/Blog/issues/12)
  - 问: 原型和原型链
  - 问: ES5实现继承
    - 各种继承的问题，手写个寄生组合式继承
  - 问: Set \ Map 区别，map \ {} 区别
  - 问: WeekSet \ WeekMap是干嘛的
  - 问: Symbol是什么，用途
  - 问: for in \ for of
  - 问: Promise/A+规范，实现一个promise
    - [Promises/A+](https://promisesaplus.com/)
    - [简单实现Promise](https://imweb.io/topic/5bbc264b6477d81e668cc930)
    - [Promise的源码实现（完美符合Promise/A+规范）](https://github.com/YvetteLau/Blog/issues/2)
  - 问: 防抖节流
  - 问: 大数计算
  - 问: 哪些可能会引发内存泄露
    - [常见的 JavaScript 内存泄露](https://github.com/zhansingsong/js-leakage-patterns)
  - 问: 常见的设计模式有哪些，使用场景。
  - 问: 观察者模式、发布订阅模式

- Typescript
  - 问: 泛型
  - 问: infer
  - 问: implement
  - 问: Paramters \ ReturnType
  - partial
  - 基础学习
  - 官方文档：<https://www.tslang.cn/docs/handbook/declaration-files/introduction.html>
  - 深入理解 TypeScript
    进阶
  - Typescript Handbook: <https://www.typescriptlang.org/docs/handbook/intro.html>
    类型练习
    强烈推荐
  - Typescript-exercises: <https://typescript-exercises.github.io/>
  - Type-challenges: <https://github.com/type-challenges/type-challenges>

- React
  推荐阅读[React技术揭秘](https://react.iamkasong.com/)，除了事件机制之外，其他方面描述的都非常详细，包括react架构演进过程、fiber、lane、diff、hooks等，并有源码解析。

  - 问: React生命周期
    - 注意区分16.3开始引入的`getDerivedStateFromProps`、`getDerivedStateFromProps`，以及转为`UNSAFE`的`componentWillReceiveProps``componentWillMount``componentWillUpdate`。因为Fiber的引入，render变为async，render之前的生命周期都可能执行多次，进而导致多余计算、网络请求等一些列问题（后面有关于Fiber的相关问题）。
    - [React v16.3之后的组件生命周期函数](https://zhuanlan.zhihu.com/p/38030418)
  - 问: React Fiber是什么，解决了什么问题
    - [React Fiber是什么](https://zhuanlan.zhihu.com/p/26027085)
    - [React Fiber 原理介绍](https://segmentfault.com/a/1190000018250127)
    - [浅谈React Fiber](https://segmentfault.com/a/1190000020035950)

  - 延伸
    - 2020年11月24日结论：异步调度是MessageChannel实现的
    - [ReactFiberWorkLoop](https://github.com/facebook/react/blob/6b28eb6175e5251b31507749b79c55c0e389b6ef/packages/react-reconciler/src/ReactFiberLane.js#L484)
    - [ReactFiberLane](https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberWorkLoop.new.js)
    - [React 源码Scheduler（三）React的调度算法实现](https://zhuanlan.zhihu.com/p/74548926)

  - 问: jsx是啥
  - 问: jsx转化之后是什么样的
    - [聊聊 JSX 和虚拟 DOM](https://juejin.cn/post/6923891351842979853)
  - 问: react diff算法复杂度O(n)怎么实现的，深度优先还是广度优先，优劣
  - 问: fiber diff和之前的diff区别
  - 问: key是干嘛用的
    - [React diff 算法](https://juejin.im/post/6844904182949019656)
    - [React Fiber架构](https://juejin.cn/post/6844904104469217287)
    - [源码](https://github.com/facebook/react/blob/56e9feead0f91075ba0a4f725c9e4e343bca1c67/packages/react-reconciler/src/ReactChildFiber.new.js#L1197)
  - 问: react 15和react 16架构的区别
    - 15: 协调器、渲染器
    - 16: 协调器、渲染器、调度器 TODO:

  - 问: setState同步还是异步
  - 问: setState支持的几种参数类型，分别有什么用
    - [React 源码剖析系列 － 解密 setState](https://zhuanlan.zhihu.com/p/20328570)
    - [enqueueSetState](https://github.com/facebook/react/blob/02da938fd51f6345ca185d571ea6628189ae81a7/packages/react-reconciler/src/ReactFiberClassComponent.new.js)

  - 问: Hooks解决啥问题 Hooks
  - 问: Hooks局限性
  - 问: 实现一个useState \ useEffect \ ...
  - 问: 防抖节流用hooks实现
    - TODO:
  - 问: react-router实现原理
    - [「源码解析 」这一次彻底弄懂react-router路由原理](https://juejin.cn/post/6886290490640039943)

  - 问: redux中间件是什么，用过哪些
  - 问: redux-saga \ redux-thunk 是什么，区别是什么
  - 问: redux、mobx区别，优劣
  - 问: connect怎么实现
  - 问: Recoil听说过吗，解决什么问题
    - TODO:
  - 问: HOC是什么，使用场景
  - 问: Mixin \ HOC 区别、优劣
  - 问: 反向继承
    - TODO:
  - 性能优化
    - 尽量少而清晰的props
    - 若果props是一个对象，使用immutable类库 + Purecomonent来减少渲染
    - 尽量减少箭头函数在render中的使用
    - 依赖收集
    - 使用React DevTools Profiler查看react组件渲染火焰图，找到耗时大的组件进行分析
  - 问: Preact

- 移动端
  - 问: 小程序底层实现原理
    - 双线程模型
    - webview预加载

- 工程化
  - 问: Webpack生命周期
  - 问: Webpack中loader和plugin的区别是什么
  - 问: 如何编写Webpack load 和 plugin
    - [webpack 之 loader 和 plugin 简介](https://juejin.im/post/6844903489458405390)
  - 问: 常用的webpack loader、plugin
    - loader
      - 静态资源（webpack5提供了处理静态资源的文件，可以不用这些loader）：raw-loader（文件转字符串模块导入）、file-loader（文件打包到输出目录）、url-loader（文件转base64导入）
      - babel-loader + babel/preset-typescript \ ts-loader + babel-loader + fork-ts-checker-webpack-plugin [Webpack 转译 Typescript 现有方案](https://juejin.cn/post/6844904052094926855)
      - esbuild-loader
      - postcss-loader（添加浏览器前缀）
    - plugin
      - html-webpack-plugin
      - optimize-css-assets-webpack-plugin \ css-minimizer-webpack-plugin （压缩优化css，后者使用cssnano）
      - extract-text-webpack-plugin（静态资源处理，如css提取为文件）
      - prepack-webpack-plugin（使用prepack进行语法分析，减少文件体积，webpack5内置部分能力）
      - workbox-webpack-plugin (启用serverWorker)
      - hard-source-webpack-plugin（模块中间缓存，提高构建速度，webpack5提供filesystem作为默认支持）
  - 问: Babel是怎么将文件解析成AST，进行词法分析转换的
    - [https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/315](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/315)
  - 问: Webpack \ Rollup区别
    - TODO:
  - 问: 如何减少webpack打包时间、产物体积
    - 使用speed-measure-webpack-plugin分析打包时间，找到耗时长的部分逐个优化
    - external外部依赖库（echarts，map等）
    - 开启多线程，happyPack
    - 固定依赖库打包DLL
    - 缓存hard-source-webpack-plugin
    - esbuild-loader，代替ts-loader / babel-loader, [esbuild](https://github.com/evanw/esbuild)
  - 问: snowpack为什么比webpack快
    - TODO:
  - 问: Vite
    - TODO:
  - 问: 大型项目管理
    - TODO:
    - monorepo
    - git submodule
    - 微前端
      - [微前端实践](https://juejin.cn/post/6844903816295350279)
      - 实践、如何实现全局变量、css隔离 [这可能是你见过最完善的微前端解决方案！](https://www.infoq.cn/article/o6GxRD9iHQOplKICiDDU)
    - module federation
  - 问: 单元测试框架
    - TODO:
  - 问: 如何部署前端项目
    - TODO:
  - 问: 如何开发一个CLI
    - [从零开发一个Node Cli](https://juejin.cn/post/6844904080830103560)
  - 问: 持续集成（CI/CD）
    - 将 ESLint \ Prettier \ husky+lint-staged
    - 自动化测试 \ 自动化构建 \ 自动化发布
    - [前端开发如何让持续集成/持续部署(CI/CD)跑起来](https://juejin.im/entry/6844903576477794312)
    - [QQ音乐商业化Web团队：前端工程化实践总结（二）](https://www.infoq.cn/article/7iHZR4JyvjzLW3WReOQp)
    - [QQ音乐商业化Web团队：前端工程化实践总结（三）](https://www.infoq.cn/article/mU6QQmzyuAiOFk0aPxCM)
  - 问: 如何统计pv、uv、
  - 问: 了解哪些页面分析工具
    - [前端性能监控方案（首屏、白屏时间等）](https://juejin.im/post/6844904020482457613)
    - 使用前端热力图进行用户行为分析[heapmapjs](https://www.patrick-wied.at/static/heatmapjs/)
    - Sendbean关闭浏览器
  - 问: 前端如何进行错误日志收集上报
    - [Sentry介绍与使用](https://juejin.im/post/6844904143090352135)
  - 问: 反馈系统
    - [rrweb 录制回放原理分析](https://juejin.im/post/6844903925213036552)
    - [反馈](https://www.hotjar.com/feedback-polls/?utm_source=client&utm_medium=poll&utm_campaign=insights)
拨测
- 运维
  - 问: Linux文件权限
  - docker \ k8s

- Node + Redis + MySQL + GraphQL + BFF
  - 问: Node进程、线程
  - 问: fork模式为什么可以多个进程监听同一个端口
    - [深入理解Node.js 中的进程与线程](https://juejin.im/post/6844903908385488903)
  - 问: Node异常退出如何处理
    - pm2守护进程自动重启
    - uncaughtException
  - 问: 日志收集
  - 问: 调用链追踪
    - [Node 中的日志收集与 requestId](https://juejin.im/post/6844903886285701133)
    - [Node 框架接入 ELK 实践总结](https://juejin.im/post/6844903717729206280)
  - 问: 监控
    - [Node.js环境性能监控](https://juejin.im/post/6844903781889474567)
    - [容器监控实践—node-exporter](https://www.jianshu.com/p/e3c9fc929d8a)

  - 问: 内存增长的原因
  - 问: 如何进行内存监控
    - [探索学习NodeJs内存管理](https://www.jianshu.com/p/4679f3e5e340)
    - [令人“头大”的 Nodejs 内存泄露](https://segmentfault.com/a/1190000020339900)
    - 排查
      - TODO:

  - 问: CPU
    - 火焰图

  - 容灾 / 降级 / 兜底
    - TODO:
    - [为什么用Node? 不用行不行? 稳定性思考🤔 ?](https://zhuanlan.zhihu.com/p/139010385)
    - [高并发之服务熔断与降级](https://www.jianshu.com/p/cda7c0366089)
    - [从微服务说起的Node.js](https://www.jianshu.com/p/fa22284843af)
    - [腾讯视频Node.js服务是如何支撑国庆阅兵直播高并发的？](https://www.infoq.cn/article/qjsxrfxyxt8imydp1for)

  - Mysql utf8bm4 utif8 区别
  - varchar char

  - 问: SSR，同构
  - 问: SSR 容错
    - [聊一聊前端「同构」](https://juejin.cn/post/6844903616705232909)
    - [SSR 页面 CDN 缓存实践](https://juejin.cn/post/6847902220222988301)
  - 问: supervisor or pm2, why
  - 问: `fork mode`和`cluster mode`的区别
  - 问: express、koa
    - koa洋葱模型实现，为什么采用洋葱模型[深入理解洋葱模型中间件机制](https://juejin.cn/post/6844904025767280648)
    - TODO:

  - 问: Redis数据结构，使用场景
    - string、list、hash、set和zset
    - [通俗易懂的Redis数据结构基础教程](https://juejin.cn/post/6844903644798664712)
  - 问: 分布式锁
  - 问: 悲观锁 \ 乐观锁 \ 死锁
  - 问: Redis or Zookeeper
    - redis与zk都是CP，对于锁的实现方式不同，两者不能明确的说谁优谁劣，根据自己的业务状况，以及服务器资源选择即可。一般来说redis手写可能碰到一些坑，比如未设置过期时间导致死锁，或者a锁被b释放的情况，需要加签名。可以使用Redisson。
  - 问: MySQL查询优化
  - 问: InnoDB myisam
    - TODO:
  - 问: NSQ \ Kafka \ RocketMQ \ RabbitMQ \amqp
    - 我平常的使用场景有两个: 1. kafka用来做日志收集 2. nsq用来做没有实时性的异步任务，并且同topic、channel的消息自动负载均衡，加上consumer通过配置maxInFlight，可以保证不会出现oom的情况
  - 问: Rest \ GraphQL \ RPC
    - [RPC vs REST vs GraphQL](https://segmentfault.com/a/1190000013961872)
    - [30分钟理解GraphQL核心概念](https://segmentfault.com/a/1190000014131950)
  - 问: GraphQL如何鉴权
    - TODO:
  - 问: 服务发现
    - [服务发现：ZooKeeper vs etcd vs Consul](https://xie.infoq.cn/article/4d85edd4ae0f6de16a42fd2e4)
    - 选举算法区别和各自的优缺点

- 算法
  - 100easy，100middle，基本搞定

- 玍古的 \ 不太好分类的
  - 问: SEO
    - [前端SEO优化](https://juejin.cn/post/6844903824428105735)
    - robots.txt [SEO优化-robots.txt解读](https://juejin.cn/post/6844903603769966600)
    - sitemap [[译] 5 个简单步骤为您的网站创建 Sitemap](https://juejin.cn/post/6844904050803081223)
  - 问: SPA怎么SEO
    - [seo-mask -- 为单页应用创建一个适合蜘蛛爬取的seo网站](https://juejin.cn/post/6844903764055293959)
    - [【🧪 前端实验室】SPA型页面的SEO指南](https://juejin.cn/post/6899834443674943495)
  - 问: PWA
    - Manifest创建桌面入口
    - Service Worker离线应用、消息推送
    - [简单介绍一下Progressive Web App(PWA)](https://juejin.cn/post/6844903556470816781)
    - [深入理解 PWA](https://juejin.cn/post/6844903731461357582)
    - [Workbox(Google PWA lib)](https://developers.google.com/web/tools/workbox/)
  - WebAssembly
  - WebComponent
