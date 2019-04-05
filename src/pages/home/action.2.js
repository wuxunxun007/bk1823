// import axios from 'axios';
import api from '@/api';

export default {
  requestHomeBannerListData: () => (dispatch) => {
    // axios.get('https://www.daxunxun.com/banner')
    //     .then(data => {
    //       console.log(data.data)
    //       dispatch({ // 触发相应reducer中的action的type属性，改变数据源
    //         type: 'CHANGE_HOME_BANNER_LIST_DATA',
    //         data: data.data
    //       })
    //     })
    api.request('banner').then(data => {
        dispatch({
          type: 'CHANGE_HOME_BANNER_LIST_DATA',
          data
        })
    }) 
  },
  requestHomeProListData: () => (dispatch) => {
    // axios.get('https://www.daxunxun.com/douban')
    //     .then(data => {
    //       console.log(data.data)
    //       dispatch({
    //         type: 'CHANGE_HOME_PRO_LIST_DATA',
    //         data: data.data
    //       })
    //     })
    api.request('douban').then(data => {
      dispatch({
        type: 'CHANGE_HOME_PRO_LIST_DATA',
        data
      })
  }) 
  }
}