const defaultState = {url: '', tags: []};

function setUrl(state, url) {
  const newState = Object.assign({}, state);
  newState.url = url;
  return newState;
}

function addTag (state, tag) {
  const newState = Object.assign({}, state);
  newState.tags = [...state.tags, tag];
  return newState;
}

function removeTag (state, index) {
  const newState = Object.assign({}, state);
  newState.tags = [...state.tags];
  newState.tags.splice(index, 1);
  return newState;
}



const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'ADD_URL' :
      return setUrl(state, action.url);
    case 'ADD_TAG':
      return addTag(state, action.tag);
    case 'REMOVE_TAG':
      return removeTag(state, action.index);
    default:
    return state;
  }

};

export default reducer;