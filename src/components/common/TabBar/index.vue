<template>
  <div class="tab-bar">
    <!-- 组件比较简单其实不需要分那么细 -->
    <!-- <tab-item
      v-for="foot in footers"
      :key="foot.id"
      :txt="foot.txt"
      :sel="selected"
      :mark="foot.mark"
    >
      <img slot="normalImg" :src="foot.normalImg" alt="" />
      <img slot="activeImg" :src="foot.activeImg" alt="" />
    </tab-item> -->

    <!-- <div v-for="n in 2" :key="n">
      <img src="../../assets/images/home/logo.png" :alt="n" />
    </div> -->

    <div class="tab-bar-item"
         v-for="foot in footers"
         @click="handleLinkTo(foot.mark)"
         :key="foot.id + 'id'">
      <span v-if="!(foot.mark === selected)"><img :src="foot.normalImg"
             :alt="foot.mark" /></span>
      <span v-else> <img :src="foot.activeImg"
             :alt="foot.mark" /></span>
      <span :class="{ active: foot.mark === selected }">{{ foot.txt }}</span>
    </div>
  </div>
</template>

<script>
// import TabItem from "./TabItem";
import footer from "./footer-data";
export default {
  name: "tab-bar",
  // components: {
  //   TabItem,
  // },
  mounted () {
  },
  data () {
    return {
      selected: window.location.pathname.replace(/\//g, ''),
      footers: footer,
    };
  },
  computed: {},
  methods: {
    handleLinkTo (val) {
      let isCurrentPage = window.location.pathname.replace(/\//g, '')
      if (isCurrentPage !== val) {
        this.selected = val
        this.$router.push('/' + val)
      }
    }
  },
};
</script>

<style lang = "scss" scoped>
.tab-bar {
  display: flex;
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  height: 60px;
  width: 100%;
  border-top: 1px solid #ccc;
  background: #fff;
  align-items: center;
  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    img {
      width: 30px;
      height: 30px;
      margin-bottom: 5px;
    }
    .active {
      color: #42bd56;
    }
  }
}
</style>
