<template>
    <div>
        <h2>i am about!!!!</h2>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  beforeRouteEnter(to, from, next) {
    console.log("2.1 組件級別，About里！！");
    console.log("to,from:", to, from);
    next();
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
