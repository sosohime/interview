> 这篇文章并不是教程，只是我的一些个人理解，欢迎与我一起讨论。文章不对的地方，还请费心指出^-^
### 引入
```javascript
constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  handleClick = () => {
    this.setState({ num: this.state.num + 1 });
    console.log(this.state.num, '- By 1');    // 第 1 次 log

    this.setState({ num: this.state.num + 1 });
    console.log(this.state.num, '- By 2');    // 第 2 次 log

    setTimeout(() => {
      this.setState({ num: this.state.num + 1 });
      console.log(this.state.num, '- By 3');  // 第 3 次 log

      this.setState({ num: this.state.num + 1 });
      console.log(this.state.num, '- By 4');  // 第 4 次 log
    }, 0);
  }
```
上述代码中console的打印顺序和打印出来的num分别是多少？

0 "- By 1"
0 "- By 2"
2 "- By 3"
3 "- By 4"

可以看到，前两次setState后打印出的结果都是0，并且最终的结果是3，有一次setState没有达到预期的结果，这是因为
### setState不保证会立刻改变React组件中state的值
```javascript
constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  handleClick = () => {
    this.state.num = 10;
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>normal</button>
        <p>{this.state.num}</p>
      </div>
    );
  }
}
// 点击按钮后，页面没有变化。
```
上面这段代码不会触发直接在组件中修改state的值不会触发视图的更新，页面依旧显示0。因为this.state只是组件内部的一个简单对象，react并没有使用发布订阅模式来监听组件状态的变化（想想这样实现就很混乱），所以需要一个函数来触发组件的更新过程，这个函数就是setState。

### setState一定不会立刻改变组件中的state值吗？
答案是不一定，上文提到 setState**不保证**会立刻改变React组件中state的值，在一些场景下每一次setState都是独立有效的，上代码
```javascript
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  componentDidMount() {
    document.querySelector('#event').addEventListener('click', () => {
      console.log('# setState by eventListener');
      this.setState({ num: this.state.num + 1 });
      this.setState({ num: this.state.num + 1 });
      this.setState({ num: this.state.num + 1 });
      this.setState({ num: this.state.num + 1 });
    });
  }

  handleClick = () => {
    console.log('# normal setState');
    this.setState({ num: this.state.num + 1 });
    this.setState({ num: this.state.num + 1 });
    this.setState({ num: this.state.num + 1 });
    this.setState({ num: this.state.num + 1 });
  }

  handleClick2 = () => {
    console.log('# setState by setTmeout');
    setTimeout(() => {
      this.setState({ num: this.state.num + 1 });
    }, 0);
    setTimeout(() => {
      this.setState({ num: this.state.num + 1 });
    }, 0);
  }

  render() {
    console.log('# render');
    return (
      <div>
        <button onClick={this.handleClick}>normal setState</button>
        <button onClick={this.handleClick2}>setState by setTmeout</button>
        <button id="event">setState by eventListener</button>
        <p>{this.state.num}</p>
      </div>
    );
  }
}

// 逐一点击按钮观察结果
// normal setState：num结果+1
// #normal setState
// # render

// setState by setTmeout：num结果+2
// #setState by setTmeout
// # render
// # render

// setState by eventListener：num结果+4
// #setState by eventListener
// # render
// # render
// # render
// # render
```
先说结论，只有react引发的事件处理（生命周期函数、各种onChange、onClick等）中的正常setState会放入一个更新队列中，产生一个Object.assign的效果，然后触发更新过程。而其他函数中每次setState都会单独触发一次更新过程。

why？

因为setState的调用会依次触发React的四个生命周期函数：
1. shouldComponentUpdate
2. componentWillUpdate
3. render
4. componentDidUpdate
如果每次setState都触发一轮更新，想想也会导致性能问题。

#### state究竟在何时更新？
```javascript
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  shouldComponentUpdate() {
    console.log('# shouldComponentUpdate', '|| num is :', this.state.num);
    return true;
  }

  componentWillUpdate() {
    console.log('# componentWillUpdate', '|| num is :', this.state.num);

  }

  componentDidUpdate() {
    console.log('# componentDidUpdate', '|| num is :', this.state.num);

  }

  handleClick = () => {
    console.log('normal setState', '|| num is :', this.state.num);
    this.setState({ num: this.state.num + 1 });
  }

  render() {
    console.log('# render', '|| num is :', this.state.num);
    return (
      <div>
        <button onClick={this.handleClick}>normal setState</button>
        <p>{this.state.num}</p>
      </div>
    );
  }
}
// normal setState || num is : 0
// # shouldComponentUpdate || num is : 0
// # componentWillUpdate || num is : 0
// # render || num is : 1
// # componentDidUpdate || num is : 1
```
showuldCompoentUpdate、componentWillUpdate函数被调用的时候，this.state都没有得到更新。

直到render函数被调用的时候，this.state才得到更新。

如果在shouldComponentUpdate中return false，阻止组件更新呢？
```javascript
  // 修改一下shouldComponentUpdate，返回false阻止更新
  shouldComponentUpdate() {
    console.log('# shouldComponentUpdate', '|| num is :', this.state.num);
    return false;
  }
// 第一次点击
// normal setState || num is : 0
// # shouldComponentUpdate || num is : 0

// 第二次点击
// normal setState || num is : 1
// # shouldComponentUpdate || num is : 1
```
可以看到，shouldComponentUpdate阻止了后续生命周期的执行，不过第二次点击以后，num还是增加了，但是在视图中依旧没有发生变化。
可以简单地理解为，直到render函数被调用（或者下一次shouldComponentUpdate返回false）才能得到更新后的state。


### setState的用法
先看一下官方文档[setState](https://reactjs.org/docs/react-component.html#setstate)
```javascript
setState(updater[, callback])
```
setState接收两个参数，第一个是更新器，第二个是组件更新完成后的回调
更新器两种形式，一种是对象，一种是函数。对象形式大家应该都比较熟悉。函数的话有两个参数，第一个是**更新队列当前最新的state**，下文会详细说明，第二个参数是props。
```javascript
setState({num: this.state.num + 1})
setState((prevState, props) => {
    return {num: prevState.num + 1}
})
```
函数式的更新器也是目前推荐的写法，它可以为我们解决一个问题
```javascript
// 这样正常调的话四次setState之后结果还是只 + 1
handleClick = () => {
    this.setState({ num: this.state.num + 1 });
    this.setState({ num: this.state.num + 1 });
    this.setState({ num: this.state.num + 1 });
    this.setState({ num: this.state.num + 1 });
}

// 下面采用函数写法
handleClick = () => {
    this.setState((prevState, props) => {
        return {num: prevState.num + 1}
    })
    this.setState((prevState, props) => {
        return {num: prevState.num + 1}
    })
    this.setState((prevState, props) => {
        return {num: prevState.num + 1}
    })
    this.setState((prevState, props) => {
        return {num: prevState.num + 1}
    })
// 结果变成4了，真棒！
}
```
看起来非常的amazing对吧，然而事情并没有这么简单，上文高亮强调了一下，第一个参数prevState是**更新队列当前最新的state**，意思是说，你还在这个队列里面，组件还并没更新啊，如果中间搞点幺蛾子，那么这个结果就变得非常不可控了，比如我在中间混进一个对象式的updater。
```javascript
handleClick = () => {
    this.setState((prevState, props) => {
        // prevState == 0
        return {num: prevState.num + 1}
    })
    this.setState((prevState, props) => {
        // prevState == 1
        return {num: prevState.num + 1}
    })
    this.setState((prevState, props) => {
        // prevState == 2
        return {num: prevState.num + 1}
    })
    // 对象式的老哥横插一脚表示前面你们都是啥玩意，我不管我不管
    // 自说自话的更新了队列里面的num
    // 因为队列还在执行，真正的state其实还没变
    // 所以这个执行完以后，队列中的num又变成了 0 + 1 = 1
    this.setState({num: this.state.num + 1});

    this.setState((prevState, props) => {
        // prevState == 1
        return {num: prevState.num + 1}
    })
    // 最终的结果是2
```
看到这，好像又没有那么amazing了……

实际上在开发过程中，关于React是如何帮我们合并setState、优化渲染过程不用太多关心，只要知道setState有这些“坑”，然后采用稳定的写法来规避就可以了，所以推荐在使用setState的时候，全部使用函数式的updater，安全放心。

#### 后记
这片文章主要是梳理一下setState，而react16版本开始加入fiber，setState触发的更新过程又发生了变化，是否会产生其他问题啥的还请阅读源码。
推荐文章：
[从React到React Fiber](https://www.jianshu.com/p/9b71f91a0b21)
[专栏-进击的React](https://zhuanlan.zhihu.com/advancing-react)


参考资料：
[setState：这个API设计到底怎么样](https://zhuanlan.zhihu.com/p/25954470)
[setState为什么不会同步更新组件状态](https://zhuanlan.zhihu.com/p/25990883)
[setState何时同步更新状态](https://zhuanlan.zhihu.com/p/26069727)
[React 源码剖析系列 － 解密 setState](https://zhuanlan.zhihu.com/p/20328570)
[React setState的麻烦事儿](https://ruby-china.org/topics/32715)
[更合理的 setState](https://www.erichain.me/2017/04/17/2017-04-17-more-reasonable-setstate/)
[官方文档](https://reactjs.org/docs/react-component.html#setstate)
