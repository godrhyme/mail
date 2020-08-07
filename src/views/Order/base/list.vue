<template>
  <div class="order-payment">
    <top-bar title="确认订单" hasClose></top-bar>
    <!-- 订单商品 -->
    <goods-list :order_data="order_data"></goods-list>
  </div>
</template>

<script>
  import TopBar from '@/components/TopBar'
  import GoodsList from './goodlist.vue'

  export default {
    components: {
      TopBar,
      GoodsList
    },
    props: {
      order_data: {}
    }
  }
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
