<template>
  <Footer class="Foot" id="footer"><div class="container">
    <div class="row gtr-200">
      <div class="col-12">
        <!-- About -->
        <section>
          <h2 class="major"><span>我们是谁?</span></h2>
          <p>
            我们是<strong>流涟</strong>, 使用<a href="http://html5up.net">HTML5 UP</a>网站中的免费模板制作而成的网站，使用
            <a href="http://html5up.net/license/">license</a>发行。
          </p>
        </section>

      </div>
      <div class="col-12">
        <!-- Contact-->
        <section>
          <h2 class="major"><span>联系我们</span></h2>
          <ul class="contact">
            <li><router-link class="icon brands fa-mailchimp" :to="{name:'join'}"><span class="label">mail</span></router-link></li>
          </ul>
        </section>

      </div>
    </div>

    <!-- Copyright -->
    <div id="copyright">
      <ul class="menu">
        <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </div>

  </div></Footer>
</template>

<script>
export default {
name: "Foot"
}
</script>

<style scoped>

</style>
