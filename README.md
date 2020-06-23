# 菜狗切图仔面经

> 2020新的开始，不要再混了

整理了一下最近面试谈到的问题

+ 基础知识

  + 经典！
    1. [当你在浏览器中输入 google.com 并且按下回车之后发生了什么](https://github.com/skyline75489/what-happens-when-zh_CN)
  + http协议
    1. 各种HTTP Status Code：[http状态码常用对照表](http://tool.oschina.net/commons?type=5)
    2. [Http头介绍:Expires,Cache-Control,Last-Modified,ETag](http://www.51testing.com/html/28/116228-238337.html)
    3. HTTP的keep-alive，Tcp的Keepalive，websocket [浅谈Http长连接和Keep-Alive以及Tcp的Keepalive](https://blog.csdn.net/weixin_37672169/article/details/80283935)
    4. HTTPS、HTTP2
    5. 浏览器http并发请求数 [浏览器 HTTP 并发请求规则探讨](https://sanonz.github.io/2018/http-max-persistent-connections-per-server/)
      https://chromium.googlesource.com/chromium/src/+/refs/tags/85.0.4178.4/net/socket/client_socket_pool_manager.cc#47
  + 浏览器同源策略，跨域
    1. 常见的跨域解决方式（Access-Control-Allow-Origin: *、jsonp、nginx反向代理）
    2. SameSite默认Lax导致的问题
       - [SameSite=None 升级指南](https://juejin.im/post/5e72441b51882549003d39c2)
       - https://web.dev/samesite-cookies-explained/
  + 客户端缓存
    1. [浏览器缓存知识小结及应用](http://www.cnblogs.com/lyzg/p/5125934.html?f=t)
    2. 浏览器三级缓存[由memoryCache和diskCache产生的浏览器缓存机制的思考](https://segmentfault.com/a/1190000011286027)
    3. [彻底理解浏览器的缓存机制](https://www.cnblogs.com/duiniweixiao/p/8884274.html)
  + 页面渲染过程
    1. 渲染过程：[浏览器渲染过程与页面优化](https://segmentfault.com/a/1190000010298038)
    2. [css加载会造成阻塞吗？](https://www.cnblogs.com/chenjg/p/7126822.html)
  + 重绘重排（参考上面渲染过程）
  + xss、csrf的原理、如何防护
    1. [csrf是什么](https://zhuanlan.zhihu.com/p/22521378)
    2. 防范xss的关键是过滤所有的‘<’和‘>’字符，确保从后端而来的数据并不带有任何的html标签，xss的危险在于有不可预料的前端脚本，但是值得注意的是，不单只有script标签是可以运行脚本的，任何的html标签都可以加上类似onclick，onload这样的事件也都可以运行脚本，所以需要过滤所有的‘<’和‘>’字符。假如，从后端而来的数据一定需要带上html标签（比如编辑器的富文本），且内容并不能保证是安全的（并不是可靠的人员录入的），就需要有合适的规则去“净化”它们。这个有现成的工具，比如HTML Purifier。http://htmlpurifier.org/
    3. [通过session或token防护csrf攻击](https://www.zhihu.com/question/21385375/answer/20850443)
  + 客户端存储
    1. [详细讲述Cookie,LocalStorge,SesstionStorge的区别和用法](https://segmentfault.com/a/1190000007506189)
    2. [session原理](https://segmentfault.com/a/1190000004627894)
    3. indexDB
  + 线程
    1. [JavaScript 运行机制详解：再谈Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
  + ajax、axios、fetch
    1. [传统Ajax已死，fetch当立](https://github.com/camsong/blog/issues/2)
    2. [fetch的缺点](https://www.cnblogs.com/huilixieqi/p/6494380.html)
    3. [fetch 没有你想象的那么美](http://undefinedblog.com/window-fetch-is-not-as-good-as-you-imagined/?utm_source=caibaojian.com)

+ CSS\CSS3\HTML
  + 块级元素垂直居中、行内元素垂直居中
  + Flex
  + 移动端布局的几种常见方式
    + rem + 动态计算root的font-size
    + flex
    + bootstrap\媒体查询
  + BFC、清除浮动方式
  + animate @keyframe cubic-bezier
  + 6个absolute的div实现个正方体，然后再支持旋转
  + html5新特性
  + SVG（简单实现一些css不好实现的效果，比如复杂加载动画）

+ Javascript

  + js语法细节 http://bonsaiden.github.io/JavaScript-Garden/zh/
  + 原型链
    1. [JS重点整理之JS原型链彻底搞清楚](https://zhuanlan.zhihu.com/p/22787302)
        看完上面的再捋一遍下面的
    2. [JS 原型与原型链终极详解](https://www.jianshu.com/p/dee9f8b14771)
        再看完上面的以后仔细阅读一下下面的，发现还是w3c讲得好
    3. [ECMAScript 继承机制实现](http://www.w3school.com.cn/js/pro_js_inheritance_implementing.asp)
  + 闭包
  + 柯里化、函数式编程
    + [从一道面试题谈谈函数柯里化(Currying)](https://cnodejs.org/topic/5884574e250bf4e2390e9e99)
  + 数组扩展
  + 深浅拷贝
  + 事件机制
    + 冒泡捕获,如何阻止冒泡捕获
    + 移动端事件
    + fastclick
      一般情况下移动端click都会有300ms延迟。移动浏览器上支持的双击缩放操作，以及IOS Safari 上的双击滚动操作，是导致300ms的点击延迟主要原因。FastClick的实现原理是在检测到touchend事件的时候，会通过DOM自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后真正的click事件阻止掉。
      [解决移动端click事件300ms延迟(fastclick和几个其他方法)](https://www.jianshu.com/p/16d3e4f9b2a9)
    + 一些常见兼容问题
  + new关键字做了什么，堆和栈，'123'和new String('123')为什么不相等
  + this、call、apply
    [js中this关键词详解](https://segmentfault.com/a/1190000003046071)
  + 函数式编程
    [函数式编程入门教程 - 阮一峰](http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html)
  + getter、setter
    1. [getter、setter方法有什么意义](https://www.zhihu.com/question/21401198)
    2. [由Vue引发的getter和setter思考](https://www.cnblogs.com/chinajins/p/5996835.html) 
    3. [vue深入响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)
    4. Vue一个问题：组件的生命周期和挂载顺序（多个组件时候呢？）
  + es6、es7新特性
    + promise、Generator 、async
    + set、map
    + class和原型链
      [ECMAScript 6 入门 - 阮一峰](https://github.com/ruanyf/es6tutorial)
    + 装饰器[ES7 Decorator装饰器](https://segmentfault.com/p/1210000009968000/read)
    + [《深入理解ES6》教程学习笔记](https://github.com/hyy1115/ES6-learning)
  + 模块化
    [JS模块规范：AMD、UMD、CMD、commonJS、ES6 module](https://segmentfault.com/a/1190000012419990)
  + 一些常用算法
    + 冒泡、快排、洗牌、递归、数组去重……
  + 正则
  + 谈谈JS面向对象
  + jQuery的实现相关问题
    [jQuery源码剖析（一）——概览&工具方法](https://www.w3ctech.com/topic/256)
    [jQuery源码剖析（二）——$.Callbacks](https://www.w3ctech.com/topic/257)

+ 工程化

  这一块基本上是不会问太多怪问题的，如果问到的话基本就两块：
  1. 根据一些场景来讲一讲webpack的优势，解决了什么问题，比如前端一些优化点、公共组件打包vendors、文件压缩、模块化、对es6的支持、文件差异对比。
  2. 一些基本的配置，常用的插件（一裤兜子loader、CommonsChunkPlugin、HashedModuleIdsPlugin、UglifyJsPlugin），会涉及到一些基本的node相关的东西（express、fs、os、process等）
  + 发展过程、目的
    + grunt、glup到webpack
  + webpack [webpack概念--webpack中文网](https://www.webpackjs.com/concepts/)
    + 原理
    + 常用配置
    + dev、production配置
    + mock、proxy
    + eslint
    + 各种loader
  + 资源优化
    + [用增量更新算法为 web 应用节省流量](https://www.ibm.com/developerworks/cn/web/1401_luyf_reducejs/)
  + monorepo [精读《Monorepo 的优势》](https://zhuanlan.zhihu.com/p/65533186)
  + Typescript
    + [TypeScript手册](https://zhuanlan.zhihu.com/p/82877006)
    + [ts-node](https://github.com/TypeStrong/ts-node)

+ react

  + 为什么选择react
    vdom性能、组件化开发、全面拥抱es6es7、社区强大、混合开发有rn、还有reactVR……
  + 为什么不选择react
    做seo要node中间层，要写node难度陡增；团队技术栈限制，项目大，会的人少
  + 生命周期
    + [React组件生命周期小结](https://www.jianshu.com/p/4784216b8194)
    + [官方文档](https://reactjs.org/docs/components-and-props.html#es6-classes)
    + Q: 异步请求在哪个周期发合适？A:根据请求目的来谈一下，初始化数据还是异步交互还是不用redux的情况下父组件通知子组件更新
  + diff算法
    [React 源码剖析系列 － 不可思议的 react diff](https://zhuanlan.zhihu.com/p/20346379)
    + 复杂度o(n)怎么做到的：因为父节点dirty了就不比子节点了，直接用新的替换，所以一层一层横向比下来就是o(n)
    + key是干嘛的：比如一个ul发生了改变，里面有key的会在diff算法中进行比较，相同的话直接或者改变顺序，然后copy到新tree里面，提高性能
  + setState
    [React 源码剖析系列 － 解密 setState](https://zhuanlan.zhihu.com/p/20328570)这个地方看明白点，名词咔咔一顿记，面试的时候狂拽名词然后再用汉语解释一下，一般面试官都懵逼
    + 为什么是异步的
    + 在一个生命周期里面可能多次setState怎么做
    + setState({}); setState(() =>{}); setState({}, () =>{})
  + redux、mobx
    + 看一下官方文档，什么redux三大原则，设计思路，然后需要讲一下redux和mobx的差异、优劣
    + [Redux or Mobx --前端应用状态管理方案的探索与思考](https://www.jianshu.com/p/a52e896f8c8f)
    + [我为什么从Redux迁移到了Mobx](https://segmentfault.com/a/1190000012209750)
  + react-router
  + 状态保存
  + react性能优化
    + 异步路由、异步组件
    + 使用无状态组件
    + shouldComponentUpdate
    + PureComponent
    + immutable.js
    + reselect
    + immer.js
  + react16新特性
    强烈推荐Morgan的这个live[深入理解React v16新功能](https://www.zhihu.com/lives/896398188230103040)
    + fiber
    + context
    + 16.3开始移除三个生命周期（17版本正式移除）
    + 新的生命周期componentDidCatch、getSnapshotBeforeUpdate
    + hooks, hooks lib
      + https://kentcdodds.com/blog/usememo-and-usecallback
      + https://zhuanlan.zhihu.com/fefame
      + https://github.com/ant-design/sunflower
      + https://www.zhihu.com/question/350523308/answer/858145147
      + https://github.com/streamich/react-use
      + https://github.com/immerjs/use-immer
      + https://github.com/umijs/hooks
      + https://github.com/ecomfe/react-hooks

+ node

  + react服务端渲染(ssr)\同构(isomorphic)
    + [如何使用React构建同构应用](http://bbs.51cto.com/thread-1518010-1.html)
    + [一看就懂的React Server Rendering(Isomorphic Javascript) 入门教学](https://blog.techbridge.cc/2016/08/27/react-redux-immutablejs-node-server-isomorphic-tutorial/)
  + express和koa、koa2的区别
  + 常用中间件
    + proxy
    + compression
    + request
    + async
    + mysql
    + redis
  + puppeteer
  + 内存处理
    + 根据服务实际情况分配内存大小 max-old-space-size [Can we document --max_old_space_size or is it deprecated? #7937](https://github.com/nodejs/node/issues/7937?from=from_parent_docs#issuecomment-269997873)
    + 下载文件考虑场景，可以直接pipe到磁盘文件上，避免高并发下全部存到内存中导致oom

+ 其他

  + GraphQL、BFF
    + [什么是 GraphQL](https://www.zhihu.com/question/264629587/answer/949588861)
    + [GraphQL学习指南](https://juejin.im/post/5c3d54096fb9a049c04346db)
  + WebAssembly
    + [有哪些效果拔群的 WebAssembly 应用？](https://www.zhihu.com/question/265700379/answer/951118579) 
    + [这可能是世界上最简单的用 Go 来写 WebAssembly 的教程](https://zhuanlan.zhihu.com/p/149266343)
  + hadoop \ clickhouse \ hive
    + [解决Hadoop的短板，实时大数据分析引擎ClickHouse解析](https://cloud.tencent.com/developer/article/1170540)
  + mq [消息队列Kafka、RocketMQ、RabbitMQ的优劣势比较](https://zhuanlan.zhihu.com/p/60288391)
  + Flutter
  + shadowDom
  + 前端优化（优化手段，工具，chrome devtools）
  + 图形处理
    + [skia](https://github.com/google/skia)
  + gitflow [git-recipes](https://github.com/geeeeeeeeek/git-recipes)

------
thanks to [@houxd1992](https://github.com/houxd1992)

## END
