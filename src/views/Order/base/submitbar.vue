<template>
  <div>
    <van-popup position="bottom" round :style="{ height: '50%' }" v-model="show">
      <!-- 密码输入框 -->
      <van-password-input :value="value" :error-info="errorInfo" :focused="showKeyboard" @focus="showKeyboard = true" />
      <!-- 数字键盘 -->
      <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" />
    </van-popup>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="showPopup" button-color="#7232dd" />
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant'
  export default {
    data() {
      return {
        show: false,
        value: '',
        errorInfo: '初试密码为123456',
        showKeyboard: true
      }
    },
    methods: {
      onInput(key) {
        this.value = (this.value + key).slice(0, 6)
        if (this.value.length === 6) {
          if (this.value === '123456') {
            this.show = false
            Toast.success('支付成功')
            this.$router.push('/ordermanagement')
          } else {
            this.errorInfo = '密码错误'
          }
        }
      },
      showPopup() {
        this.show = true
        this.showKeyboard = true
        this.value = ''
      },
      onDelete() {
        this.value = this.value.slice(0, this.value.length - 1)
      }
    }
  }
</script>

<style>
</style>
