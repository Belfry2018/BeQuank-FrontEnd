export const AUTHORIZATION_TOKEN = "token";
export const AUTHORIZATION_ROLE = "role";
export const ALL_ROLE_TYPE = ["NORMAL"];

export const getRole = () => {
  return localStorage.getItem(AUTHORIZATION_ROLE);
};

export const setRole = role => {
  return localStorage.setItem(AUTHORIZATION_ROLE, role);
};

export const getToken = () => {
  return localStorage.getItem(AUTHORIZATION_TOKEN);
};

export const setToken = token => {
  return localStorage.setItem(AUTHORIZATION_TOKEN, token);
};

export const setAuthorization = ({ role, token }) => {
  return setRole(role) && setToken(token);
};

export const judgeLogin = () => {
  return !!getRole();
};

/**
 * 判断权限 role无则返回true，否则判断用户身份是否在传入的role参数中
 * @param role role可为undefined string array
 * @return {boolean} 是否具有权限
 */
export const judgeAuthorization = role => {
  if (!role) return true;

  const localRole = getRole();

  if (!localRole) return false;

  if (typeof role === "string") {
    return localRole === role;
  }

  if (Array.isArray(role)) {
    return role.indexOf(localRole) !== -1;
  }
};
