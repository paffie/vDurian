<template>
  <div id="app">
    <div id="page-wrapper">
      <router-view name="navi"></router-view>
    <router-view name='main'></router-view>
      <router-view name='foot'></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
