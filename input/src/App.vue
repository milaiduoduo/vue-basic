<template>
  <div>
    <div class="head">
      <router-link class="item" to="/">1.sigle radio</router-link>
      <router-link class="item" to="/group" exact>2.group radio</router-link>
      <router-link class="item" to="/bind">3.radio 绑定值</router-link>
      <router-link class="item" to="/input">4.input的v-model</router-link>
      <router-link class="item" to="/inputInput">5.input的@input</router-link>
      <router-link class="item" to="/inputLazy">6.input的v-model修饰符</router-link>

    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss" rel="stylesheet/scss" >
  body{
    margin:0;
  }
  .head {
    text-align: center;
    margin-bottom: 40px;
    .item{
      padding:5px 20px;
      background: hotpink;
      &:hover{
        color:#fff;
        background: deepskyblue;
      }
    }
  }
  a{display: inline-block;}
  a,a:link,a:visited,a:hover,a:focus{
    color:#fff;
    text-decoration: none;
  }
</style>
