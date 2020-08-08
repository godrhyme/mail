import axios from '../http.js'

const homeData = {
  async Likes() {
    return await axios
      .get('/goods/info/')
  }
}
export default homeData
