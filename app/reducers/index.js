const defaultState = {url: ''};

function setUrl(state, url) {
  const newState = Object.assign({}, state);
  newState.url = url;
  return newState;
}

function test (state, test) {
  const newState = Object.assign({}, state);
  newState.url = test;
  return newState;
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'ADD_URL' :
      return setUrl(state, action.url);
    case 'TEST':
      return test(state, action.test);
  }
  return state;
};

export default reducer;