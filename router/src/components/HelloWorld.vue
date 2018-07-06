<template>
  <div>
    <h2>i am hello world!!!!!</h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("2. 組件級別Enter，HelloWorld里！！");
    console.log("to,from:", to, from);
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("2. 組件級別Update，HelloWorld里！！");
    console.log("to,from:", to, from);
    next();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
