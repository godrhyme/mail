<template>
  <div>
    <div class="title">
      <van-row>
        <van-col span="3" align="center">
          <van-icon size="25" @click="Back" name="arrow-left"/>
        </van-col>
        <van-col span="18" align="center">
          <span style="font-size:18px">收货地址</span>
        </van-col>
      </van-row>
    </div>
    <div>
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        default-tag-text="默认"
        @add="AddressAdd"
        @edit="AddressEdit"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Address',
  data () {
    return {
      userid: '',
      chosenAddressId: '1',
      list: [],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },
  methods: {
    Back () {
      this.$router.go(-1)
    },
    AddressAdd () {
      this.$router.push('/AddressAdd')
    },
    AddressEdit (item) {
      console.log(item.id)
      this.$router.push({
        path: '/AddressEdit',
        query: {
          addressId: item.id
        }
      })
    }
  },
  created () {
    this.userid = this.$Cookies.get('userid')
    this.$api.addressData.addressList(this.userid).then(({
      data
    }) => {
      console.log(data)
      this.list = data
    })
  }
}
</script>

<style scoped>
.title {
  margin-top: 15px;
}

.addbotton {
  position: fixed;
  bottom: 5px;
}

</style>
