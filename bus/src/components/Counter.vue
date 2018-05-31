<template>
  <div style="border:1px solid red;">
    <p>我是counter组件，且我注册了一个add 的event</p>
    <button @click="handleAddRandom">触发this.$bus.emit('add', num);事件</button>
    <p>随机数为：{{randNum}}</p>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
//    props: {
//      number: {
//        type: Number
//      }
//    },
    data(){
        return {
          randNum:0
        }
    },
    methods: {
      handleAddRandom(){
        this.randNum = Math.floor(Math.random() * 100 + 1);
        this.$bus.emit('add', this.randNum);
        this.$bus.num = this.randNum;
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
