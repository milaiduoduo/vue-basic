<template>
  <div>
    <h3>我是组件，我正在使用全局注册的v-focus指令，验证它确实有效！</h3>
    <input type="text" v-focus :value="pvalue">
    {{pvalue}}
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
      props:['pvalue']
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
