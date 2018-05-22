<template>
  <div>
    <h3>用普通方法，实现之前v-Model绑定的实现方式。</h3>
    <hr>
    <p>总数：{{total}}</p>
    <my-component @input="handleGetTotal"></my-component>
  </div>
</template>
<script type='text/ecmascript-6'>
  import myComponent from './child.vue'
  export default{
    data(){
      return {
        total: 0
      }
    },
    components: {
      myComponent
    },
    methods: {
      handleGetTotal(childNum){
        this.total = childNum;
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
