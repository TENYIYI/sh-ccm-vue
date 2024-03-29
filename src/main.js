import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import '@/styles/index.scss' // global css
import echarts from 'echarts'
import App from './App'
import store from './store'
import router from './router'

import '@/permission' // permission control
// import { mockXHR } from '../mock'
// if (process.env.NODE_ENV === 'production') {
//   mockXHR()
// }
Vue.prototype.$echarts = echarts
Vue.prototype.APIURL = process.env.VUE_APP_API
// set ElementUI lang to EN
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
//new Vue 启动
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
