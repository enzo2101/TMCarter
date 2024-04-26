import { useEffect, useState } from 'react';
import useApi from '../hooks/useApi';
import { InfoContext } from './InfoContext';
import { proxyGroup } from '../types/proxyGroupType';
import { cardGroup } from '../types/cardGroupType';

export const InfoProvider = ({children}: {children: JSX.Element}) => {
  const api = useApi();

  const [proxyGroup, setProxyGroup] = useState<proxyGroup | null>(null);
  const [cardGroup, setCardGroup] = useState<cardGroup | null>(null);

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
  }, []);

  return (
    <InfoContext.Provider value={{ proxyGroup, cardGroup }}>
      {children}
    </InfoContext.Provider>
  );
};
