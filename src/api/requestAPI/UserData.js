import axios from '../http.js'

const userData = {
  async userlogin(username,password) {
    return await axios
      .post('/user/login/',{
          username: username,
          password: password
      })
  }
}
export default userData
