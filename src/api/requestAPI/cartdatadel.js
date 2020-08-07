import axios from '../http.js'

const cartdatadel = {
  async banner(id) {
    return await axios
      .delete('order/cart/' + id + '/')
  }
}
export default cartdatadel
