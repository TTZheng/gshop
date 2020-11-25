/* 入口JS */
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import './assets/icon/iconfont.css'
import 'swiper/dist/css/swiper.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
