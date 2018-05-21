<template>
  <div>
    <input type="text" @input="handleInput" placeholder="请输入点什么">
    <br><br><br><br><br>
    <h5>前后输入空白看看</h5>
    <h4 style="white-space:pre;">{{message}}</h4>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data(){
      return {
        message: ''
      }
    },
    methods: {
      handleInput(e){
        this.message = e.target.value;
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
