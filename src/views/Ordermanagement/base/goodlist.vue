<template>
  <ul>
    <li v-for="(item,index) in ordermanagement_data" :key="index" class="goods-item">
      <!-- 左侧图片 -->
      <section class="left-img">
        <img width="100%" :src="item.img" :onerror="defImg" />
      </section>
      <!-- 右侧文本 -->
      <section class="right-txt">
        <p class="goods-name">{{item.name}}</p>
        <p class="goods-num">
          <span class="price">￥{{ (item.price * item.num).toFixed(2) }}</span>
        </p>
      </section>
      <!-- 单个商品订单数量 -->
      <section class="order-goods-count">x {{ item.num }}</section>
      <!-- 删除按钮 -->
      <section class="delete-btn" v-if="isBrowseHistory || isCollectionList">
        <van-icon name="close" class="delete-icon" />
      </section>
    </li>
    <!--    <p class="load-more" v-if="isloadMore">- 加载更多 -</p> -->
    <!--    <p class="load-more">- 我们是有底线的 -</p> -->
  </ul>
</template>

<script>
  export default {
    name: 'GoodsList',
    props: {
      ordermanagement_data: {},
      searchKeyword: {
        type: String,
        default: ''
      }, // 搜索关键字
      isloadMore: {
        type: Boolean,
        default: false
      }, // 是否加载更多
      isBrowseHistory: {
        type: Boolean,
        default: false
      }, // 是否为浏览历史
      isCollectionList: {
        type: Boolean,
        default: false
      }, // 是否为收藏列表
      isOrderPaymentList: {
        type: Boolean,
        default: false
      } // 是否订单支付列表
    },
    data() {
      return {
        defImg: 'this.src="' + require('./error-img.png') + '"',
        goodsList: [{
            id: 1,
            img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
            name: 'apple1',
            present_price: 4999.00,
            buy_count: 2
          },
          {
            id: 2,
            img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
            name: 'apple2',
            present_price: 5999.00,
            buy_count: 3
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './style1.scss';
</style>
