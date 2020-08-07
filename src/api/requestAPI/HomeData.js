import axios from '../http.js'

const homeData = {
  async Like() {
    return await axios
      .get('/goods/home')
  }
}
export default homeData
