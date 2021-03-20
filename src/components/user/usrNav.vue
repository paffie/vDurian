<template>
<div class="Nav" id="nav">
  <ul>
    <li><router-link :to="{name:'root'}">主页</router-link></li>
    <li><router-link :to="{name:'search'}">发现</router-link></li>
    <li><router-link :to="{name:'recommend'}">推荐</router-link></li>
    <li><router-link :to="{name:'join'}">加入我们</router-link></li>
    <li><router-link :to="{name:'root'}">退出登录</router-link></li>
  </ul>
</div>
</template>

<script>
export default {
name: "usrNav",
  methods:{
  }
}
</script>

<style scoped>
#usrNav li.router-link-active a {
  background: #b1ddab;
  color: #fff;
}
</style>
