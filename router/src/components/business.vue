<template>
    <div>
        <h2>i am business!!!!!</h2>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  beforeRouteEnter(to, from, next) {
    console.log("2.2 組件級別，Business里！！");
    console.log("to,from:", to, from);
    next();
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
