import { connect } from 'react-redux';
import UI from './UI';
import action from './action';

// 这里的state代表的全部页面的state， 可以通过state.home获取首页的状态
const mapStateToProps = (state) => {
  console.log(state)
  return {
    homebannerlistdata: state.home.homebannerlistdata,
    homeprolistdata: state.home.homeprolistdata
  }
}

// 处理UI组件的业务逻辑
const mapDispatchToProps = (dispatch) => {
  return {
    requestHomeBannerListData () {
      dispatch(action.requestHomeBannerListData())
    },
    requestHomeProListData () {
      dispatch(action.requestHomeProListData())
    }
  }
}

const Com = connect(mapStateToProps, mapDispatchToProps)(UI);

export default Com;