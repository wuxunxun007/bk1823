import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // 处理异步

// 如果有新的页面，就在此引入 *******************
import home from './home';
import kind from './kind';
import cart from './cart';

// 如果有新的页面，在此插入 **************************
const reducer = combineReducers({ //整合各个页面的reducer
  home,
  kind,
  cart
})

const store = createStore(reducer, applyMiddleware(thunk)); // 创建仓库，项目内使用异步操作

export default store;