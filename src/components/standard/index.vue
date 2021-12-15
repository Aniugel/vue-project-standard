<template>
  <div id="my-component">
    <img src="https://vuejs.org/images/logo.png"
         alt="Vue Logo">
    <MyComponent foo="a"
                 bar="b"
                 baz="c" />
    <!-- 单行注释：注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行 -->
    <!-- good -->
    <div>
      <h1>我是h1标题<span>hot</span></h1>
      <p>我是一段文字，我有始有终，浏览器能正确解析</p>
    </div>

    <br data-tomark-pass>

    <!-- bad -->
    <div>
      <h1>我是h1标题</h1>
      <p>我是一段文字，我有始无终，浏览器亦能正确解析
    </div>

    <br />

    <!-- S Comment Text A -->
    <div class="mod_a">
      ...
    </div>
    <!-- E Comment Text A -->

    <div class="modulename">
      <div class="modulename-cover"></div>
      <div class="modulename-info">
        <div class="modulename-info-user">
          <div class="modulename-info-user-img">
            <img src=""
                 alt="">
            <!-- 这个时候 miui 为 modulename-info-user-img 首字母缩写-->
            <div class="miui-tit"></div>
            <div class="miui-txt"></div>
            ...
          </div>
        </div>
        <div class="modulename-info-list"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'standard',
  components: {
  },
  mixins: [],
  // Prop 定义应该尽量详细
  props: {
    status: {
      type: String,
      required: true,
      validator: function (value) {
        return [
          'syncing',
          'synced',
          'version-conflict',
          'error'
        ].indexOf(value) !== -1
      }
    }
  },
  data () {
    return {}
  },
  // 应该把复杂计算属性分割为尽可能多的更简单的属性
  computed: {
    basePrice: function () {
      return this.manufactureCost / (1 - this.profitMargin)
    },
    discount: function () {
      return this.basePrice * (this.discountPercent || 0)
    },
    finalPrice: function () {
      return this.basePrice - this.discount
    }
  },
  watch: {},
  created () { },
  mounted () { },
  activited () { },
  update () { },
  beforeRouteUpdate () { },
  destroyed () { },
  filter: {},
  methods: {
    /* 1.动宾短语（good：jumpPage、openCarInfoDialog）（bad：go、nextPage、show、open、login）
    2.ajax 方法以 get、post 开头，以 data 结尾（good：getListData、postFormData）（bad：takeData、confirmData、getList、postForm）
    3.事件方法以 on 开头（onTypeChange、onUsernameInput）
    4.init、refresh 单词除外
    5.尽量使用常用单词开头（set、get、open、close、jump）
    6.驼峰命名（good: getListData）（bad: get_list_data、getlistData） */
  },
}
</script>

<style lang="scss" scoped>
/*  */

#my-component {
  /* 布局定位属性：display / position / float / clear / visibility / overflow
自身属性：width / height / margin / padding / border / background
文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background: linear-gradient …
*/
  // 布局定位属性
  display: block;
  position: relative;
  float: left;
  // 自身属性
  width: 100px;
  height: 100px;
  margin: 0 10px;
  padding: 20px 0;
  // rgba(0, 0, 0, .5)自动去掉0，格式化补0除外
  background: rgba(0, 0, 0, 0.5);
  // 文本属性
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  color: #333;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
</style>
