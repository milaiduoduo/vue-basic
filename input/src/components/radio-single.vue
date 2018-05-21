<template>
  <div>
    <input id="r1" type="radio" :checked="picked">
    <label for="r1">室内设计</label>
    <input type="button" @click="changeState" value="change picked">
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data(){
      return {
        picked: true
      }
    },
    methods: {
      changeState(){
        this.picked = !this.picked;
        console.log(this.picked);
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
