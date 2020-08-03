import axios from '../http.js'

const homeData = {
  // 首页banner
  async banner() {
    return await axios
      .get('user/')
  }
}
export default homeData
