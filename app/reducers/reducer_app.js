const defaultState = {currentView: 'main', currentFolder: ''};

const setCurrentView = (state, view) => {
  const newState = Object.assign({}, state);
  newState.currentView = view;
  return newState;
};

const setCurrentFolder = (state, folder) => {
  const newState = Object.assign({}, state);
  newState.currentFolder = folder;
  return newState;
};

const setCurrentViewFolder = (state, view, folder) => {
  const newState = Object.assign({}, state);
  newState.currentView = view;
  newState.currentFolder = folder;
  return newState;
}


const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_VIEW':
      return setCurrentView(state, action.view);
    case 'SET_CURRENT_FOLDER':
      return setCurrentFolder(state, action.folder);
    case 'SET_CURRENT_VIEW_FOLDER':
      return setCurrentViewFolder(state, action.view, action.folder);
    default:
      return state;
  }

};

export default reducer;

