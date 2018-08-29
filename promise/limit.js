/**
 * 创建最大并发请求类，支持链式回调
 * @param {limit} 最大并发数 
 * 
 * new
 */

// 异步操作，比如ajax啥的
function getApi(xxx) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(xxx)
    }, Math.random() * 3 * 1000)
  })
}

class PromiseLimit {
  // limit：并发数
  constructor(limit) {
    // 这里用一个set维护padding池，为了执行后方便的移除
    this.padding = new Set();
    // 等待队列
    this.wait = [];
    // 最大并发
    this.limit = limit;
  }

  // 新建异步任务
  reuest(xxx) {
    const {
      limit,
      wait,
      padding,
      check
    } = this;

    // 并发未满
    if(padding.size < limit) {
      console.log('free, add new task to padding queue')
      const task = new Promise((res, rej) => {
        getApi(xxx)
          .then(apiRes => res(apiRes))
          .catch(apiRej => rej(apiRej))
          .finally(() => {
            // 执行完毕后从并发池里删除
            padding.delete(task);
            // 完成后检查等待队列是否有未完的任务
            check.call(this)
          })
      })
      padding.add(task)
      return task
    } else {
      // 这里是关键
      // 并发已满，return一个空promise，然后不返回，把res和rej存下来
      console.log('padding queue is full, push to wait queue')
      const waitTask = new Promise((res, rej) => {
        const newTask = {res, rej, xxx}
        wait.push(newTask)
      })
      return waitTask
    }
  }

  check() {
    const {
      limit,
      wait,
      padding,
      check
    } = this;

    // 并发池未满并且有等待的任务
    if(padding.size < limit && wait.length > 0) {
      console.log('check queue!padding queue is free now, push a new task')
      // 最先进队列的任务
      const nextTask = wait.shift()
      getApi(nextTask.xxx)
        .then(apiRes => {
          padding.delete(nextTask);
          // 刚刚存下来的res，触发.then链式回调
          nextTask.res(apiRes);
        })
        // 刚刚存下来的rej，触发.catch链式回调
        .catch(apiRej => nextTask.rej(apiRej))
        .finally(() => {
          // 一样的删除，然后检查等待队列
          padding.delete(nextTask);
          check.call(this)
        })
      padding.add(nextTask)
    }

  }
}

const houge = new PromiseLimit(2);
houge.reuest('111').then((res) => console.log(res)).then(res => console.log('chaining!!'))
houge.reuest('222').then((res) => console.log(res))
houge.reuest('333').then((res) => console.log(res))
houge.reuest('444').then((res) => console.log(res))
houge.reuest('555').then((res) => console.log(res))

