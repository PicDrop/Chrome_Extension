import Store from './store';

export function isAuth () {
  const state = Store.getState();
  return state.user.isAuth;
}