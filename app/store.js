import { createStore } from 'redux';
import reducer from './reducers/index.js';
import actions from './actions';


const store = createStore(reducer);



export default store;