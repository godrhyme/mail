<template>
  <div>
    <van-row type="flex" justify="space-between">
      <van-col class="title">
        <van-icon class-prefix="iconfont icon-miaosha" />
        <span>限时秒杀</span>
        <van-count-down :time="time">
          <template v-slot="timeData">
            <span class="time-item">{{ timeData.hours }}</span>:
            <span class="time-item">{{ timeData.minutes }}</span>:
            <span class="time-item">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </van-col>
      <van-col class="more">
        <span>查看更多</span>
      </van-col>
    </van-row>
    <!-- 秒杀商品 -->
    <van-row class="spike-goods" type="flex" justify="space-between">
      <van-col class="spike-goods-item"  v-for="(item,index) in 10" :key="index">
        <van-image
          width="3rem"
          fit="contain"
          lazy-load
          radius="5px"
          src="//t00img.yangkeduo.com/goods/images/2019-11-26/6cc0cb7c2244771122a3c75fd212a163.jpeg"
        />
        <div class="van-multi-ellipsis--l2">【加绒加厚】假两件连帽卫衣女秋冬2019年新款韩版百搭学生上衣潮</div>
        <div class="price">
          <span>￥176</span>
          <s>￥399</s>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'Flashsale',
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    }
  }
}

</script>

<style scoped>

</style>
