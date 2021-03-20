<template>
<div id="usrMain">
  <!-- Main -->
  <div id="main">
    <usr-sidebar></usr-sidebar>
<!--    <Head></Head>-->
    <section id="top" class="one"><roll-chart></roll-chart></section>
    <section id="portfolio" class="two"><pie-chart></pie-chart></section>
    <section id="about" class="three"><usr-chart></usr-chart></section>
    <section id="contact" class="four">
<!--      <div class="container">-->
        <Foot></Foot>
<!--      </div>-->
    </section>


  </div>

  <!-- Footer -->


</div>
</template>

<script>
import UsrChart from "@/components/user/lineChart";
import UsrSidebar from "@/components/user/usrSideBar";
// import Head from "@/components/Head";
import Foot from "@/components/Foot";
import PieChart from "@/components/user/pieChart";
import RollChart from "@/components/user/rollChart";
export default {
name: "usrMain",
  components: {RollChart, PieChart, Foot,UsrSidebar, UsrChart}
}
</script>

<style scoped>

#main {
  margin-left: 300px;
}

#main > section {
  margin: 0;
  overflow: hidden;
  padding: 4em 0;
  box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.05), inset 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.025);
  text-align: center;
  /*background-image: url("./src/assets/images/overlay.jpg");*/
}

#main > section.dark {
  color: #ddd;
  color: rgba(255, 255, 255, 0.75);
}

#main > section.dark h2, #main > section.dark h3, #main > section.dark h4, #main > section.dark h5, #main > section.dark h6 {
  color: inherit;
}

#main > section.dark strong {
  color: #fff;
  border-color: inherit;
}

#main > section.dark a {
  color: #fff;
  border-color: inherit;
}

#main > section.dark a:hover {
  border-bottom-color: rgba(255, 255, 255, 0);
}

#main > section.cover {
  padding: 10em 0;
  background-size: cover;
  background-position: center center;
}

#main > section.one {
  background-color: #f5fafa;
  /*background-image: url("../assets/images/banner.jpg");*/
}

#main > section.two {
  background-color: #ecf1f1;

}

#main > section.three {
  background-color: #f5fafa;
}

#main > section.four {
  background-color: #f2f5f3;
}

</style>
