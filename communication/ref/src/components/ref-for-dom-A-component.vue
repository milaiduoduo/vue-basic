<template>
  <div>
    <p ref="p">普通p标签</p>
    <other-component ref="comp"></other-component>
    <hr>
    <p>用ref取得的结果是(渲染不出来，或者报错！！)：</p>
    <template v-if="r1">
      <p>普通标签:{{r1}}</p>
      <p>组件标签:{{r2}}</p>
    </template>

  </div>
</template>
<script type='text/ecmascript-6'>
  import otherComponent from './other-component.vue'
  export default{
    data(){
      return {
        r1: '',
        r2: null
      }
    },
    components: {
      otherComponent
    },
    mounted(){
      let r1 = this.$refs.p;
      let r2 = this.$refs.comp;
      console.log('普通标签：', r1);
      console.log('组件标签：', r2);
      this.r1 = r1;
      this.r2 = r1;
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
