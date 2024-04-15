import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081/',
});

export const useApi = () => ({
  GetEventInfo: async ({ EventURL }: { EventURL: string }) => {
    try {
      const response = await api.get(
        'getDates'
        // 'getDates?eventUrl=' + EventURL
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
        // 'getSeats?uuid=' + UUID + '&dateId=' + date
      );
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  },
});
