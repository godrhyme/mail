<template>
  <div>
    <van-sticky>
      <van-row>
        <van-col span="8" offset="1">
          <p>共<span class="mark">{{cartdata_num}}</span>件商品</p>
        </van-col>
        <van-col span="4" offset="11">
          <p class="box5" @click="flag=!flag">{{ flag ? '管理' : '完成'}}</p>
        </van-col>
      </van-row>
    </van-sticky>
    <ul>
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <li v-for="(item,index) in cartdata" :key="index" class="goods-item">
          <!-- 左侧图片 -->
          <van-checkbox :name="item.checkboxname"></van-checkbox>
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
      </van-checkbox-group>
      <!--    <p class="load-more" v-if="isloadMore">- 加载更多 -</p> -->
      <!--    <p class="load-more">- 我们是有底线的 -</p> -->
    </ul>
    <van-sticky :offset-top="717">
      <van-row>
        <van-col span="4" offset="1">
          <van-button plain type="primary" round @click="checkAll">全选</van-button>
        </van-col>
        <van-col span="4">
          <font color="red" size="5" v-if="flag">￥{{total_price}}</font>
        </van-col>
        <van-col span="6" offset="9">
          <van-button type="info" round v-if="flag" @click="click5">结算({{this.result.length}})</van-button>
          <van-button type="danger" round v-if="!flag" @click="click6">删除({{this.result.length}})</van-button>
        </van-col>
      </van-row>
    </van-sticky>
  </div>
</template>

<script>
  export default {
    name: 'GoodsList',
    props: {
      cartdata: {},
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
        order_ids: [],
        defImg: 'this.src="' + require('./error-img.png') + '"',
        result: [],
        flag: true,
        total_price: 0,
        cartdata_num: 0
      }
    },
    methods: {
      checkAll() {
        this.$refs.checkboxGroup.toggleAll(true)
        console.log(this.result)
      },
      click5() {
        this.$router.push({
          path: '/Order',
          query: {
            order_id: this.order_ids,
            goods_flag: 0,
            cart_flag: 1
          }
        })
      },
      click6() {
        for (var i in this.order_ids) {
          console.log(this.order_ids[i])
          this.cartdata.splice(this.order_ids[i], 1)
          console.log(this.cartdata)
          console.log('1234')
          this.result = []
          var n = 0
          for (var key in this.cartdata) {
            ++n
            console.log(key)
          }
          this.cartdata_num = n
          // this.$api.cartdatadel.banner(i + 1).then(({
          //   results
          // }) => {
          //   this.$api.cartdatadel.banner().then(({
          //     results
          //   }) => {
          //     this.cartdata = results
          //   })
          // })
        }
      }
    },
    watch: {
      result(val) {
        var i
        var j
        this.total_price = 0
        for (i = 0; i < this.result.length; i++) {
          for (j = 0; j < this.cartdata_num; j++) {
            console.log(this.result[i])
            console.log(this.result[i])
            console.log(this.cartdata)
            if (this.cartdata[j].checkboxname === this.result[i]) {
              console.log(this.cartdata[j].id)
              this.order_ids[i] = this.cartdata[j].id
              this.total_price += this.cartdata[j].price * this.cartdata[j].num
              console.log(this.order_ids)
            }
          }
        }
      }
    },
    created() {
      var n = 0
      console.log(this.cartdata[0])
      for (var key in this.cartdata) {
        ++n
        console.log(key)
      }
      this.cartdata_num = n
    }
  }
</script>

<style lang="scss" scoped>
  @import './style.scss';

  .box5 {
    color: blue;
  }
</style>
