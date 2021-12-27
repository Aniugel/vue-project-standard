<template>
  <div id="app">
    <footer>
      <tab-bar></tab-bar>
    </footer>
    <main><router-view /></main>
  </div>
</template>

<script>
import TabBar from "@/components/Common/TabBar";

export default {
  name: "app",
  components: { TabBar },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
#app {
  main {
    height: calc(100vh - 60px);
  }
}
</style>
