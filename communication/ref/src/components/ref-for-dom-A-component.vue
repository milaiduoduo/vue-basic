<template>
  <div>
    <div ref="p">普通p标签</div>
    <other-component ref="comp"></other-component>
    <hr>
    <p>用ref取得的结果是(渲染不出来，或者报错！！)：</p>
    <template v-if="r1">
      <p>普通标签:{{r1}}</p>
     <!--<p v-text="r1">普通标签:</p>-->

      <p>组件标签:{{r2}}</p>
    </template>
  </div>
</template>
<script type='text/ecmascript-6'>
  import otherComponent from './other-component.vue'
  export default{
    data(){
      return {
        r1: null,
        r2: null,
        htmlData: '<div>能显示“<div>htmlData</div>”吗？</div>' +
        '<span>换行了没？</span>'
      }
    },
    components: {
      otherComponent
    },
    mounted(){
      let r1 = this.$refs.p;
      let r2 = this.$refs.comp;
//      console.log('普通标签：', r1.toString());
//      console.log('组件标签：', r2.$el);
      this.r1 = r1;
      this.r2 = '' + r2;
//      问题：
//      1.如何把标签显示在页面上
//      2.如何显示一个[object Object]的详细信息
//      console.log(JSON.stringify(r2));


      let test_a = '{"L1":{"L2":{"L3":"leafs"}}}';
//      let result = JSON.parse(JSON.stringify(test_a));
//      console.log(JSON.stringify(test_a));
      console.log(JSON.parse(test_a));
      console.log(new Function("return " + test_a)());
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
