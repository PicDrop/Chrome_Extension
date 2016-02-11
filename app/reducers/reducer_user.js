const defaultState = {isAuth: false};

function login(state, user) {
  const newState = Object.assign({}, user);
  newState.isAuth = true;
  return newState;
}

function setUser(state, user) {
  const newState = Object.assign({}, state, user);
  newState.isAuth = true;
  for (var key in newState.folders) {
    delete newState.folders[key].id;
  }  
  return newState;
}

function addFolder (state, folder) {
  const newState = Object.assign({}, state);
  newState.folders[folder] = {};
  return newState;
}

function addImageToState (state, data) {
  const newState = Object.assign({}, state);
  newState.folders[data.folder][data.url] = true;
  newState.userPics[data.url] = {
    domain: data.domain,
    tags: data.tags,
    url: data.url,
    title: data.title,
    note: data.note
  };
  console.log("newState addImage to State", newState)
  return newState 
}


const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'LOGIN' :
      return login(state, action.user);
    case 'SET_USER':
      return setUser(state, action.user);
    case 'ADD_FOLDER':
      return addFolder(state, action.folder);
    case 'ADD_IMAGE_TO_STATE':
      return addImageToState(state, action.data);
    default:
      return state;
  }

};

export default reducer;