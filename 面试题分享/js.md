# JS题目开始！

```javascript
// 写出输出
var num1 = 1
function func1(){
  console.log(num1, num2, num3)
}
var num2 = 2
func1()
func2()
var func2 = function(){
  console.log(num1, num2, num3)
}
var num3 = 3
```

```javascript
// 写出输出
console.log(1)
setTimeout(() => {
  console.log(2)
  setTimeout(() => {
    console.log(3)
  }, 0)
}, 0)
console.log(4)
```

```javascript
// 写出输出
for(var i = 0; i < 5; i++) {
  var o = i
  (function(){
    var p = i;
    setTimeout(() => {
      console.log(i, o, p)
    }, 0)
  })()
}
```

```javascript
// 实现以下函数
function add(number){}

add(1)(2)(3) // 6
```

```javascript
// 用es5和es6分别实现继承
// Animal具有getType、getName方法
// Cat继承于Animal
// var animal = new Animal()
// animal.getType() // I am animal
// anmial.getName() // I don't konw

// var cat = new Cat('yaoyao')
// cat.getType() // i am animal
// cat.getName() // My name is yaoyao, memeda
```

```javascript
// 写一个对象深拷贝
```

```javascript
// 写一个多维数组转为一维数组
var arr = [[1,2,[5,6]],[3,4]]
function multToOneDimensionArray(array){}

multToOneDimensionArray(arr) //[1, 2, 3, 4, 5, 6]
```

```javascript
// 写一个函数，从指定数字区间里面随机取n个不重复的数(做异常处理)
function getRandomArrayByInterval(start, end, n)

getRandomArrayByInterval(6, 20, 5) // [6, 10, 12, 16, 17]
// tip: getRandomArrayByInterval(6, 20, 100) // error
```

```javascript
// 写一个最大并发请求类，支持链式回调(见../promise/limit.js)
```