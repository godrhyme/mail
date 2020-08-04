<template>
  <div class="home">
    <!--    顶部栏-->
    <van-sticky>
      <Topbar></Topbar>
    </van-sticky>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!--    轮播图广告-->
      <swipe-image></swipe-image>
      <!--    滑动图标-->
      <GridIcon></GridIcon>
      <!--    秒杀-->
      <Flashsale></Flashsale>
      <!--    广告-->
      <Adver></Adver>
      <!--    推荐-->
      <Recommend></Recommend>
    </van-pull-refresh>
    <!--底部栏-->
    <menubar></menubar>
  </div>
</template>

<script>
import menubar from '../../components/MenuBar.vue'
import Topbar from '@/views/Home/base/Topbar'
import SwipeImage from '@/views/Home/base/SwipeImage'
import GridIcon from '@/views/Home/base/GridIcon'
import Flashsale from '@/views/Home/base/Flashsale'
import Adver from '@/views/Home/base/Adver'
import Recommend from '@/views/Home/base/Recommend'
import { Toast } from 'vant'

export default {
  components: {
    menubar,
    Topbar,
    SwipeImage,
    GridIcon,
    Flashsale,
    Adver,
    Recommend
  },
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        Toast('刷新成功')
        this.isLoading = false
      }, 1000)
    }
  }
}

</script>

<style>
</style>
