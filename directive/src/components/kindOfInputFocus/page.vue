<template>
  <div style="background:#ffe7e2;">
    <h1>[v-focus]</h1>
    <h2>一、第一部分是全局注册的v-focus指令！对同一页面中的input[type=text]只会focus最后一个！</h2>
    <template>
      <input type="text" v-focus value="1">
      <input type="text" v-focus value="2">
      <input type="text" v-focus value="3">
    </template>
    <other pvalue="1"></other>
    <other pvalue="2"></other>
    <other pvalue="3、整个页面只focus最后一个文本框！"></other>
    <hr>
    <h2>二、以下是局部注册的v-focus。无论是全局注册还是局部注册，渲染到页面后，也只会对最后一个input[type=text]focus。</h2>
    <focus-input></focus-input>
    <hr>
    <h3>三、没有使用自定义指令，而是使用组件ref来操作dom，从而实现focus</h3>
    <nodirect></nodirect>
    <router-view/>
  </div>
</template>

<script>
  import focusInput from '@/components/kindOfInputFocus/focusInput';
  import other from '@/components/kindOfInputFocus/other';
  import nodirect from '@/components/kindOfInputFocus/noDirective';
  export default {
    name: 'App',
    components: {
      focusInput,
      other,
      nodirect
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
