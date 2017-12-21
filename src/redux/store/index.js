import {
    createStore,
    applyMiddleware,     // 组合多个中间件，在action发起至reducer接收之间进行日志记录、创建崩溃报告、调用异步接口或者路由等等
    compose     // 函数连续调用方法
} from 'redux';
import thunk from 'redux-thunk';   // 统一了异步和同步 action 的调用方式,如果需要写异步action，则需用到thunk
import rootReducers from '../reducers';

// const composedCreateStore = compose(
// 	applyMiddleware(thunk)
// )(createStore);
//
// function configureStore(initialState = {}) {
// 	const store = composedCreateStore(reducers, initialState);
// 	return store;
// }

const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
);


export default store;