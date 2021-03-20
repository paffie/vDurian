<template>
<div id="usrSidebar">
  <!-- Header -->
  <div id="header">

    <div class="top">

      <!-- Logo -->
<!--      <div id="logo">-->
<!--        <span class="image avatar48"><img src="images/avatar.jpg" alt="" /></span>-->
<!--        <h1 id="title">Jane Doe</h1>-->
<!--        <p>Hyperspace Engineer</p>-->
<!--      </div>-->

      <!-- Nav -->
      <div id="nav-1">
        <ul>
          <li><a href="#top" id="top-link"><span class="icon solid fa-home">用户统计</span></a></li>
          <li><a href="#portfolio" id="portfolio-link"><span class="icon solid fa-th">用户分布</span></a></li>
          <li><a href="#about" id="about-link"><span class="icon solid fa-user">用户走势</span></a></li>
          <li><a href="#contact" id="contact-link"><span class="icon solid fa-envelope">用户</span></a></li>
        </ul>
      </div>

    </div>

    <div class="bottom">

      <!-- Social Icons -->
      <ul class="icons">
        <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
        <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
        <li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
        <li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
        <li><a href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
      </ul>

    </div>

  </div>
</div>
</template>

<script>
export default {
name: "usrSidebar"
}
</script>

<style scoped>
/* Header */

#header {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-justify-content: space-between;
  -webkit-justify-content: space-between;
  -ms-justify-content: space-between;
  justify-content: space-between;
  background: #000000;
  box-shadow: inset -0.25em 0 0.25em 0 rgba(0, 0, 0, 0.1);
  color: #fff;
  height: 100%;
  left: 0;
  overflow-y: auto;
  position: fixed;
  text-align: right;
  top: 0;
  width: 300px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 19pt;
  font-weight: 300;
  line-height: 1.75em;
}

#header .top {
  -moz-flex-grow: 1;
  -webkit-flex-grow: 1;
  -ms-flex-grow: 1;
  flex-grow: 1;
}

#header .bottom {
  -moz-flex-shrink: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-shrink: 0;
  flex-shrink: 0;
  padding: 1.5em 0 0.75em 0;
}

#header .bottom > :last-child {
  margin-bottom: 0;
}

#header .icons {
  font-size: 0.8em;
  text-align: center;
}

#header .icons a {
  color: #41484c;
  -moz-transition: color 0.35s ease-in-out;
  -webkit-transition: color 0.35s ease-in-out;
  -ms-transition: color 0.35s ease-in-out;
  transition: color 0.35s ease-in-out;
}

#header .icons a:hover {
  color: #fff;
}

#nav-1 ul {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}

#nav-1 ul li {
  padding-left: 0;
}

#nav-1 ul li a {
  display: block;
  padding: 0.5em 1.5em 0.5em 1.5em;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  outline: 0;
  border: 0;
  -moz-transition: none;
  -webkit-transition: none;
  -ms-transition: none;
  transition: none;
}

#nav-1 ul li a span {
  position: relative;
  display: block;
  font-size: 0.8em;
}

#nav-1 ul li a span:before {
  position: absolute;
  left: 0;
  color: #41484c;
  text-align: center;
  width: 1.25em;
  line-height: 1.75em;
}

#nav-1 ul li a.active {
  background: rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 0 0.25em 0 rgba(0, 0, 0, 0.125);
  color: #fff;
}

#nav-1 ul li a.active span:before {
  color: #e27689;
}

ul.icons {
  cursor: default;
  list-style: none;
  padding-left: 0;
}

ul.icons li {
  display: inline-block;
  padding-left: 0;
}

ul.icons a {
  display: inline-block;
  width: 2em;
  height: 2em;
  line-height: 2em;
  text-align: center;
  border: 0;
}


</style>
