import Vue from 'vue'
import App from './App.vue'
import router from './router'



import 'jquery'
import 'bootstrap'
import waterfall from 'vue-waterfall2'
import './assets/css/main.css'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.use(waterfall);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
});


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
Vue.filter('formatDate', function(str) {
      if (!str) return ''
      var date = new Date(str)
      var time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
      if (time < 0) {
        return ''
      } else if ((time / 1000 < 30)) {
        return '刚刚'
      } else if (time / 1000 < 60) {
        return parseInt((time / 1000)) + '秒前'
      } else if ((time / 60000) < 60) {
        return parseInt((time / 60000)) + '分钟前'
      } else if ((time / 3600000) < 24) {
        return parseInt(time / 3600000) + '小时前'
      } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000) + '天前'
      } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000) + '月前'
      } else {
        return parseInt(time / 31536000000) + '年前'
      }
    }
)
