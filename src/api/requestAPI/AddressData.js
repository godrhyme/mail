import axios from '../http.js'

const addressData = {
  async addressList (userid) {
    return await axios
      .get('/address/user/' + userid + '/')
  },
  async addressAdd (Adderssinfo) {
    return await axios
      .post('/address/',Adderssinfo,{
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
  },
  async addressDel (Adderssinfo,id) {
    return await axios.delete('/address/' + id + '/',Adderssinfo,{
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
  },
  async addressEdit (Adderssinfo,id) {
    return await axios
      .put('/address/' + id + '/',Adderssinfo, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
  }
}
export default addressData
