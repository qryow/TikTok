export const addDataToLocalStorage = (userEmail, token) => {
    localStorage.setItem('account', JSON.stringify(userEmail));
    localStorage.setItem('token', JSON.stringify(token));
};

export const addEmailToLocalStorage = (userEmail) => {
  localStorage.setItem('account', JSON.stringify(userEmail));
}

export const logout = () => {
    localStorage.removeItem('account');
    localStorage.removeItem('token');
};

export const isUserLogin = () => {
    const user = localStorage.getItem('account');
    if(!user) return false;
    return true;
};

export const getAuthConfig = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    if(!token) return false;
    const Authorization = `Token ${token.token}`;
    const config = {
        headers: {
          Authorization
        }
    };
    return config;
};