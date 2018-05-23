<template>
  <div id="app">
    <div id="div" v-if="showDiv">我出现了！</div>
    <button @click="getText">获取div内容</button>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data(){
      return {
        showDiv: false
      }
    },
    methods: {
      getText(){
//        没有使用nextTick也被渲染出来了。。。。
        this.showDiv = true;
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
