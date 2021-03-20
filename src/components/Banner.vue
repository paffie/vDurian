<template>
  <section class="Banner" id="banner">
    <div class="content">
    <a href="#" class="image featured"><img src="../assets/images/banner.png" alt=""/></a>
    <h2>欢迎来到流涟！</h2>
    <p>这是一个免费的绘画艺术科普网站，你可以从主页的文章中了解绘画，</p>
    <p>查看推荐板块中的时间流了解绘画历史发展，也可以从发现板块通过关键词搜索不同时期的画作，</p>
    <p>如果你注册为网站用户，可以成为建设网站内容的一员！</p>
    <router-link :to="{path:'/join_us'}" class="button scrolly">查看介绍</router-link>
    </div>
  </section>
</template>

<script>
export default {
name: "Banner"
}
</script>

<style scoped>

</style>
