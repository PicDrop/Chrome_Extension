
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


const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'LOGIN' :
      return login(state, action.user);
    case 'SET_USER':
      return setUser(state, action.user);
    default:
      return state;
  }

};

export default reducer;