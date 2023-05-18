export function isLoggedIn() {
  const user = getLoggedInUser();
  return user !== null;
}

export function getLoggedInUser() {
  return JSON.parse(sessionStorage.getItem('user'));
}

