import axios from 'axios';
export default {
  requestHomeBannerListData () {
    return function (dispatch) {
      console.log('请求banner数据2')
      axios.get('https://www.daxunxun.com/banner')
        .then(data => {
          console.log(data.data)
          dispatch({
            type: 'CHANGE_HOME_BANNER_LIST_DATA',
            data: data.data
          })
        })
    }
  },
  requestHomeProListData () {
    return function (dispatch) {
      console.log('请求pro数据2')
      axios.get('https://www.daxunxun.com/douban')
        .then(data => {
          console.log(data.data)
          dispatch({
            type: 'CHANGE_HOME_PRO_LIST_DATA',
            data: data.data
          })
        })
    }
  }
}