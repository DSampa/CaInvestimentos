export const TOKEN_KEY = "f719d7d77a997df7bce8a27873b756f9cbd7a8e0a8baed2f03e506a2c7ab57b0";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (response:any) => {
  localStorage.clear();
  localStorage.setItem(TOKEN_KEY, response.token);
  localStorage.setItem("user", JSON.stringify(response.user))
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};