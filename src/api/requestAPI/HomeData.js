import axios from '../http.js'

const homeData = {
  async Like() {
    return await axios
      .get('/goods/info')
  }
}
export default homeData
