<template>
  <div>
    <navbar></navbar>
    <swipe :swipe_img="goodsdata.swipe_img"></swipe>
    <van-row>
      <van-col offset="1" span="1">
        <font size="4" color="red">¥</font>
      </van-col>
      <van-col span="19">
        <font size="6" color="red">{{goodsdata.price}}</font>
      </van-col>
      <van-col span="1">
        <van-icon name="star-o" size="30" />
      </van-col>
    </van-row>
    <van-row>
      <van-col offset="1" span="22">
        <h3>
          <van-tag type="danger" size="medium">自营</van-tag>{{goodsdata.info}}
        </h3>
      </van-col>
    </van-row>
    <info></info>
    <div class="box3">
      <cell id="part1"></cell>
      <comment></comment>
      <comment></comment>
    </div>
    <center>
      <van-button round plain type="info" size="small" @click="onclick1">查看更多评论</van-button>
    </center>
    <detail :detail_img='goodsdata.detail_img'></detail>
    <recommend id="part3"></recommend>
    .<br>
    .<br>
    .<br>
    <goodsaction></goodsaction>
  </div>
</template>

<script>
  import goodsaction from './base/goodsaction.vue'
  import navbar from './base/navbar.vue'
  import swipe from './base/swipe.vue'
  import cell from './base/cell.vue'
  import comment from './base/comment.vue'
  import info from './base/info.vue'
  import detail from './base/detail.vue'
  import recommend from './base/recommend.vue'
  import {
    Toast
  } from 'vant'
  export default {
    components: {
      goodsaction,
      navbar,
      swipe,
      cell,
      comment,
      info,
      detail,
      recommend
    },
    data() {
      return {
        goodsdata: {
          id: 0,
          info: '【12期免息 中国移动官旗】iPhoneSE手机苹果se2苹果手机移动官方旗舰店苹果11 xsmax xr 8plus手机正品',
          price: '4999.00~5999.99',
          swipe_img: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
          detail_img: ['../../../assets/IMG_2980.jpg', '../../../assets/IMG_2981.jpg', '../../../assets/IMG_2982.jpg',
            '../../../assets/IMG_2983.jpg'
          ]
        }
      }
    },
    methods: {
      onclick1() {
        Toast('功能暂未开放')
      }
    }
  }
</script>

<style>
  .box3 {
    background: #f2f2f2;
  }
</style>
