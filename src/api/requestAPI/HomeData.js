import axios from '../http.js'

const homeData = {
  async banner() {
    return await axios
      .get('books/banner')
  }
}
export default homeData
