import { useEffect, useState } from 'react';
import useApi from '../hooks/useApi';
import { InfoContext } from './InfoContext';
import { ProxyGroup } from '../types/ProxyGroupType';
import { CardGroup } from '../types/CardGroupType';
import { TMAccount } from '../types/TMAccountType';

export const InfoProvider = ({ children }: { children: JSX.Element }) => {
  const api = useApi();

  const [ProxyGroup, setProxyGroup] = useState<ProxyGroup | null>(null);
  const [CardGroup, setCardGroup] = useState<CardGroup | null>(null);
  const [TMAccount, setTMAccount] = useState<TMAccount | null>(null);

  useEffect(() => {
    const GetProxies = async () => {
      api
        .GetProxies()
        .then((response) => {
          setProxyGroup(response);
        })
        .catch((error) => {
          console.error('There was a problem with the request:', error.message);
        });
    };

    GetProxies();
    const GetCards = async () => {
      api
        .GetCards()
        .then((response) => {
          setCardGroup(response);
        })
        .catch((error) => {
          console.error('There was a problem with the request:', error.message);
        });
    };
    GetCards();

    const GetTMAccount = async () => {
      api
        .GetTMAccount()
        .then((response) => {
          setTMAccount(response);
        })
        .catch((error) => {
          console.error('There was a problem with the request:', error.message);
        });
    };
    GetTMAccount()
  }, []);

  return (
    <InfoContext.Provider value={{ TMAccount, ProxyGroup, CardGroup }}>
      {children}
    </InfoContext.Provider>
  );
};
