
import cookie from 'js-cookie';

export const login = token => {
  return cookie.set(`${process.env.REACT_APP_PROJECT_NAME}-token`, token, { expires: 1 });
};

export const isLoggedIn = () => {
  return !!cookie.get(`${process.env.REACT_APP_PROJECT_NAME}-token`);
}

export const logout = () => {
  cookie.remove(`${process.env.REACT_APP_PROJECT_NAME}-token`);

  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now());
  window.location.reload();
};
