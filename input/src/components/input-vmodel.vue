<template>
  <div>
    <h3>注意:输入英文会逐字响应，输入中文，在拼音时不会响应，输入好一个中文后才会触发更新！</h3>
    <input type="text" v-model="fullfill" placeholder="请输入点什么">
    <h4>{{fullfill}}</h4>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data(){
      return {
        fullfill: 'you are monkeys!'
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
