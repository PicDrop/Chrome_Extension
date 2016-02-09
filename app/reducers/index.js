import { combineReducers } from 'redux';
import UploadImage from './reducer_uploadImage';
import User from './reducer_user';
import { reducer as formReducer } from 'redux-form'
import appReducer from './reducer_app';

const rootReducer = combineReducers({
  uploadImage: UploadImage,
  user: User,
  form: formReducer,
  app: appReducer
});

export default rootReducer;
