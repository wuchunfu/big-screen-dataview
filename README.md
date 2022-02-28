# [big-screen-dataview](https://hai2007.github.io/big-screen-dataview/)
基于vue3+ts搭建的搭配可视化项目，使用image2d、image3d、echart、plain-chart等多种绘图方式支持。

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/hai2007/big-screen-dataview/issues)，欢迎参与维护！

## 如何启动本地编辑？

首先，你需要确保本地安装了node.js，然后，执行下面命令安装项目依赖：

```
npm install
```

接着，启动下面命令会自动打开页面，修改内容页面也自动刷新：

```
npm run dev
```

如果你想发布开发的代码，执行下面命令进行打包：

```
npm run build
```

## 一些说明

### 图表组件封装

为了方便使用，我们对依赖的库或别的依赖进行了二次封装：

- [Plain Chart](./src/common/plain-chart/readme.md) ：用于提供常用的图表
- [Image2D](./src/common/image2d/readme.md) ：绘制一些特殊的图表
- [Image3D](./src/common/image3d/readme.md) ：用于个性化的3D图形绘制

### 统一弹框设计

为了方便弹框的实现，我们进行了统一的设计（下面，我们以```alert```弹框为例来说明）。

首先，你需要准备好弹框的模板，很简单，在```src/dialogs```下新建一个```.vue文件```即可。

打卡```warning.vue```文件，可以看见，里面的内容是通过data来接收的，这个数据也就是调用这个弹框的时候传递的```initdata```这项。

当然，新建完毕后，别忘了在```src/dialogs/lazy-load.ts```中进行懒加载注册。

现在，已经可以使用这个弹框了，在这里，使用的例子就是：

```js
this.$store.commit('openDialog', {
    id: "warning",
    initdata: ['alert', "你刚刚进行的操作成功了", "温馨提示", "确定"],
    callback: function () {
       // 回调
    }
});
```

对于普通的弹框，到这里就可以了，不过，由于alert等比较特殊，经常使用到，由此，我们对一些常用的，进行了更简单的封装，下面列举一下：

- this.$alert(msg, title, funPos) ：一些小提示
- this.$confirm(title, msg, actionPos, actionNeg, mesPos, mesNeg)：确认提示

### 新增"边框"和"图表"

首先，你需要在```src/components/```下的```border```和```chart```下方便新增需要的组件，然后在对应的```lazy-load.ts```中进行引入。

此时，页面中已经可以使用这些组件了，只不过，为了在```选中配置```界面可选，还需要在```config/```下的```border```和```chart```文件夹中进行登记。

开源协议
---------------------------------------
[MIT](https://github.com/hai2007/big-screen-dataview/blob/master/LICENSE)

Copyright (c) 2022 [hai2007](https://hai2007.gitee.io/model-editor/) 走一步，再走一步。
