const local_storage = {
  has(key) {
    return localStorage.getItem(key) !== null;
  },

  get(key, def = null) {
    const value = localStorage.getItem(key);
    return value === null ? def : value;
  },

  set(key, value) {
    localStorage.setItem(key, value);
  },

  getObj(key, def = null) {
    const value = localStorage.getItem(key);
    return value === null ? def : JSON.parse(value);
  },

  setObj(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  unset(key) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  },
};

export { local_storage };
