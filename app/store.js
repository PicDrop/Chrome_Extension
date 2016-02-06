import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index.js';
import ReduxPromise from 'redux-promise';
import actions from './actions';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;