<template>
  <div class="home">
    <Topbar></Topbar>
    <!--    顶部栏-->
    <swipe-image></swipe-image>
    <!--    轮播图广告-->
    <GridIcon></GridIcon>
    <!--    滑动图标-->
    <menubar></menubar>
  </div>
</template>

<script>
  import menubar from '../../components/MenuBar.vue'
  import Topbar from '@/views/Home/base/Topbar'
  import SwipeImage from '@/views/Home/base/SwipeImage'
  import GridIcon from '@/views/Home/base/GridIcon'

  export default {
    components: {
      menubar,
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
