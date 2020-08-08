<template>
  <div>
    <div class="title">
      <van-row>
        <van-col span="3" align="center">
          <van-icon size="25" @click="Back" name="arrow-left"/>
        </van-col>
        <van-col span="18" align="center">
          <span style="font-size:18px">我的商城</span>
        </van-col>
      </van-row>
    </div>
    <div class="userinfo">
      <van-row type="flex" justify="space-between" align="center" class="user-info-wrapper">
        <van-col class="user-info">
          <div class="user-avatar m-r-10">
            <img @click="showPopup" src="../../assets/logo.png"/>
          </div>
          <div class="user-name">
            <div class="name">你好,{{ $Cookies.get('TOKEN') }}</div>
            <div>享受生活,享受Happy Shopping!</div>
          </div>
        </van-col>
      </van-row>
      <user-like></user-like>
    </div>
    <van-grid>
      <van-grid-item icon="card" text="代付款"/>
      <van-grid-item icon="send-gift" text="待收货"/>
      <van-grid-item icon="manager" text="退换/售后"/>
      <van-grid-item icon="column" text="全部订单"/>
    </van-grid>

    <van-row type="flex" justify="space-between" align="center" class="assets-list">
      <van-col class="item" v-for="(item,index) in Data" :key="index">
        <span>{{ item.num }}</span>
        <span class="m-t-5">{{ item.name }}</span>
      </van-col>
      <van-grid column-num="1">
        <van-grid-item icon="bill" text="我的钱包"/>
      </van-grid>
    </van-row>
    <recommend></recommend>
    <menubar></menubar>
    <van-popup v-model="show" position="bottom" :style="{ height: '5%' }">
      <van-button @click="logout" round block type="info" native-type="submit">
        注销登陆
      </van-button>
    </van-popup>
  </div>
</template>

<script>
import menubar from '../../components/MenuBar.vue'
import UserLike from '@/views/Me/UserLike'
import Recommend from '@/components/Recommend'

export default {
  data () {
    return {
      show: false,
      Data: [
        {
          name: '商城豆',
          num: '454'
        },
        {
          name: '优惠卷',
          num: '1'
        },
        {
          name: '白条',
          num: '0.00'
        },
        {
          name: '小金库',
          num: '0.00'
        }
      ]
    }
  },
  components: {
    menubar,
    UserLike,
    Recommend
  },
  methods: {
    Back () {
      this.$router.go(-1)
    },
    logout () {
      setTimeout(() => {
        this.$Cookies.remove('TOKEN', this.username, { expires: 7 })
        localStorage.setItem('isLogin', false)
        this.$router.push('/Login')
        this.$notify({
          type: 'success',
          message: '已退出登录'
        })
      }, 1000)
    },
    showPopup () {
      this.show = true
    }
  }
}
</script>

<style scoped>
.title {
  margin-top: 15px;
}

.assets-list {
  background-color: #fff;
  padding: 10px 20px;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo {
  position: relative;
  background: linear-gradient(to right, #9e2246 0%, #c11313 100%);
}

.user-info-wrapper {
  padding: 0 15px;
  height: 130px;

}

.user-info {
  display: flex;
  align-items: center;
}

img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.user-name {
  color: #fff;
}

.name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}
</style>
