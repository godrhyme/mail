<template>
  <div class="home">
    <Topbar></Topbar>
    //顶部栏
    <swipe-image></swipe-image>
    //轮播图广告
    <GridIcon></GridIcon>
    //滑动图标
    这是首页
  </div>
</template>

<script>
import Topbar from '@/views/Home/base/Topbar'
import SwipeImage from '@/views/Home/base/SwipeImage'
import GridIcon from '@/views/Home/base/GridIcon'

export default {
  components: {
    Topbar,
    SwipeImage,
    GridIcon
  }
  // created () {
  //   this.$api.homeData.banner().then(({
  //     results
  //   }) => {
  //     console.log(results)
  //   })
  // }
}
</script>

<style>
</style>
