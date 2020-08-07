<template>
  <div>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show">
      <!-- 密码输入框 -->
      <van-password-input :value="value" info="密码为 6 位数字" :focused="showKeyboard" @focus="showKeyboard = true" />
      <!-- 数字键盘 -->
      <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" />
    </van-popup>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        value: '123',
        showKeyboard: true
      }
    },
    methods: {
      onInput(key) {
        this.value = (this.value + key).slice(0, 6)
      },
      showPopup() {
        this.show = true
      },
      onDelete() {
        this.value = this.value.slice(0, this.value.length - 1)
      }
    }
  }
</script>

<style>
</style>
