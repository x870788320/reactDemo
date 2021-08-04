import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk'


//获取reducers
const requireStores = require.context('./reducers', true, /\.store\.js/);
const reducerArr = requireStores.keys().reduce((pre, store) => {
    const { name } = requireStores(store).default;
    pre[name] = requireStores(store).default;;
    return pre;
},{})
const reducers = combineReducers(reducerArr)

// 设置调试工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 设置中间件
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(reducers, enhancer);

export default store;