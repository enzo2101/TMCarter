import axios from 'axios';
import { valuestype } from '../types/valuesType';

type CreditCardData = {
  number: string;
  exp_month: string;
  exp_year: string;
  cvv: string;
  address: {
    address_line: string;
    city: string;
    country: string;
    name_on_card: string;
    phone: string;
    postal_code: string;
    state: string;
  };
};

const api = axios.create({
  baseURL: 'http://127.0.0.1:8080',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem("token")}`,
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
      const response = await api.put(`/user/proxies?groupID=${id}`, {
        group_name,
        proxies,
      });
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  },

  UpdateCards: async (CardsID: number, card: CreditCardData) => {
    try {
      const response = await api.put(`/user/cards?cardId=${CardsID}`, { card });
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
        return response.data;
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  },

  SendCreditCard: async (card: CreditCardData) => {
    try {
      const response = await api.post('/user/cards', { card });
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
