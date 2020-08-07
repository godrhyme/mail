<template>
  <div>
    <treeselect :category_data="category_data"></treeselect>
    <menubar></menubar>
  </div>

</template>

<script>
  import menubar from '../../components/MenuBar.vue'
  import treeselect from './base/treeselect.vue'
  export default {
    components: {
      menubar,
      treeselect
    },
    data() {
      return {
        category_data: [
          [
            [{
                id: 0,
                img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                name: '纯色'
              },
              {
                id: 1,
                img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                name: '新品'
              },
              {
                id: 2,
                img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                name: '纯棉'
              },
              {
                id: 3,
                img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                name: '宽松'
              },
              {
                id: 4,
                img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                name: 'POLO'
              },
              {
                id: 5,
                img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                name: '联名'
              }
            ],
            [{
                id: 0,
                img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                name: '纯色'
              },
              {
                id: 1,
                img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                name: '新品'
              },
              {
                id: 2,
                img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                name: '纯棉'
              },
              {
                id: 3,
                img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                name: '宽松'
              },
              {
                id: 4,
                img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                name: 'POLO'
              },
              {
                id: 5,
                img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                name: '联名'
              }
            ]
          ],
          [
            [{
                id: 0,
                img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                name: '纯色'
              },
              {
                id: 1,
                img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                name: '新品'
              },
              {
                id: 2,
                img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                name: '纯棉'
              },
              {
                id: 3,
                img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                name: '宽松'
              },
              {
                id: 4,
                img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                name: 'POLO'
              },
              {
                id: 5,
                img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                name: '联名'
              }
            ],
            [{
                id: 0,
                img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                name: '纯色'
              },
              {
                id: 1,
                img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                name: '新品'
              },
              {
                id: 2,
                img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                name: '纯棉'
              },
              {
                id: 3,
                img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                name: '宽松'
              },
              {
                id: 4,
                img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                name: 'POLO'
              },
              {
                id: 5,
                img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                name: '联名'
              }
            ]
          ]
        ]
      }
    }
  }
</script>

<style>
</style>
