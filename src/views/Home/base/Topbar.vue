<template>
  <div class="Topbar">
    <van-row type="flex" justify="space-between" align="center">
      <van-col span="2" align="center">
        <van-icon name="coupon-o" size="25"/>
      </van-col>
      <van-col span="20">
        <van-search shape="round" placeholder="请输入要搜索的内容"/>
      </van-col>
      <van-col span="2" align="center">
        <van-icon @click="Login" name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size="25"/>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Icon, Search, Row, Col } from 'vant'

export default {
  components: {
    [Search.name]: Search,
    [Icon.name]: Icon,
    [Row.name]: Row,
    [Col.name]: Col
  },
  methods: {
    Login() {
      this.$router.push("/Login")
    }
  }
}
</script>

<style scoped>

</style>
