<template>
  <div>
    <TopNav></TopNav>
    <div class="banner">
      <h1>free-ui</h1>
      <h2>一款免费的ui框架</h2>
      <p class="actions">
        <a href="https://github.com/rong0321/free-ui" target="_blank" class="github">Github</a>

        <router-link to="/doc">Get Start</router-link>
      </p>
    </div>
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
.banner {
  min-height: 500px;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;

  h1 {
    font-size: 64px;
  }

  h2 {
    margin: 2rem 0;
  }

  .actions {
    @8: 8px;
    @11: 10px;
    padding: 0 @8;

    a {
      display: inline-block;
      box-sizing: border-box;
      margin: 0 @8;
      padding: 0 @11;
      @h: 40px;
      height: @h;
      line-height: @h;
      border-radius: @h/2;
      background-color: #fff;
      color: #42b983;
      border: 1px solid transparent;

      &:hover {
        border: 1px solid #42b983;
      }

      &.github {
        color: #24292e;

        &:hover {
          border: 1px solid #24292e;
        }
      }
    }
  }
}
</style>
