<template>
  <div>
    <p>无法接收bus的add事件中的参数num:</p>
    <p>换成接收bus中data属性num,达到效果。</p>
    <p>counter的值重100变为：{{counter}}</p>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data(){
      return {
        counter: 100
      }
    },
    created(){
      console.log('in getBusEvent created.');
      this.counter += this.$bus.num;
//      this.$bus.on('add', num => {
//        console.log('getBusEvent num:', num);
//        this.counter += num;
//      })
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
