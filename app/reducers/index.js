import { combineReducers } from 'redux';
import UploadImage from './reducer_uploadImage';
import User from './reducer_user';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  uploadImage: UploadImage,
  user: User,
  form: formReducer
});

export default rootReducer;
