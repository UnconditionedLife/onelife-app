export default class LocalStorageHandler {
  constructor(expirationInterval) {
    this.expirationInterval = expirationInterval * 1000;
  }

  setItem(key, value) {
    const expires = (new Date()).getTime() + this.expirationInterval;
    localStorage.setItem(key, JSON.stringify({ value, expires }));
  }

  getItem(key) {
    if (!localStorage.getItem(key)) {
      return null;
    }

    const now = (new Date()).getTime();
    const obj = JSON.parse(localStorage.getItem(key));
    if (obj.expires < now) {
      localStorage.removeItem(key);
      return null;
    }
    return obj.value;
  }
}
