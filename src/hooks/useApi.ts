import axios from 'axios';
import { valuestype } from '../types/valuesType';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8080',
  headers: {
    'Content-Type': 'application/json',
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

  UpdateProxies: async (id: string, group_name: string, proxies: string[]) => {
    try {
      const response = await api.put(`/user/proxies?groupID=${id}`, { group_name, proxies });
      if (response.data) {
        return response.data;
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
        `/event/getDates?eventUrl=${values.EventURL}&ProxyGroupId=${values.ProxyID}&CardGroupId=${values.CardID}`
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

  SendProxies: async (group_name: string, proxies: string[]) => {
    try {
      const response = await api.post('/user/proxies', { group_name, proxies });
      if (response.data) {
        console.log(response.data)
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
