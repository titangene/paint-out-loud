import Cookies from 'js-cookie';

const tokenKey = 'paint-out-loud-token';

export const Token = {
  get() {
    return Cookies.get(tokenKey);
  },
  set(value) {
    Cookies.set(tokenKey, value);
  },
  remove() {
    Cookies.remove(tokenKey);
  }
};
