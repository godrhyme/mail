<template>
  <div>
    <van-row>
      <van-col span="8" offset="1">
        <p>共<span class="mark">5</span>件商品</p>
      </van-col>
      <van-col span="4" offset="11">
        <p class="box5">管理</p>
      </van-col>
    </van-row>
    <single></single>
  </div>
</template>

<script>
  import single from "./single.vue"
  export default {
    components: {
      single
    }
  }
</script>

<style>
  .box5 {
    color: blue;
  }
</style>
