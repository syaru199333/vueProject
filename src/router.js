import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import Cart from './views/Home/Cart.vue'
import Coupon from './views/Coupon.vue'
import List from './views/Home/List.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home/list' },
    {
      path: '/home',
      component: Home,
      children: [
        { path: 'list', component: List },
        { path: 'cart', component: Cart }
      ]
    },
    { path: '/coupon', component: Coupon }
  ]
})
