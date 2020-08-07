import axios from '../http.js'

const cartdata = {
  async banner() {
    return await axios
      .get('order/cart/')
  }
}
export default cartdata
