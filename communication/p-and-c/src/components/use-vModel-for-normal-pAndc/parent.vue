<template>
  <div>
    <router-link to="/" >1.父组件使用v-model语法糖</router-link>
    <router-link to="/normal">2.用常规方式再实现上面的效果</router-link>
    <hr>
    <h3>父组件使用v-model语法糖，而不再需要手写对子组件的监听。</h3>
    <h3>'<'my-component v-model='total''><'my-component'>'</h3>
    <hr>
    <p>总数：{{total}}</p>
    <my-component v-model="total"></my-component>
  </div>
</template>
<script type='text/ecmascript-6'>
  import myComponent from './child.vue';
//  父组件中的total和子组件中的total完全对应
  export default{
    data(){
      return {
        total: 0
      }
    },
    components: {
      myComponent
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
