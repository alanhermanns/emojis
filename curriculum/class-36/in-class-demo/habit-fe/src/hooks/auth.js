import React, { createContext, useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser, verifyAuth } from '../services/authApi';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [authError, setAuthError] = useState();

  useEffect(() => {
    // check if logged in????
    verifyAuth()
      .then(user => {
        setUser(user);
        history.push('/');
      })
      .catch(() => {
        history.push('/login');
      });
  }, []);

  const login = (email, password) => {
    setAuthError(null);
    return loginUser(email, password)
      .then(user => {
        setUser(user);
        history.push('/');
      })
      .catch(err => {
        setAuthError(err.message);
      });
  };

  return (
    <SessionContext.Provider value={{ user, login, authError }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionUser = () => {
  const { user } = useContext(SessionContext);
  return user;
};

export const useHasSession = () => {
  const user = useSessionUser();
  return !!user;
};

export const useLogin = () => {
  const { login, authError } = useContext(SessionContext);
  return { login, authError };
};

export const useAuthError = () => {
  const { authError } = useContext(SessionContext);
  return authError;
};
