import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081/',
});

export const useApi = () => ({
  GetEventInfo: async ({ EventURL }: { EventURL: string }) => {
    try {
      const response = await api.get('getDates?eventUrl=' + EventURL);
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  },
  GetSeatsInfo: async (UUID: string, date: string) => {
    try {
      const response = await api.get(`getSeats?uuid ${UUID} dateId=${date}`);
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  },
  SendProxies: async (proxies: string[]) => {
    try {
      const response = await api.post('/proxies', { proxies });
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  },
  SendCreditCard: async (creditCard: { [key: string]: string }) => {
    try {
      const response = await api.post('/card', { creditCard });
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  },
  SelectedSeat: async (seat: any) => {
    try {
      console.log(seat);
      const response = await api.post('/seat', { seat });
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  }
});
