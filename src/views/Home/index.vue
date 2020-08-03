<template>
  <div class="home">
    <Topbar></Topbar>
    这是首页
  </div>
</template>

<script>
import Topbar from '@/views/Home/base/Topbar'

export default {
  components: {
    Topbar
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
