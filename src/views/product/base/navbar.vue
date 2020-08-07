<template>
  <div>
    <van-sticky>
      <div class="box1">
        <div>.</div>
        <van-row gutter="20">
          <van-col span="4">
            <van-icon name="arrow-left" size="30" @click="goOff()"/>
          </van-col>
          <van-col span="15">
            <van-tabs v-model="active" :before-change="beforeChange">
              <van-tab title="商品" index=0></van-tab>
              <van-tab title="评价" index=1></van-tab>
              <van-tab title="详情" index=2></van-tab>
              <van-tab title="推荐" index=3></van-tab>
            </van-tabs>
          </van-col>
          <van-col span="2">
            <van-icon name="share" size="30" @click="showShare = true" />
          </van-col>
          <van-col span="2">
            <van-icon name="weapp-nav" size="30" />
          </van-col>
        </van-row>
      </div>
    </van-sticky>
    <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant'
  export default {
    data() {
      return {
        showShare: false,
        active: 0,
        options: [{
            name: '微信',
            icon: 'wechat'
          },
          {
            name: '微博',
            icon: 'weibo'
          },
          {
            name: '复制链接',
            icon: 'link'
          },
          {
            name: '分享海报',
            icon: 'poster'
          },
          {
            name: '二维码',
            icon: 'qrcode'
          }
        ]
      }
    },
    methods: {
      onClickLeft() {
        Toast('返回')
      },
      onClickRight() {
        Toast('按钮')
      },
      onSelect(option) {
        Toast("分享成功！")
        this.showShare = false
      },
      beforeChange(index) {
        console.log("part" + index)
        this.active = index
        document.getElementById('part' + index).scrollIntoView({
          behavior: "smooth", // 平滑过渡
          block: "start" // 上边框与视窗顶部平齐。默认值
        })
      },
      goOff() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  .box1 {
    background: white;
    height: 63px;
  }
</style>
