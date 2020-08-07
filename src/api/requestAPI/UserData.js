import axios from '../http.js'

const userData = {
  async banner(username,password) {
    return await axios
      .get('/user/login',{
        params: {
          username: username,
          password: password
        }
      })
  }
}
export default userData
