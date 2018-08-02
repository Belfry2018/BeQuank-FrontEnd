export const AUTHORIZATION_TOKEN = "token";
export const AUTHORIZATION_ROLE = "role";
export const ALL_ROLE_TYPE = ["NORMAL"];

export const getRole = () => {
    return localStorage.getItem(AUTHORIZATION_ROLE);
};

export const setRole = (role) => {
    return localStorage.setItem(AUTHORIZATION_ROLE, role);
};

export const getToken = () => {
    return localStorage.getItem(AUTHORIZATION_TOKEN);
};

export const setToken = (token) => {
    return localStorage.setItem(AUTHORIZATION_TOKEN, token);
};

export const setAuthorization = ({role, token}) => {
    return setRole(role) && setToken(token);
};

export const judgeAuthorization = (role) => {
    if (!role) return true;

    const localRole = getRole();

    if(!localRole) return false;

    if (typeof role === "string") {
        return localRole === role;
    }

    if (Array.isArray(role)) {
        return role.indexOf(localRole) !== -1;
    }
};

