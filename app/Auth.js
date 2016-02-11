import Store from './store';

export function isAuth () {
  const state = Store.getState();
  console.log("state from isAuth is", state);
  return state.user.isAuth;
}