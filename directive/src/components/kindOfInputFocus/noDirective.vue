<template>
  <div>
    <input type="text" ref="input">
    <!--<span v-if="msg" v-text="msg"></span>-->
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    mounted(){
      this.msg = this.$refs.input.toString();
      console.log(this.msg);
      console.log(this.$refs.input)
      this.$refs.input.focus();
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
