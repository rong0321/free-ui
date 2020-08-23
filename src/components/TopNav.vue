<template>
  <div class="topNav">
    <div class="logo">LOGO</div>
    <div class="menu">
      <ul>
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.topNav {
  width: 100%;
  height: 60px;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  .logo {
    margin-left: 16px;
    padding: 0 8px;
    cursor: pointer;
  }

  ul {
    display: flex;
    margin-right: 8px;

    li {
      margin: 0 8px;
      cursor: pointer;
    }
  }
}
</style>
