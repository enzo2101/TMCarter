import { Field, Form, Formik } from 'formik';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import useApi from '../hooks/useApi';
import { useContext, useEffect, useState } from 'react';
import { ProxyGroup } from '../types/ProxyGroupType';
import { InfoContext } from '../context/InfoContext';

export const Proxies = () => {
  const api = useApi();

  const info = useContext(InfoContext);

  const proxies = info?.ProxyGroup;

  const [ProxyGroupID, setProxyGroupID] = useState('');

  const [currentProxyGroup, setCurrentProxyGroup] = useState<ProxyGroup | ''>(
    ''
  );

  useEffect(() => {
    if (ProxyGroupID && Array.isArray(proxies)) {
      setCurrentProxyGroup(
        proxies.find((proxy: ProxyGroup) => {
          return Number(proxy.ID) === Number(ProxyGroupID);
        })
      );
    } else {
      setCurrentProxyGroup('');
    }
  }, [ProxyGroupID]);

  return (
    <div className="flex justify-center items-center gap-10">
      <div>
        <Header />
        <Sidebar />
        <div>
          <h1 className="text-4xl font-bold mb-6">Proxies</h1>
          <Formik
            initialValues={{
              Proxies:
                currentProxyGroup && Array.isArray(currentProxyGroup.Proxies)
                  ? currentProxyGroup.Proxies.join('\n')
                  : '',
              ProxiesName:
                currentProxyGroup && typeof currentProxyGroup === 'object'
                  ? currentProxyGroup.Name
                  : '',
            }}
            enableReinitialize={true}
            onSubmit={(values, { resetForm }) => {
              const proxiesParsed = values.Proxies.split('\n');
              {
                (!ProxyGroupID &&
                  api.SendProxies(values.ProxiesName, proxiesParsed)) ||
                  api.UpdateProxies(
                    ProxyGroupID,
                    values.ProxiesName,
                    proxiesParsed
                  ); window.location.reload();
              }
              resetForm();
            }}>
            {({ values }) => (
              <div className="flex">
                <Form className="flex flex-col">
                  <Field
                    type="text"
                    name="ProxiesName"
                    placeholder="Group Name"
                    value={values.ProxiesName}
                    className="mt-2 rounded-3xl bg-TMCarter border-[1px] border-TMBorder text-white p-4 w-[500px] outline-none"
                  />
                  <Field
                    as="textarea"
                    type="text"
                    name="Proxies"
                    placeholder="127.0.0.1:8080:user:pass"
                    value={values.Proxies}
                    className="mt-2 rounded-3xl bg-TMCarter border-[1px] border-TMBorder text-white p-4 w-[500px] outline-none h-56"
                  />
                  <button
                    type="submit"
                    className="bordesr-[1px] border-transparent border-solid rounded-xl bg-zinc-600 hover:text-white p-2 m-2 cursor-pointer">
                    {!ProxyGroupID && <span>Create Proxy Group</span> || <span>Update Proxy Group</span>}
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
      <div className="w-96">
        <select
          value={ProxyGroupID}
          onChange={(e) => setProxyGroupID(e.currentTarget.value)}>
          <option value="" disabled >Select a proxy group to update</option>
          {Array.isArray(proxies) &&
            proxies?.map((proxy: ProxyGroup) => (
              <option
                key={proxy.ID}
                value={proxy.ID}>
                {proxy.Name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};
