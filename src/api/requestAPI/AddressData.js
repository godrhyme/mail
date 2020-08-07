import axios from '../http.js'

const addressData = {
  async addressList(username) {
    return await axios
      .get('/user/addressList',{
        params: {
          username: username
        }
      })
  },
  async addressAdd(username) {
    return await axios
      .put('/user/addAddress',{
        params: {
          username: username
        }
      })
  },
  async addressDel(username,addressId) {
    return await axios
      .delete('/user/editAddress',{
        params: {
          username: username,
          addressId: addressId
        }
      })
  },
  async addressEdit(username,addressId) {
    return await axios
      .put('/user/delAddress',{
        params: {
          username: username,
          addressId: addressId
        }
      })
  }
}
export default addressData
