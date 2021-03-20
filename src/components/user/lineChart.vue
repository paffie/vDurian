<template>
  <div class="myChart">
    <div id="areaBox" style="width: 100%;height: 100vh"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  name: "usrChart",
  data() {

    return {
      // 指定图表的配置项和数据
      areaBox: {

        tooltip: {              //设置tip提示

          trigger: 'axis'

        },
        // title : {
        //   text: '用户走势',
        //   // subtext: '纯属虚构',
        //   x:'center'
        // },

        legend: {               //设置区分（哪条线属于什么）

          data: ['注册人数','月活量']

        },

        color: ['red','#000000'],       //设置区分（每条线是什么颜色，和 legend 一一对应）

        xAxis: {                //设置x轴

          type: 'category',

          boundaryGap: false,     //坐标轴两边不留白

          data: ['9月', '10月', '11月', '1月', '2月', '3月',],

          name: '月份',           //X轴 name

          nameTextStyle: {        //坐标轴名称的文字样式

            color: '#000000',

            fontSize: 16,

            padding: [0, 0, 0, 20]

          },

          axisLine: {             //坐标轴轴线相关设置。

            lineStyle: {

              // color: '#FA6F53',

            }

          }

        },

        yAxis: {

          name: '数量',

          nameTextStyle: {

            color: '#000000',

            fontSize: 16,

            padding: [0, 0, 10, 0]

          },

          axisLine: {

            lineStyle: {

              // color: '#FA6F53',

            }

          },

          type: 'value'

        },

        series: [

          {

            name: '注册人数',

            data: [220, 232, 201, 234, 290, 230, 220],

            type: 'line',               // 类型为折线图

            lineStyle: {                // 线条样式 => 必须使用normal属性

              normal: {

                color: 'black',

              }

            },

          },
          {

            name: '月活量',

            data: [200, 211, 180, 223, 269, 222, 208],

            type: 'line',               // 类型为折线图

            lineStyle: {                // 线条样式 => 必须使用normal属性

              normal: {

                color:'#2E5E86',

              }

            },

          },

        ]

      },
    }
  },
  methods:{
    getEcharts(){

      this.chartLineAreaBox = echarts.init(document.getElementById('areaBox'))
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
