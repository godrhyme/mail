<template>
  <div>
    <list :order_data="order_data"></list>
    <submitbar :order_data="order_data"></submitbar>
  </div>
</template>

<script>
  import submitbar from './base/submitbar.vue'
  import list from './base/list.vue'
  export default {
    components: {
      submitbar,
      list
    },
    data() {
      return {
        order_id: 0,
        goods_flag: 0,
        cart_flag: 0,
        order_data: []
        // order_data: [{
        //     id: '123456591765541',
        //     img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
        //     name: 'apple1',
        //     price: 4999.00,
        //     num: 2
        //   },
        //   {
        //     id: '123456591765542',
        //     img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
        //     name: 'apple2',
        //     price: 5999.00,
        //     num: 3
        //   }
        // ]
      }
    },
    created() {
      console.log('hhh')
      // this.order_id = this.$router.query.order_id
      // this.goods_flag = this.$router.goods_flag
      // this.cart_flag = this.$router.goods_flag
      console.log(this.$route.query.order_id[0])
      console.log('hhh')
      if (this.$route.query.goods_flag === 1) {
        this.$api.singlegoods.banner(this.$route.query.order_id[0]).then(({
          results
        }) => {
          console.log('hhhh')
          this.order_data[0] = results
          console.log(this.order_data)
        })
      }
      if (this.$route.query.cart_flag === 1) {
        for (var i = 0; i < this.$route.query.order_id.length; i++) {
          this.$api.singlegoods.banner(this.$route.query.order_id[i]).then(({
            results
          }) => {
            this.order_data[i] = results
          })
        }
      }
    }
  }
</script>

<style>
</style>
