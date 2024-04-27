import { useContext } from 'react';
import { InfoContext } from '../context/InfoContext';
import { Field } from 'formik';
import { ProxyGroup } from '../types/ProxyGroupType';

  export const ProxiesSelector = ({proxyPlaceholder}: {proxyPlaceholder: string}) => {
  const info = useContext(InfoContext);

  const proxies = info?.ProxyGroup;

  return (
    <div className="w-full">
      {Array.isArray(proxies) && proxies && (
        <Field
          as="select"
          name="ProxyID"
          className="p-4 rounded-lg w-2/3">
          <option>{proxyPlaceholder}</option>
          {proxies.map((proxy: ProxyGroup, index) => (
            <option
              key={index}
              value={proxy.ID}>
              {proxy.Name}
            </option>
          ))}
        </Field>
      )}
    </div>
  );
};
