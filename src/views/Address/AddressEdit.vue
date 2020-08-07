<template>
  <div>
    <div class="title">
      <van-row>
        <van-col span="3" align="center">
          <van-icon size="25" @click="Back" name="arrow-left"/>
        </van-col>
        <van-col span="18" align="center">
          <span style="font-size:18px">编辑地址</span>
        </van-col>
      </van-row>
    </div>
    <div>
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import areas from "../../area/area"

export default {
name: "AddressEdit",
  data() {
    return {
      areaList: areas,
      searchResult: [],
      AddressInfo: {
        name: '',
        tel: '',
        address: '',
        user_id: ''
      }
    }
},
  methods: {
    Back () {
      this.$router.go(-1)
    },
    onSave (item) {
      this.AddressInfo.user_id = parseInt(this.$Cookies.get('userid'))
      this.AddressInfo.name = item.name
      this.AddressInfo.tel = parseInt(item.tel)
      this.AddressInfo.address = item.province + item.city + item.county + item.addressDetail
      this.$api.addressData.addressEdit(this.AddressInfo,this.$route.query.addressId)
      Toast('修改成功')
      this.$router.push('/Address')
    },
    onDelete(item) {
      this.AddressInfo.user_id = parseInt(this.$Cookies.get('userid'))
      this.AddressInfo.name = item.name
      this.AddressInfo.tel = parseInt(item.tel)
      this.AddressInfo.address = item.province + item.city + item.county + item.addressDetail
      console.log(this.$route.query.addressId)
      this.$api.addressData.addressDel(this.AddressInfo,this.$route.query.addressId)
      Toast('删除成功')
      this.$router.push('/Address')
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }
        ]
      } else {
        this.searchResult = []
      }
    }
  }
}
</script>

<style scoped>
.title {
  margin-top: 15px;
}

</style>
