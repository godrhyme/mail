<template>
  <div class="top-bar" :class="[ (!hasBack && !hasClose) ? 'center' : 'between' ]">
    <van-icon v-if="hasClose" class="back-icon" name="arrow-left" @click="goOff()" />
    <span>{{ title }}</span>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'TopBar',
    props: {
      title: {
        type: String,
        default: ''
      },
      hasBack: {
        type: Boolean,
        default: false
      },
      hasClose: {
        type: Boolean,
        default: false
      },
      outBrowse: {
        type: Boolean,
        default: false
      },
      outOrder: {
        type: Boolean,
        default: false
      },
      outAddressEdit: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      goOff() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .top-bar {
    display: flex;
    align-items: center;
    height: 11.5vw;
    padding: 0 3vw;
    background: #fff;
    border-bottom: 1px solid #eee;
    font-size: 4.5vw;
    box-sizing: border-box;
  }

  .center {
    justify-content: center;
  }

  .between {
    justify-content: space-between;
  }
</style>
