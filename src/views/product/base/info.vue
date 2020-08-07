<template>
  <div>
    <van-cell-group>
      <van-cell title="已选" label="玄冰400爆款,1件" is-link @click="onclick1" />
      <van-cell title="送至" label="四川省成都市二仙桥街道...,现货,23:54前下单,预计明天送达" is-link @click="onclick1"/>
      <van-cell title="门店" label="京东电脑-成都大石东路店" is-link @click="onclick1"/>
    </van-cell-group>
    <van-row>
      <van-col span="8" offset="1">
        <van-rate v-model="value"/>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant'
  export default {
    data() {
      return {
        value: 4
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
</style>
