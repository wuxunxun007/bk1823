import api from '@/api';
function match(url, type, dispatch){
  api.request(url).then(data => {
    dispatch({
      type,
      data
    })
  }) 
}
export default {
  requestHomeBannerListData: () => (dispatch) => {
    match('banner', 'CHANGE_HOME_BANNER_LIST_DATA', dispatch);
  },
  requestHomeProListData: () => (dispatch) => {
    match('douban', 'CHANGE_HOME_PRO_LIST_DATA', dispatch);
  }
}