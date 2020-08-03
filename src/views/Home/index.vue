<template>
  <div class="home">
    <Topbar></Topbar>
    这是首页
    <menubar></menubar>
  </div>
</template>

<script>
<<<<<<< HEAD
  import menubar from '../../components/MenuBar.vue'
  export default {
    components: {
      menubar
    }
  }
=======
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
>>>>>>> 1d485206f7350187404568a3a4d0ff28fe3c6e39
</script>

<style>
</style>
