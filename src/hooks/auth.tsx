import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface AuthState {
  token: string;
  user: string;
  type: string;
  roomId: string;
}

interface SignInCredentials {
  name: string;
  roomId: string;
  password: string;
}

interface AuthContextData {
  account: string;
  roomId: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const account = localStorage.getItem('@ScrumPokerOnline:account');

    if (account) {
      return JSON.parse(account);
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ name, roomId, password }) => {
    const response = await api.post(`/room/enter/${roomId}`, {
      name,
      roomId,
      password,
    });

    const account = { ...response.data, user: name, roomId } as AuthState;

    localStorage.setItem('@ScrumPokerOnline:account', JSON.stringify(account));

    setData(account);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@ScrumPokerOnline:account');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ roomId: data.roomId, account: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
