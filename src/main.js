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
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
<<<<<<< HEAD
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
  Stepper
=======
  CountDown,
  GridItem,
  Image,
  Row,
  Col,
  PullRefresh,
  Toast,
  Sticky,
  Form,
  Field,
  Button,
  Divider
>>>>>>> 2753de5084c7ad35f435eba66e360bc82d40dfc6
} from 'vant'

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Search)
  .use(Icon)
  .use(Swipe).use(SwipeItem).use(Lazyload)
  .use(Grid).use(GridItem)
<<<<<<< HEAD
  .use(Popup).use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon).use(Sku).use(NavBar).use(Tab).use(Tabs).use(
    ShareSheet).use(Tag).use(Sticky).use(Cell).use(CellGroup).use(Skeleton).use(Button).use(TreeSelect).use(SubmitBar).use(
    PasswordInput).use(NumberKeyboard).use(Toast).use(List).use(ElementUI).use(Empty).use(Divider).use(Rate).use(
    Checkbox).use(CheckboxGroup).use(Stepper)
=======
  .use(CountDown)
  .use(Image)
  .use(Row).use(Col)
  .use(PullRefresh).use(Toast)
  .use(Sticky)
  .use(Form).use(Field).use(Button)
  .use(Divider)
>>>>>>> 2753de5084c7ad35f435eba66e360bc82d40dfc6
Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
