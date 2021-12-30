export function setLocalStorage(key: string, value) {
  return localStorage.setItem(key, value);
}

export function getLocalStorage(key: string) {
  return localStorage.getItem(key);
}
