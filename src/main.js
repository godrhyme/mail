import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/index'
import {
  Tabbar,
  TabbarItem,
  Search,
  Icon,
  Row,
  Col,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem
} from 'vant'

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Search)
  .use(Icon)
  .use(Row)
  .use(Col)
  .use(Swipe).use(SwipeItem).use(Lazyload)
  .use(Grid).use(GridItem)
Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
