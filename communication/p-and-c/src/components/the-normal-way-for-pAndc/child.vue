<template>
  <div>
    <button @click="handleClick">+1</button>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data(){
      return {
        counter: 0
      }
    },
    methods: {
      handleClick(){
        this.counter++;
        this.$emit('input', this.counter);
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
