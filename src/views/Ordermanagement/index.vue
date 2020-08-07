<template>
  <div>
    <top-bar title="订单管理" hasClose></top-bar>
    <van-tabs v-model="active" animated>
      <van-tab title="全部">
        <card :ordermanagement_data="ordermanagement_data"></card>
      </van-tab>
      <van-tab title="待付款">
        <van-empty description="里面是空的" />
      </van-tab>
      <van-tab title="待发货">
        <van-empty description="里面是空的" />
      </van-tab>
      <van-tab title="已完成">
        <card :ordermanagement_data="ordermanagement_data"></card>
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
        active: 3,
        ordermanagement_data: [{
            id: '123456591765541',
            img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
            name: 'apple1',
            price: 4999.00,
            date: '2020-08-05 15:43:09',
            address: '成都市武侯区顺和横街',
            num: 2
          },
          {
            id: '123456591765542',
            img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
            name: 'apple2',
            price: 5999.00,
            date: '2020-08-04 15:43:09',
            address: '成都市武侯区顺和横街',
            num: 3
          }
        ]
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
