<template>
  <div class="order-payment">
    <top-bar title="确认订单" hasClose></top-bar>
    <!-- 订单商品 -->
    <goods-list></goods-list>
  </div>
</template>

<script>
  import TopBar from '@/components/TopBar'
  import GoodsList from '@/components/GoodsList'

  export default {
    components: {
      TopBar,
      GoodsList
    }
  }
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
