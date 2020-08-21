
import cookie from 'js-cookie';

const tokenName = `${process.env.REACT_APP_PROJECT_NAME}-token`;

export const login = async  token => {
  return cookie.set(tokenName, token, { expires: 1 });
};

export const isLoggedIn = () => {
  return !!cookie.get(tokenName);
}

export const logout = () => {
  cookie.remove(tokenName);
  window.localStorage.setItem('logout', Date.now());
  window.location.reload();
};
