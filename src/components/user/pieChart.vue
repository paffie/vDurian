<template>
  <div class="pieChart">
    <div id="areaBox_1" style="width: 100%;height: 100vh"></div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
name: "pieChart",
  data(){

    return {

      areaBox: {

          title : {
            text: '站点用户访问来源',
            // subtext: '纯属虚构',
            x:'center'
          },

          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },

          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','二维码链接','搜索引擎','空间转发']
          },

          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'二维码链接'},
                {value:135, name:'搜索引擎'},
                {value:1548, name:'空间转发'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
      }
    },

  methods:{
    getEcharts(){

      this.chartLineAreaBox = echarts.init(document.getElementById('areaBox_1'))
      this.chartLineAreaBox.setOption(this.areaBox)

    },

  },
  mounted() {

    this.getEcharts();

}
}

</script>

<style scoped>

</style>
