<template>
  <div>
  <nav class="Nav" id="nav">
    <ul>
      <li><router-link :to="{name:'root'}">主页</router-link></li>
      <li><router-link :to="{name:'search'}">发现</router-link></li>
      <li><router-link :to="{name:'recommend'}">推荐</router-link></li>
      <li><router-link :to="{name:'join'}">加入我们</router-link></li>
      <li><router-link :to="{name:'login'}">登录|注册</router-link></li>
    </ul>
  </nav>
    <Head></Head>
  </div>
</template>

<script>
import Head from "@/components/Head";
export default {
name: "Nav",
  components: {
  Head,
  }
}
</script>

<style scoped>

#nav li.router-link-active a {
  background: #b1ddab;
  color: #fff;
}
</style>
