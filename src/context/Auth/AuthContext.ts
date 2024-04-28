import { createContext } from 'react';

type AuthContextType = {
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>(null!);