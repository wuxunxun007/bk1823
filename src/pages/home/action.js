import api from '@/api';
function match({ url, type, dispatch }){
  api.request(url).then(data => {
    dispatch({
      type,
      data
    })
  }) 
}
export default {
  requestHomeBannerListData: () => (dispatch) => {
    match({
      url:'banner', 
      type: 'CHANGE_HOME_BANNER_LIST_DATA', 
      dispatch
    });
  },
  requestHomeProListData: () => (dispatch) => {
    match({
      url:'douban', 
      type: 'CHANGE_HOME_PRO_LIST_DATA', 
      dispatch
    });
  }
}