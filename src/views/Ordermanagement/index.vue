<template>
  <div>
    <top-bar title="订单管理" hasClose></top-bar>
    <van-tabs v-model="active" animated>
      <van-tab title="全部">
        <card></card>
      </van-tab>
      <van-tab title="待付款">
        <van-empty description="里面是空的" />
      </van-tab>
      <van-tab title="待发货">
        <van-empty description="里面是空的" />
      </van-tab>
      <van-tab title="已完成">
        <card></card>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import TopBar from '@/components/TopBar'
  import card from './base/card.vue'
  export default {
    data() {
      return {
        active: 3
      }
    },
    components: {
      TopBar,
      card
    }
  }
</script>

<style>
</style>
