import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081/',
});

export const useApi = () => ({
  GetEventInfo: async ({ EventURL }: { EventURL: string }) => {
    try {
      const response = await api.get(
        'getDates'
      );
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  },
  GetSeatsInfo: async (UUID: string, date: string) => {
    try {
      const response = await api.get(
        'getSeats'
      );
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  },
});
