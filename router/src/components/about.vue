<template>
    <div>
        <h2>i am about!!!!</h2>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  beforeRouteEnter(to, from, next) {
    console.log("2.1 組件級別Enter，About里！！");
    console.log("to,from:", to, from);
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("2.1 組件級別Update，About里！！");
    console.log("to,from:", to, from);
    next();
  },
  created() {
    console.log("生命週期created,子路由about");
  },
  mounted() {
    console.log("生命週期mounted,子路由about");
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
