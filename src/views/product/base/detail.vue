<template>
  <div>
    <van-cell-group id="part2">
      <van-cell title="详情" icon="orders-o" />
    </van-cell-group>
<!--    <div v-for="(image, index) in detail_img" :key="index">
      <img width="100%" v-lazy="image" />
    </div> -->
    <img width="100%" src="../../../assets/IMG_2980.jpg">
    <img width="100%" src="../../../assets/IMG_2981.jpg">
    <img width="100%" src="../../../assets/IMG_2982.jpg">
    <img width="100%" src="../../../assets/IMG_2983.jpg">
  </div>
</template>

<script>
  export default {
    props: {
      detail_img: Array
    }
  }
</script>

<style>
</style>
