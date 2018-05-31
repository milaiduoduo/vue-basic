<template>
  <div style="border:1px solid blue;">
    <p>我是index.vue,我调用了Counter组件，随机增加的数目为：</p>
    {{number}}
    <Counter></Counter>
  </div>
</template>
<script type='text/ecmascript-6'>
  import Counter from './Counter.vue';
  export default{
    data(){
      return {
        number: 0
      }
    },
    components: {
      Counter
    },
    created(){
      this.$bus.on('add', num => {
        console.log('parent num:', num);
        this.number += num;
      })
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
