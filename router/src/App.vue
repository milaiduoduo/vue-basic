<template>
  <div id="app">
    <h1>i am App Root!!</h1>
    <router-link to='/about'>关于我们</router-link>
    <router-link to='/business'>业务</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
