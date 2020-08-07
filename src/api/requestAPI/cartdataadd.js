import axios from '../http.js'

const cartdataadd = {
  async banner() {
    var data = {
      is_deleted: false,
      goods_count: 11,
      total_price: 99,
      user_id: 1,
      goods_id: 1
    }
    return await axios
      .post('order/cart/', data)
  }
}
export default cartdataadd
