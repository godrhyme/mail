import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import api from './api/index.js'
import {
  Tabbar,
  TabbarItem
} from 'vant'
=======
import api from './api/index'
import { Tabbar, TabbarItem, Search, Icon, Row, Col } from 'vant'
>>>>>>> 1d485206f7350187404568a3a4d0ff28fe3c6e39

Vue.use(Tabbar).use(TabbarItem).use(Search).use(Icon).use(Row).use(Col)
Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
