export const addDataToLocalStorage = (userEmail, tokens) => {
    localStorage.setItem('account', JSON.stringify(userEmail));
    localStorage.setItem('tokens', JSON.stringify(tokens));
};

export const logout = () => {
    localStorage.removeItem('account');
    localStorage.removeItem('tokens');
};

export const isUserLogin = () => {
    const user = localStorage.getItem('account');
    if(!user) return false;
    return true;
};

export const getAuthConfig = () => {
    const tokens = JSON.parse(localStorage.getItem('tokens'));
    if(!tokens) return false;
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
        headers: {
            Authorization
        }
    };
    return config;
};