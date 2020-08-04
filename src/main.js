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
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  CountDown,
  GridItem,
  Image,
  Row,
  Col,
  PullRefresh,
  Toast,
  Sticky
} from 'vant'

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Search)
  .use(Icon)
  .use(Swipe).use(SwipeItem).use(Lazyload)
  .use(Grid).use(GridItem)
  .use(CountDown)
  .use(Image)
  .use(Row).use(Col)
  .use(PullRefresh).use(Toast)
  .use(Sticky)
Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
