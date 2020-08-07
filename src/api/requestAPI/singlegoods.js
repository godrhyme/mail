import axios from '../http.js'

const singlegoods = {
  async banner(id) {
    var list = {
      results: {}
    }
    var result = await axios.get('goods/info/' + id + '/')
    var img1 = result.goods_cover_img
    result.goods_cover_img = []
    result.goods_cover_img[0] = img1
    var img2 = result.goods_carousel
    result.goods_carousel = []
    result.goods_carousel[0] = img2
    console.log(result)
    console.log('222')
    list.results = result
    return list
  }
}
export default singlegoods
