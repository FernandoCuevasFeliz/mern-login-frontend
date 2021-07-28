import { createContext, useEffect, useState } from 'react';
import { AuthService } from 'services/AuthService';

export const AuthContext = createContext();

const userState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
  token: localStorage.getItem('token') || null,
};

export const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(userState);

  useEffect(() => {}, [userAuth]);

  const login = async (username, password) => {
    const res = await AuthService.login(username, password);
    const user = res.data;
    delete user._id;

    setUserAuth({
      user,
      token: res.token,
    });

    console.log(res);
    return res;
  };

  return (
    <AuthContext.Provider
      value={{
        user: userAuth.user,
        token: userAuth.token,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
