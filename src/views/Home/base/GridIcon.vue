<template>
  <div>
    <van-swipe :loop="false">
      <van-swipe-item class="item">
        <van-grid :border="false" :column-num="4">
          <van-grid-item  v-for="(item,index) in Data" :key="index">
            <van-image width="40" :src="item.img"></van-image>
            <span style="font-size: 12px" >{{ item.name }}</span>
          </van-grid-item>
        </van-grid>
      </van-swipe-item>
<!--      <van-swipe-item>-->
<!--        <van-grid-item  v-for="(item,index) in Data" :key="index">-->
<!--          <van-image width="40" :src="item.img"></van-image>-->
<!--          <span style="font-size: 12px" >{{ item.name }}</span>-->
<!--        </van-grid-item>-->
<!--      </van-swipe-item>-->
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'GridIcon',
  data () {
    return {
      Data: [
        {
          name: '商城超市',
          img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png'
        },
        {
          name: '数码电器',
          img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png'
        },
        {
          name: '商城生鲜',
          img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png'
        },
        {
          name: '商城到家',
          img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png'
        },
        {
          name: '充值缴费',
          img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/146390/3/1846/4909/5efbf39aEe5f5f797/300071558a9ab078.png'
        },
        {
          name: '9.9元拼',
          img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/143365/25/1824/3716/5efbf3c0E5175e1fb/88f6227257a29f1d.png'
        },
        {
          name: '领卷',
          img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png'
        },
        {
          name: '领津贴',
          img: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/131663/33/3380/3674/5efbf50fEf79cf314/af4b57d2383e605d.png'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
