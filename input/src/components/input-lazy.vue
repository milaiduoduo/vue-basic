<template>
  <div>
    <label>1. 使用v-model.lazy.trim,需要回车或者失去焦点才会触发:</label>
    <input type="text" v-model.lazy.trim="message">
    <br>
    <br>
    <label>2. 使用v-model.number,输入数字时，实际数字是string型的，使用修饰符后，把数字转化成Number类型：</label>
    <input type="text" v-model.number="nums" placeholder="输入数字后查看类型">
    <br><br><br><br><br>
    <hr>
    <p>message: {{message}}</p>
    <p>typfof message is:{{typeof message}}</p>
    <p>nums: {{nums}}</p>
    <p>typeof nums is: {{typeof nums}}</p>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data(){
      return {
        message: '',
        nums: ''
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
