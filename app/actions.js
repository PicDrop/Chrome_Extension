import axios from 'axios';
// const ROOT_URL = 'http://localhost:4000/api/'


export function addTag (tag) {
  return {
    type: 'ADD_TAG',
    tag: tag
  };
}

export function removeTag (index) {
  return {
    type: 'REMOVE_TAG',
    index: index
  };
}

export function setUser (user) {
  console.log("setting user")
  return {
    type: 'SET_USER',
    user: user
  };
}

export function addUrl (data) {
  return {
    type: 'ADD_URL',
    payload: data
  };
}

export function updateNotes (note) {
  return {
    type: "UPDATE_NOTES",
    note: note
  };
}

export function updateDescription (value) {
  return {
    type: "UPDATE_DESCRIPTION",
    value: value
  };
}

export function setCurrentFolder (folder) {
  return {
    type: 'SET_CURRENT_FOLDER',
    folder: folder
  };
}

export function setCurrentView (view) {
  return {
    type: 'SET_CURRENT_VIEW',
    view: view
  };
}

export function setViewAndFolder (view, folder) {
  return {
    type: 'SET_CURRENT_VIEW_FOLDER',
    view: view,
    folder: folder
  };
}


