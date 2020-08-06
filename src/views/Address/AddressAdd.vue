<template>
  <div>
    <div class="title">
      <van-row>
        <van-col span="3" align="center">
          <van-icon size="25" @click="Back" name="arrow-left"/>
        </van-col>
        <van-col span="18" align="center">
          <span style="font-size:18px">添加地址</span>
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
import areas from '@/area/area'
import { Toast } from 'vant'

export default {
name: "AddressAdd",
  data() {
    return {
      areaList: areas,
      searchResult: []
    }
  },
  methods: {
    Back () {
      this.$router.go(-1)
    },
    onSave() {
      Toast('save')
    },
    onDelete() {
      Toast('delete')
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
