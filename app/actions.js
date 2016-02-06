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
  }
}


