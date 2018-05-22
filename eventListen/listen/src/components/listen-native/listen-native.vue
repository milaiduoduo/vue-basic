<template>
  <div class="wrap">
    <h3>info: {{message}}</h3>
    <hr>
    <p>1.监听组件上的原生事件，需要用.native。如：@click.native="handleClick"</p>
    <my-component @click.native="handleClickNative"></my-component>
    <p>2.监听普通dom上的原生事件，直接用如@click。</p>
    <div class="btn" @click="handleClick">我是div按钮</div>
  </div>
</template>
<script type='text/ecmascript-6'>
  import myComponent from '@/components/listen-native/my-component';
  export default{
    data(){
      return {
        message: ''
      }
    },
    components: {
      myComponent
    },
    methods: {
      handleClickNative(){
        this.message = '来至.native的点击！'
      },
      handleClick(){
        this.message = '来至普通dom的点击！';
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">
  /*用使用scope，下面的样式会应用到全局*/
  .btn {
    width: 200px;
    height: 30px;
    margin: 0 auto;
    padding: 5px 10px;
    background: deepskyblue;
    color: #fff;
    cursor: pointer;
  }

</style>
