<template>
  <div>
    <section class="order-item" v-for="item of orderList" :key="item.id">
      <el-card shadow="always" class="box-card">
        <div slot="header" class="clearfix">
          订单编号：<font color="#0048AB">{{ item.order_id }}</font>
        </div>
        <div class="text item">
          <goods-list></goods-list>
          <van-divider />
        </div>
        <div class="box4" align="right">
          共<font color="#0048AB">{{ orderList.length }}</font>件商品<br>
          创建时间：<font color="#0048AB">{{ item.createAt }}</font><br>
          收货地址：<font color="#0048AB">{{ item.address }}</font><br>
        </div>
      </el-card>
      <el-divider></el-divider>
    </section>
  </div>
</template>

<script>
  import GoodsList from '@/components/GoodsList'
  export default {
    components: {
      GoodsList
    },
    data() {
      return {
        orderList: [{
            id: 1,
            order_id: '123456591765541',
            img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
            name: 'apple1',
            present_price: 4999.00,
            buy_count: 2,
            createAt: '2020-08-05 15:43:09',
            address: '成都市武侯区顺和横街'
          },
          {
            id: 2,
            order_id: '1123456594823245',
            img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
            name: 'apple2',
            present_price: 5999.00,
            buy_count: 3,
            createAt: '2020-08-04 15:43:09',
            address: '成都市武侯区顺和横街'
          }
        ] // 订单数据
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './style.scss';

  .text {
    font-size: 20px;
  }

  .item {
    margin-bottom: 9px;
  }

  .clearfix:before {
    font-size: 10px;
  }

  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }

  .box4 {
    line-height: "11px";
    height: "80px";
  }
</style>
