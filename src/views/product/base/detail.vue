<template>
  <div>
    <van-cell-group id="part2">
      <van-cell title="详情" icon="orders-o" />
    </van-cell-group>
    <div v-for="(image, index) in detail_img" :key="index">
      <img width="100%" v-lazy="image" />
    </div>
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
