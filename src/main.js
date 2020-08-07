import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
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
  GridItem,
  Popup,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  NavBar,
  Sku,
  Tab,
  Tabs,
  ShareSheet,
  Tag,
  Sticky,
  Cell,
  CellGroup,
  Skeleton,
  Button,
  TreeSelect,
  SubmitBar,
  PasswordInput,
  NumberKeyboard,
  Toast,
  List,
  Empty,
  Divider,
  Rate,
  Checkbox,
  CheckboxGroup,
  Stepper,
} from 'vant'

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Search)
  .use(Icon)
  .use(Row)
  .use(Col)
  .use(Swipe).use(SwipeItem).use(Lazyload)
  .use(Grid).use(GridItem)
  .use(Popup).use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon).use(Sku).use(NavBar).use(Tab).use(Tabs).use(
    ShareSheet).use(Tag).use(Sticky).use(Cell).use(CellGroup).use(Skeleton).use(Button).use(TreeSelect).use(SubmitBar).use(
    PasswordInput).use(NumberKeyboard).use(Toast).use(List).use(ElementUI).use(Empty).use(Divider).use(Rate).use(
    Checkbox).use(CheckboxGroup).use(Stepper)
Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
