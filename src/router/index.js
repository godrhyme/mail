import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import Category from '../views/Category/index.vue'
import Cart from '../views/Cart/index.vue'
import order from '../views/Order/index.vue'
import ordermanagement from '../views/Ordermanagement/index.vue'
import Me from '../views/Me/Me.vue'
import Login from '@/views/Login/Login'
import AddressEdit from '@/views/Address/AddressEdit'
import AddressAdd from '@/views/Address/AddressAdd'
import Address from '@/views/Address/Address'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/Home'
},
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Category',
    name: 'Category',
    component: Category
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/Me',
    name: 'Me',
    component: Me,
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.getItem('isLogin')
      isLogin ? next() : next('/Login')
    }
  },
  {
    path: '/product',
    name: 'product',
    component: product
  },
  {
    path: '/order',
    name: 'order',
    component: order
  },
  {
    path: '/ordermanagement',
    name: 'ordermanagement',
    component: ordermanagement
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/AddressEdit',
    name: 'AddressEdit',
    component: AddressEdit
  },
  {
    path: '/AddressAdd',
    name: 'AddressAdd',
    component: AddressAdd
  },
  {
    path: '/Address',
    name: 'Address',
    component: Address
  }
]

const router = new VueRouter({
  routes
})

export default router
