export const addDataToLocalStorage = (userEmail, token) => {
    localStorage.setItem('account', JSON.stringify(userEmail));
    localStorage.setItem('token', JSON.stringify(token));
};

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
    console.log(token);
    if(!token) return false;
    const Authorization = `Token ${token.token}`;
    const config = {
        headers: {
          Authorization
        }
    };
    console.log(config);
    return config;
};