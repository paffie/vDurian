<template>
  <div id="Carousel">
  <div class="container">
    <div class="carousel-wrap">

  <transition-group tag="ul" class='slide-ul' name="list">
    <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
      <a :href="list.clickUrl" >
        <img :src="list.image" :alt="list.desc">
      </a>
    </li>
  </transition-group>
  <div class="carousel-items">
    <span v-for="(index) in slideList.length" :key="index" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
  </div>
</div>
  </div>

  </div>

</template>

<script>
export default {
name: "Carousel",
  data() {
  return{
    slideList: [
      {
        "clickUrl": "#",
        "desc": "国画",
        image:require('../assets/images/main/guohua.jpg'),
      },
      {
        "clickUrl": "#",
        "desc": "油画",
        image:require('../assets/images/main/youhua.jpg'),
      },
      {
        "clickUrl": "#",
        "desc": "素描",
        image:require('../assets/images/main/sumiao.jpg'),
      },
      {
        "clickUrl": "#",
        "desc": "水彩",
        image:require('../assets/images/main/shuicai.jpg'),
      },
    ],
    currentIndex: 0,
    timer: '',
  }
  },
  methods: {
    go() {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 4000)
    },
    stop() {
      clearInterval(this.timer)
      this.timer = null
    },
    change(index) {
      this.currentIndex = index
    },
    autoPlay() {
      this.currentIndex++
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0
      }
    }
  },
  created() {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 4000)
    })
  }
}
</script>

<style scoped>


.carousel-wrap {
  margin-top:3em;
  height: 500px;
  width: 80%;
  overflow: hidden;
  background-color: #fff;

}

.slide-ul {
  position: relative;
  width: 100%;
  height: 100%;

}

.slide-ul li {
  position: absolute;
  width: 100%;
  height: 100%;
  list-style-type:none;
  margin:0 auto;
  text-align:center;
}

img {
  width: 100%;
  height: 100%;
}

.carousel-items {
  position: absolute;
  z-index: 10;
  /*top: 380px;*/
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
}

.carousel-items span {
  display: inline-block;
  height: 6px;
  width: 30px;
  margin: 0 3px;
  background-color: #b2b2b2;
  cursor: pointer;
}
.carousel-items .active {
  background-color: orange;
}

.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.list-enter {
  transform: translateX(100%)
}

.list-leave {
  transform: translateX(0)
}


</style>
