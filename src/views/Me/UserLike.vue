<template>
  <!-- 用户浏览记录 -->
  <div class="userlike">
    <van-row type="flex" justify="space-between" align="center" class="history-list">
      <van-col span="6" class="item" v-for="(item,index) in Data" :key="index">
        <span>{{ item.num }}</span>
        <span class="m-t-5">{{ item.name }}</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Data: [
        {
          name: "商品关注",
          num: "0"
        },
        {
          name: "店铺关注",
          num: "1"
        },
        {
          name: "喜欢的内容",
          num: "5"
        },
        {
          name: "浏览记录",
          num: "12"
        }
      ]
    }
  }
}
</script>

<style scoped>
.userlike {
  margin-top: 20px;
  padding: 0 10px;
}
.history-list {
  padding: 10px 0;
  background-color: #fff;
  border-radius: 5px;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
