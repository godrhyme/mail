<template>
  <div>
    <top-bar title="购物车"></top-bar>
    <single :cartdata="cartdata"></single>
    <menubar></menubar>
  </div>
</template>

<script>
  import menubar from '../../components/MenuBar.vue'
  import TopBar from '@/components/TopBar'
  import single from "./base/single.vue"
  export default {
    components: {
      TopBar,
      menubar,
      single
    },
    data() {
      return {
        // cartdata: []
        cartdata: [
          {
            id: 0,
            checkboxname: 'a',
            img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
            name: 'apple1',
            price: 4999.00,
            num: 2
          },
          {
            id: 1,
            checkboxname: 'b',
            img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
            name: 'apple2',
            price: 5999.00,
            num: 3
          },
          {
            id: 2,
            checkboxname: 'c',
            img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
            name: 'apple3',
            price: 6999.00,
            num: 1
          }
        ]
      }
    }
    // created() {
    //   this.$api.cartdata.banner().then(({
    //     results
    //   }) => {
    //     this.cartdata = results
    //   })
    // }
  }
</script>

<style>
</style>
