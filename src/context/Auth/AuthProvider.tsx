import useAuthApi from '../../hooks/useAuthApi';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const api = useAuthApi();

  const register = async (username: string, password: string) => {
    const response = await api.register(username, password);
    if (response) {
      return response;
    }
  };

  const login = async (username: string, password: string) => {
    const response = await api.login(username, password);
    if (response) {
      localStorage.setItem('token', response.token);
      return response;
    }
  };

  return (
    <AuthContext.Provider value={{ login, register }}>
      {children}
    </AuthContext.Provider>
  );
};
