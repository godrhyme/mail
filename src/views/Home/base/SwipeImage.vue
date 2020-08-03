<template>
  <div class='swiper-wrapper'>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    name: 'SwipeImage',
    data() {
      return {
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ]
      }
    }
    // created() {
    //   this.$api.homeData.banner().then(({ data: { banner } }) => {
    //     this.images = banner
    //   })
    // }
  }
</script>

<style>
  .swiper-wrapper img {
    width: 100%
  }
</style>
