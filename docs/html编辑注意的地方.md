html链接
  1.给 <a> 标签加上title属性
  2.<a>标签的href属性必须写上链接地址，暂无的加上javascript:void(0)(少写)/或者href="#######")
  3.非本专题的页面间跳转，采用打开新窗口模式：target="_blank"
  4.不能跳转的不用<a>标签,<a></a>标签设置 cursor: pointer;属性,且要设置高亮

https协议自适应, ( https://tgideas.qq.com/doc/frontend/spec/common/html.html#%E9%93%BE%E6%8E%A5 )
  将调用静态域名 ossweb-img.qq.com 以及 game.gtimg.cn 的外部请求，写法上一律去掉协议http:部分，采用自适应的写法,也叫缺省写法。具体方法如下：
  <style>
  //CSS背景图片 
  .bg{background: url(//game.gtimg.cn/images/cf/cp/a20161021sqjs/hd.jpg) no-repeat;}
  </style>
  //链接URL
  <a href="//cf.qq.com/main.shtml">进入官网</a>
  //图片SRC
  <img src="//game.gtimg.cn/images/cf/web201610/logo.png">
  //JS链接
  <script src="//ossweb-img.qq.com/images/js/title.js"></script>


https://guide.aotu.io/docs/html/code.html 凹凸实验室标准


```
  - class
  - id,ref
  - name
  - data-*
  - src, for, type, href,value,max-length,max,min,pattern
  - title, alt，placeholder
  - aria-*, role
  - required,readonly,disabled
  - is
  - v-for
  - key
  - v-if
  - v-else-if
  - v-else
  - v-show
  - v-cloak
  - v-pre
  - v-once
  - v-model
  - v-bind,:
  - v-on,@
  - v-html
  - v-text

```


特殊字符引用
 推荐: <a href="#">more&gt;&gt;</a>  不推荐 <a href="#">more&gt;&gt;</a>