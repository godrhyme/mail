<template>
  <div>
    <!-- <van-sku v-model="show" :sku="sku" :goods="goods" :goods-id="goodsId" :quota="quota" :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock" :message-config="messageConfig" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked" /> -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" url="/#/Cart" badge="5" />
      <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" @click="onClickButton1"></van-goods-action-button>
      <van-goods-action-button color="#7232dd" type="danger" text="立即购买" @click="onClickButton2" />
    </van-goods-action>
    <van-sku v-model="show" :sku="sku" :goods="goods" :hide-stock="sku.hide_stock" :message-config="messageConfig">
      <template #sku-actions>
        <div class="van-sku-actions">
          <van-goods-action-button color="#7232dd" type="danger" text="确定" @click="onPointClicked" />
        </div>
      </template>
    </van-sku>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant'
  export default {
    data() {
      return {
        show: false,
        flag: 'join',
        sku: {
          // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
          // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
          tree: [{
              k: '型号', // skuKeyName：规格类目名称
              k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
              v: [{
                  id: '1', // skuValueId：规格值 id
                  name: '手机', // skuValueName：规格值名称
                  imgUrl: 'https://img.yzcdn.cn/vant/apple-1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                  previewImgUrl: 'https://img.yzcdn.cn/vant/apple-1.jpg' // 用于预览显示的规格类目图片
                },
                {
                  id: '2',
                  name: '电脑',
                  imgUrl: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                  previewImgUrl: 'https://img.yzcdn.cn/vant/apple-2.jpg'
                }
              ],
              largeImageMode: true //  是否展示大图模式
            },
            {
              k: '容量', // skuKeyName：规格类目名称
              k_s: 's2', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
              v: [{
                  id: '1', // skuValueId：规格值 id
                  name: '64GB' // skuValueName：规格值名称
                },
                {
                  id: '2',
                  name: '128GB'
                }
              ]
            }
          ],
          // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
          list: [{
              id: 1, // skuId
              s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
              s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
              price: 499900, // 价格（单位分）
              stock_num: 110 // 当前 sku 组合对应的库存
            },
            {
              id: 2, // skuId
              s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
              s2: '2', // 规格类目 k_s 为 s2 的对应规格值 id
              price: 499999, // 价格（单位分）
              stock_num: 110 // 当前 sku 组合对应的库存
            },
            {
              id: 3, // skuId
              s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
              s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
              price: 599900, // 价格（单位分）
              stock_num: 110 // 当前 sku 组合对应的库存
            },
            {
              id: 4, // skuId
              s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
              s2: '2', // 规格类目 k_s 为 s2 的对应规格值 id
              price: 599999, // 价格（单位分）
              stock_num: 110 // 当前 sku 组合对应的库存
            }
          ],
          price: '4999.00~5999.99', // 默认价格（单位元）
          stock_num: 440, // 商品总库存
          collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
          none_sku: false, // 是否无规格商品
          hide_stock: false // 是否隐藏剩余库存
        },
        goods: {
          // 默认商品 sku 缩略图
          picture: 'https://img.yzcdn.cn/vant/apple-1.jpg'
        },
        messageConfig: {
          // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
          uploadImg: () => {
            return new Promise((resolve) => {
              setTimeout(() => resolve(
                  'https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'),
                1000)
            })
          },
          // 最大上传体积 (MB)
          uploadMaxSize: 3,
          // placeholder 配置
          placeholderMap: {
            text: 'xxx',
            tel: 'xxx'
          },
          // 初始留言信息
          // 键：留言 name
          // 值：留言内容
          initialMessages: {
            留言: '留言信息'
          }
        }
      }
    },
    props: {
      price: String
    },
    methods: {
      onClickIcon() {
        Toast('客服小姐姐已经下班了~')
      },
      onClickButton1() {
        this.flag = 'join'
        this.show = true
      },
      onClickButton2() {
        this.flag = 'buy'
        this.show = true
      },
      onPointClicked() {
        if (this.flag === 'join') {
          Toast.success('已添加到购物车')
          this.show = false
        }
        if (this.flag === 'buy') {
          this.show = false
          this.$router.push('/Order')
        }
      }
    }
  }
</script>

<style>
</style>
