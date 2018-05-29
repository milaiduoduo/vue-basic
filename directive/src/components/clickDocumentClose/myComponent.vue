<template>
  <div>
    <h1>四、【点击document关闭列表区域】</h1>
    <div class="wrap" v-clickoutside="handleClose">
      <button @click="show=!show">open</button>
      <ul class="dropdown" v-show="show">
        <li>node.js</li>
        <li>vue.js</li>
      </ul>
    </div>
    <br><br><br><br><br><br><br>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data(){
      return {
        show: false
      }
    },
    directives: {
      clickoutside: {
        bind(el, binding, vnode) {
          function documentHandler(e) {
            // el就是.wrap
            if (el.contains(e.target)) {
              return false;
            }
            if (binding.expression) {
              console.log('in binding.express');
              binding.value(e)
            }
          }

          function keyupHandler(e) {
            if (e.keyCode == 27) {
              if (binding.expression) {
                console.log('in binding.express');
                binding.value(e)
              }
            }
          }

          el.__vueClickOutside__ = documentHandler;
          el.__vueClickESC__ = keyupHandler;
          document.addEventListener('click', documentHandler);
          document.addEventListener('keyup', keyupHandler);
        },
        unbind: function (el, binding) {
          document.removeEventListener('click', el.__vueClickOutside__);
          document.removeEventListener('keyup', el.__vueClickESC__);
          delete el.__vueClickOutside__;
          delete el.__vueClickESC__;
        }
      }
    },
    methods: {
      handleClose(){
        this.show = false;
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">
  button, .wrap {
    width: 100px;
  }

  .dropdown, li {
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  .dropdown {
    width: 100px;
    background: deepskyblue;
    color: #fff;
    /*display: none;*/
    > li {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      &:hover {
        background: blue;
      }
    }
  }
</style>
