<template>
  <div>
    <van-popup position="bottom" round :style="{ height: '50%' }" v-model="show">
      <!-- 密码输入框 -->
      <van-password-input :value="value" :error-info="errorInfo" :focused="showKeyboard" @focus="showKeyboard = true" />
      <!-- 数字键盘 -->
      <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" />
    </van-popup>
    <van-submit-bar :price="total_price" button-text="提交订单" @submit="showPopup" button-color="#7232dd" />
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
        showKeyboard: true,
        total_price: 0
      }
    },
    props: {
      order_data: {}
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
            this.errorInfo = '密码错误，请重新输入！'
            this.value = ''
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
    },
    created() {
      console.log('aaaaa')
      console.log(this.order_data)
      var n = 0
      for (var key in this.order_data) {
        ++n
        console.log(key)
      }
      for (var i = 0; i < n; i++) {
        this.total_price += this.order_data[i].original_price
      }
      this.total_price = this.total_price * 100
    }
  }
</script>

<style>
</style>
