<template>
<div class="Nav" id="nav">
  <ul>
    <li><router-link :to="{name:'u_root'}">主页</router-link></li>
    <li><router-link :to="{name:'u_search'}">发现</router-link></li>
    <li><router-link :to="{name:'u_recommend'}">推荐</router-link></li>
    <li><router-link :to="{name:'u_join'}">加入我们</router-link></li>
    <li><router-link :to="{name:'u_center'}">用户中心</router-link></li>
    <li><router-link :to="{name:'root'}" @click="logout">退出登录</router-link></li>
  </ul>
</div>
</template>

<script>
import {delCookie} from "/src/assets/js/cookie"
export default {
name: "usrNav",
  methods:{
  logout(){
    delCookie();
  }
  }
}
</script>

<style scoped>
#usrNav li.router-link-active a {
  background: #b1ddab;
  color: #fff;
}
</style>
