import axios from 'axios';
// const ROOT_URL = 'http://localhost:3000/api/'


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
  console.log("calling action");
  return {
    type: 'SET_USER',
    user: user
  };
}


