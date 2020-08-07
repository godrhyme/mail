<template>
  <div id="part0" class='swiper-wrapper'>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in swipe_img" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    props: {
      swipe_img: {}
    }
  }
</script>

<style>
  .swiper-wrapper img {
    width: 100%
  }
</style>
