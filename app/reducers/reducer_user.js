
const defaultState = {};

function login(state, user) {
  console.log(state)
  
  const newState = Object.assign({}, user);
  return newState;
}


const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'LOGIN' :
      return login(state, action.user);
    default:
    return state;
  }

};

export default reducer;