<template>
<div class="Answer">
  <div class="container masonry">
    <waterfall :col='col' :width="itemWidth" :gutterWidth="gutterWidth" :data="ImgList">
      <template>
        <div v-for="(item,index) in ImgList" :key="index">
            <div class="timeline-box">
              <div class="box-img image ">
                <img :src="item.img" class="img-responsive center-block">
              </div>
              <div class="box-icon">
                <button type="button" class="btn btn-default btn-xs tl-btn" title="点赞"><span
                    class="glyphicon glyphicon-thumbs-up">点赞</span></button>
                <button type="button" class="btn btn-default btn-xs tl-btn" title="收藏"><span
                    class="glyphicon glyphicon-star">收藏</span></button>
              </div>
              <div class="box-intro" >
                <p >{{item.des}}</p>
              </div>
            </div>
        </div>
      </template>
    </waterfall>
</div>
</div>

</template>

<script>

export default {
name: "Answer",
  props: {
    ImgList: {
      type: Array,
      default:()=>{
        return [
          {img:require('../assets/images/timeline/jp/1.jpg'),'des':'BC5000年,绳文时代'},
          {img:require('../assets/images/timeline/jp/2.jpg'),'des':'BC900年,弥生时代'},
          {img:require('../assets/images/timeline/jp/3.jpg'),'des':'AD250年,古坟时代'},
          {img:require('../assets/images/timeline/jp/4.jpg'),'des':'AD538年,飞鸟时代'},
          {img:require('../assets/images/timeline/jp/5.jpg'),'des':'AD710年,奈良、平安时代'},
          {img:require('../assets/images/timeline/jp/6.jpg'),'des':'AD1185年,镰仓时代'},
          {img:require('../assets/images/timeline/jp/7.jpg'),'des':'AD1336年,室町时代'},
          {img:require('../assets/images/timeline/jp/8.jpg'),'des':'AD1568年,安土桃山时代'},
          {img:require('../assets/images/timeline/jp/9.jpg'),'des':'AD1603年,江户时代'},
          {img:require('../assets/images/timeline/jp/10.jpg'),'des':'AD1868年,日本近现代'},
          {img:require('../assets/images/timeline/cn/1.jpg'),'des':'BC5000年,中国史前时期'},
          {img:require('../assets/images/timeline/cn/2.jpg'),'des':'BC2000年,先秦'},
          {img:require('../assets/images/timeline/cn/3.jpg'),'des':'BC221年,秦汉'},
          {img:require('../assets/images/timeline/cn/4.jpg'),'des':'AD220年,魏晋南北朝'},
          {img:require('../assets/images/timeline/cn/5.jpg'),'des':'AD581年,隋唐'},
          {img:require('../assets/images/timeline/cn/6.jpg'),'des':'AD907年,五代十国'},
          {img:require('../assets/images/timeline/cn/7.jpg'),'des':'AD960年,北宋'},
          {img:require('../assets/images/timeline/cn/8.jpg'),'des':'AD1127年,南宋'},
          {img:require('../assets/images/timeline/cn/9.jpg'),'des':'AD1200年,辽金西夏'},
          {img:require('../assets/images/timeline/cn/10.jpg'),'des':'AD1271年,元代'},
          {img:require('../assets/images/timeline/cn/11.jpg'),'des':'AD1368年,明代'},
          {img:require('../assets/images/timeline/cn/12.jpg'),'des':'AD1644年,清代'},
          {img:require('../assets/images/timeline/cn/13.jpg'),'des':'AD1912年,民国时期'},
          {img:require('../assets/images/timeline/cn/14.jpg'),'des':'AD1949年,中国当代'},
          {img:require('../assets/images/timeline/eu/1.jpg'),'des':'BC5000年,史前时期'},
          {img:require('../assets/images/timeline/eu/2.jpg'),'des':'BC3500年,古代近东艺术'},
          {img:require('../assets/images/timeline/eu/3.jpg'),'des':'BC3000年,古埃及艺术'},
          {img:require('../assets/images/timeline/eu/4.jpg'),'des':'BC2800年,爱琴文明'},
          {img:require('../assets/images/timeline/eu/5.jpg'),'des':'BC2300年,古希腊艺术'},
          {img:require('../assets/images/timeline/eu/6.jpg'),'des':'BC700年,古罗马艺术'},
          {img:require('../assets/images/timeline/eu/7.jpg'),'des':'BC600年,伊特鲁里亚艺术'},
          {img:require('../assets/images/timeline/eu/8.jpg'),'des':'AD200年,早期基督教与拜占庭艺术'},
          {img:require('../assets/images/timeline/eu/9.jpg'),'des':'AD400年,早期中世纪时期'},
          {img:require('../assets/images/timeline/eu/10.jpg'),'des':'AD576年,中世纪时期'},
          {img:require('../assets/images/timeline/eu/11.jpg'),'des':'AD632年,伊斯兰艺术'},
          {img:require('../assets/images/timeline/eu/12.jpg'),'des':'AD1300年,文艺复兴时期'},
          {img:require('../assets/images/timeline/eu/13.jpg'),'des':'AD1600年,后文艺复兴时期'},
          {img:require('../assets/images/timeline/eu/14.jpg'),'des':'AD1850年,现代艺术'},
          {img:require('../assets/images/timeline/eu/15.jpg'),'des':'AD1948年,当代艺术'},
          {img:require('../assets/images/timeline/eu/16.jpg'),'des':'AD1960年,后现代艺术'},

        ];
      }
    }
  },
  data(){
  return {
    col:3,
  }
  },
  computed:{
    itemWidth() {
      return (150 * 0.5 * (document.documentElement.clientWidth / 375))
    },
    gutterWidth() {
      return (20 * 0.5 * (document.documentElement.clientWidth / 375))
    },
  },
  methods:{
  }
}
</script>

<style scoped>
.box-intro p{
  font-family: 'Source Sans Pro', sans-serif;
  color:#000000;
  text-shadow: 0 0 0.5px rgba(255, 255, 255, 0.25);
  text-align: center;
}
</style>
