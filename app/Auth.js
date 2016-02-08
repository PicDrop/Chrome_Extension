import Store from './store';

export function isAuth () {
  const state = Store.getState();
  console.log(state.user.isAuth)
  return state.user.isAuth;
}