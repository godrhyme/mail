<template>
  <div>
    <van-cell-group>
      <van-cell title="评价" icon="fire" is-link value="好评度94%" @click="onclick1"/>
    </van-cell-group>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant'
  export default {
    methods: {
      onclick1() {
        Toast('功能暂未开放')
      }
    }
  }
</script>

<style>
</style>
