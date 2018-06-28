> whistle是基于Node实现的开源跨平台web调试代理工具（其实就是node版的charles \ fiddler）
#### 快捷链接
[中文文档](http://wproxy.org/whistle/)
[Github](https://github.com/avwo/whistle)

## 简介

  whistle与同类代理工具相比拥有以下优势
  - 更友好、简介的图形界面，配置简单
  - 支持正则、通配符，语法简明
  - 中文文档
  - 开源
  - 安装根证书后支持Https
  - 跨平台

## 安装

  安装启动whistle，需要以下四个步骤： 安装Node、安装whistle、启动whistle、配置代理。
  ```
  // 下面步骤以win为例，mac用户自行补全命令
  // eg:
  npm install // win
  $ npm install // mac root用户
  sudo npm install // mac 非root用户
  ```

  另：npm默认镜像是在国外，有时候安装速度很慢或者出现安装不了的情况可以开启代理，如果无法安装或者安装很慢，可以使用taobao的镜像安装：
  ```
  // 换源
  npm config set registry https://registry.npm.taobao.org

  // 或者直接指定镜像安装：
  npm install whistle -g --registry=https://registry.npm.taobao.org
  ```

  具体安装过程参考中文文档：[安装启动](http://wproxy.org/whistle/install.html)

  推荐使用chrome插件进行浏览器代理，对其他进程没有影响，并且可以再开另外一个浏览器同时进行其他操作

## 使用

  
