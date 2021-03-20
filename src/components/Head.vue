<template>
<Header class="head" id="header">
  <div class="logo container">
    <div>
      <h1><router-link :to="{name:'root'}" id="logo">流涟</router-link></h1>
      <p>一个绘画艺术科普网站</p>
    </div>
  </div>
</Header>
</template>

<script>
export default {
name: "Head"
}
</script>

<style scoped>

</style>
