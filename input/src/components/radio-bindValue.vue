<template>
  <div>
    <input id="r1" type="radio" v-model="picked" :value="value">
    <label for="r1">工业设计</label>
    <input type="button" @click="changePicked" value="changePicked">
    <hr>
    <h3>首先点击单选框看效果，v-model绑定的值由true变为value值123. app.picked === app.value</h3>
    <p>v-model: {{picked}}</p>
    <p>value: {{value}}</p>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data(){
      return {
        picked: true,
        value: 123
      }
    },
    methods: {
      changePicked(){
        this.picked = !this.picked;
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
