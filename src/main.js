import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vant from 'vant'

import 'vant/lib/index.css'

Vue.use(Vant)

Vue.config.productionTip = false
// 将axios封装到Vue实例的原型上，每个组件能直接访问
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
