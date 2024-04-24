import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8080',
});

const config = {
  headers: {
    'Authorization':
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjF9.U8vklm5sx2lSfAJjpN9A4vu5aeJcvAX-WRzzUtXtRFA',
  },
};

const useApi = () => ({

  GetProxies: async () => {
    try {
      const response = await api.get('/user/proxies', config);
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  },
  
  GetEventInfo: async ({ EventURL }: { EventURL: string }) => {
    try {
      const response = await api.get(
        `/event/getDates?eventUrl=${EventURL}&proxyGroupId=3`,
        config
      );
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('There was a problem with the request:', error.message);
    }
  },

  GetSeatsInfo: async (UUID: string/* , date: string */) => {
    try {
      const response = await api.get(`getSeats?uuid=${UUID}&dateId=1`, config);
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
