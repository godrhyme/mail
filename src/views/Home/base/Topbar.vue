<template>
  <div class="Topbar">
<!--    <van-row type="flex" justify="space-between" align="center">-->
<!--      <van-col span="2" class="text-right">-->
<!--        <van-icon class-prefix="icon-font-20 iconfont icon-leimupinleifenleileibie2"></van-icon>-->
<!--      </van-col>-->
<!--      <van-col span="20">-->
<!--        <van-search shape="round" placeholder="请输入要搜索的内容"/>-->
<!--      </van-col>-->
<!--      <van-col span="2">-->
<!--        <van-icon name="login" class-prefix="icon-font-20 iconfont icon-bell "></van-icon>-->
<!--      </van-col>-->
<!--    </van-row>-->
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
  }
}
</script>

<style scoped>

</style>
