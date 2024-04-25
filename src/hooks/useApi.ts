import axios from 'axios';
import { valuestype } from '../types/valuesType';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8080',
  headers: {
    'Authorization':
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjF9.U8vklm5sx2lSfAJjpN9A4vu5aeJcvAX-WRzzUtXtRFA',
  },
});

const useApi = () => ({

  GetCards: async () => {
    try {
      const response = await api.get('/user/cards');
      if (response.data) {
        return response.data.cards;
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  },

  GetProxies: async () => {
    try {
      const response = await api.get('/user/proxies');
      if (response.data) {
        return response.data.proxies;
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  },
  
  GetEventInfo: async (values: valuestype) => {
    try {
      console.log(values);
      const response = await api.get(
        `/event/getDates?eventUrl=${values.EventURL}&proxyGroupId=${values.ProxyID}&cardGroupId=${values.CardID}`
      );
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  },

  GetSeatsInfo: async (date: number) => {
    try {
      console.log(date)
      const response = await api.get(`/event/getSeats?&dateId=${date}`);
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
  },
});

export default useApi;
