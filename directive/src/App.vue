<template>

  <div style="background: deepskyblue;">
    <h2>导航</h2>
    <router-link class="link" to="/" tag="div">1.[v-focus]</router-link>
    <router-link class="link" to="/close" tag="div">2.[v-clickoutside]</router-link>
    <!--<router-link to="/time">v-time</router-link>-->
    <router-view></router-view>
  </div>

</template>

<script>

</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .link {
    padding: 5px 20px;
    font-size: 20px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    cursor: pointer;
    border:1px solid #42818B;
    &:hover {
      background: darkblue;
    }
  }
</style>
