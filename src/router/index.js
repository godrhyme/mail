import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import Category from '../views/Category/index.vue'
import Cart from '../views/Cart/index.vue'
import Me from '../views/Me/index.vue'

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
    component: Me
  }
]

const router = new VueRouter({
  routes
})

export default router
