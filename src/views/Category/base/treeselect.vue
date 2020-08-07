<template>
  <div>
    <van-tree-select height="200vw" :items="items" :main-active-index.sync="active">
      <template #content>
        <div v-if="active === 0">
          <div v-for="item in 2" :key="item">
            <h4>T恤</h4>
            <van-grid :gutter="15" :column-num="3">
              <van-grid-item v-for="(value,index) in category_data[active][item-1]" :key="index">
                <img width="100%" v-lazy="value.img" @click="goto">
                <center>{{value.name}}</center>
              </van-grid-item>
              <!--            <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" /> -->
            </van-grid>
          </div>
        </div>
        <div v-if="active === 1">
          <div v-for="item in 2" :key="item">
            <h4>裙装</h4>
            <van-grid :gutter="15" :column-num="3">
              <van-grid-item v-for="(value,index) in category_data[active][item-1]" :key="index">
                <img width="100%" v-lazy="value.img" @click="goto">
                <center>{{value.name}}</center>
              </van-grid-item>
              <!--            <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" /> -->
            </van-grid>
          </div>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
  export default {
    props: {
      category_data: {}
    },
    data() {
      return {
        active: 0,
        items: [{
          text: '男装'
        }, {
          text: '女装'
        }]
      }
    },
    methods: {
      goto() {
        this.$router.push('/product')
      }
    },
    created() {}
  }
</script>

<style>
</style>
