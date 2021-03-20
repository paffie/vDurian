<template>
  <div class="rollChart">
    <div id="areaBox_2" style="width: 100%;height: 100vh"></div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
name: "rollChart",
  data() {
  return{
    areaBox: {
      color: ['#2860fc'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {   // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'    // 默认为直线，可选为：'line' | 'shadow'|'none'
        }
      },
      title: {
        text: '用户总数',
        top: '15',
        x:'center',
        // left: '3',
        // textStyle:{
        //   fontSize: 20,   //字体大小
        //   color: '#666666',   //字体颜色
        //   fontWeight: '500'
        // },
      },
      grid: {
        left: '-27',
        right: '4',
        bottom: '0%',
        containLabel: true
      },
      xAxis: [ {
        type: 'category',
        data: ['一日以内', '一周以内', '一月以内', '三月以内', '九月以内',],
        axisLine: {   // 改变x轴颜色
          lineStyle: {
            color: '#c1c1c1',
            width: '1',
          }
        },
        axisLabel: {    // 改变x轴字体颜色和大小
          textStyle: {
            color: "#666666",
            fontSize: 12,
          },
        },
      } ],
      yAxis: [ {
        type: 'value',
        axisTick: 'none',    // 右边轴样式的显示
        axisLine: 'none',    // 右边轴样式的显示
        // 修改网格的颜色
        splitLine: {
          show: true,
          lineStyle: {
            type: 'solid',
            color: '#f5f5f5'
          }
        },
      } ],
      series: [ {
        name: '',
        type: 'bar',
        barWidth: '50%',
        data: [1, 52, 80, 334, 390,]
      } ]
    },
  }
  },
  methods:{
    getEcharts(){

      this.chartLineAreaBox = echarts.init(document.getElementById('areaBox_2'))
      this.chartLineAreaBox.setOption(this.areaBox)

    },

  },
  mounted() {

    this.getEcharts();
  }
};
</script>

<style scoped>

</style>
