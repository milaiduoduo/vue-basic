<template>
  <div>
    <h2>i am hello world!!!!!</h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("2. 父組件級別Enter，父路由HelloWorld里！！");
    console.log("to,from:", to, from);
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("2. 父組件級別Update，父路由HelloWorld里！！");
    console.log("to,from:", to, from);
    next();
  },
  created() {
    console.log("生命週期created,父路由HelloWorld");
  },
  mounted() {
    console.log("生命週期mounted,父路由HelloWorld");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
