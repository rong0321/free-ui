<template>
  <div class="nav">
    导航栏 | <router-link to="/">component</router-link> |
    <router-link to="/asd">component2</router-link>
  </div>
  <hr />
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
