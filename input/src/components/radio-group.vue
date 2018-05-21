<template>
  <div>
    <h3>radio分组，需要v-model结合value一起使用！</h3>
    <input id="html" type="radio" v-model="picked" value="html">
    <label for="html">HTML</label>
    <input id="css" type="radio" v-model="picked" value="css">
    <label for="css">css</label>
    <input id="es6" type="radio" v-model="picked" value="es6">
    <label for="es6">es6</label>
    <hr>
    {{picked}}
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data(){
      return {
        picked: 'css'
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
