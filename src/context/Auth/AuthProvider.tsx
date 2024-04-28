import useAuthApi from '../../hooks/useAuthApi';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const api = useAuthApi();
  const register = async (username: string, password: string) => {
    try {
      const response = await api.register(username, password);
      if (response.data) {
        console.log(response.data);
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  };

  const login = async (username: string, password: string) => {
    try {
      const response = await api.login(username, password);
      if (response) {
        localStorage.setItem('token', JSON.stringify(response));
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ login, register }}>
      {children}
    </AuthContext.Provider>
  );
};
