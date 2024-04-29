import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

const useAuthApi = () => ({
  register: async (username: string, password: string) => {
    try {
      const response = await api.post('/auth/register', { username, password });
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  },
  login: async (username: string, password: string) => {
    try {
      const response = await api.post('/auth/login', { username, password });
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  },
});

export default useAuthApi;
