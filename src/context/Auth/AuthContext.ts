import { createContext } from 'react';

type AuthContextType = {
  login: (username: string, password: string) => Promise<boolean>;
  register: (username: string, password: string) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextType>(null!);