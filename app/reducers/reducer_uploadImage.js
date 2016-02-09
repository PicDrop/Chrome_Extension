import { domainParse } from '../utils'
const defaultState = {url: '', tags: [], folder: 'test', domain: '', note: '', description: ''};




function addUrl(state, data) {
  const newState = Object.assign({}, state);
  newState.url = data.srcUrl;
  newState.domain = domainParse(data.pageUrl);
  newState.description = data.alt;
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

function updateNotes (state, note) {
  const newState = Object.assign({}, state);
  newState.note = note;
  return newState;
}

function updateDescription (state, value) {
  const newState = Object.assign({}, state);
  newState.description = value;
  return newState;
}


const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'ADD_URL' :
      return addUrl(state, action.payload);
    case 'ADD_TAG':
      return addTag(state, action.tag);
    case 'REMOVE_TAG':
      return removeTag(state, action.index);
    case 'UPDATE_NOTES':
      return updateNotes(state, action.note);
    case 'UPDATE_DESCRIPTION':
      return updateDescription(state, action.value);
    default:
      return state;
  }

};

export default reducer;