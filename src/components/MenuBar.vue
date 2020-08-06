<template>
  <van-tabbar v-model="active" router>
    <van-tabbar-item @click="goHome" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item @click="goCategory" icon="apps-o" dot>分类</van-tabbar-item>
    <van-tabbar-item @click="goCart" icon="shopping-cart-o" badge="5">购物车</van-tabbar-item>
    <van-tabbar-item @click="goMe" icon="user-o" badge="20">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    goMe () {
      this.$router.push('/Me')
    },
    goHome () {
      this.$router.push('/home')
    },
    goCategory () {
      this.$router.push('/Category')
    },
    goCart () {
      this.$router.push('/Cart')
    }
  }
}
</script>

<style>
</style>
