import axios from 'axios';
const baseUrl = "https://www.daxunxun.com/"
export default {
  request (url) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + url)
        .then(data => {
          resolve(data.data)
        })
    })
  }
}