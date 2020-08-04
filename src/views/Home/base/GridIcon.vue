<template>
  <div>
    <van-swipe :loop="false">
      <van-swipe-item>
      <van-grid :border="false" :column-num="4">
        <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字"/>
      </van-grid>
      </van-swipe-item>
      <van-swipe-item>
        <van-grid :border="false" :column-num="4">
          <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字"/>
        </van-grid>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'GridIcon'
}
</script>

<style scoped>

</style>
