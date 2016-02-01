import { combineReducers } from 'redux';
import UploadImage from './reducer_uploadImage';


const rootReducer = combineReducers({
  uploadImage: UploadImage
});

export default rootReducer;
