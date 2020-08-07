<template>
  <div>
    <van-skeleton title avatar :row="3" :loading="loading">
      <div>
        <van-row>
          <van-col offset="1" span="2">
            <img width="30px" height="30px" src="https://img.yzcdn.cn/vant/logo.png">
          </van-col>
          <van-col span="20">
            <font>墙角挖鼻屎</font>
            <p>i了i了，做工精良，外表精致，使用非常流畅，质量也很好，推荐给大家，可以放心购买！</p><br>
            <img width="100px" src="https://img.yzcdn.cn/vant/apple-1.jpg">
            <img width="100px" src="https://img.yzcdn.cn/vant/apple-2.jpg">
          </van-col>
        </van-row>
      </div>
    </van-skeleton>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: true
      }
    },
    mounted() {
      this.loading = false
    }
  }
</script>

<style>
</style>
