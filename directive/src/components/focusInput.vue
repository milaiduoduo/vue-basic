<template>
  <div>
    <h3>我是局部注册的，自动聚焦的input</h3>
    <input type="text" v-focus>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    directives: {
      focus: {
        inserted: function (el) {
          el.focus();
        }
      }
    }
  }

</script>
<style lang='scss' rel="stylesheet/scss">

</style>
