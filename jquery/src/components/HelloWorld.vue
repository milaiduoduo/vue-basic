<template>
  <div>
    <input type="text" ref="input1" :value="msg">
    <div>{{msg}}</div>
    <div id="vt" style="background: deeppink"></div>
    <div v-html="domStr" style="background:blue;"></div>
    <div>{{domStr}}</div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        domStr: '12',
        msg: 'i am a text input.'
      }
    },
    created(){
      console.log('created:', this.$el);
      console.log('created:', this.msg);
      console.log('created:', this.$refs.input1);
    },
    mounted(){
      let val = $(this.$refs.input1)[0];
      this.domStr = val;
      $('#vt').html(this.domStr)
//      console.log('mounted:', this.$el);
//      console.log('mounted:', this.msg);
//      console.log('mounted:', this.$refs.input1);
      console.log(this.domStr);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
