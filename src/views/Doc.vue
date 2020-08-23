<template>
  <TopNav />
  <div class="content">
    <aside>侧边栏</aside>
    <main>内容</main>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
  components: {
    TopNav
  }
}
</script>

<style lang="less" scoped>
.content {
  margin-top: 60px;
}
</style>
