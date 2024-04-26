import { Field, Form, Formik } from 'formik';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import useApi from '../hooks/useApi';

export const Proxies = () => {

  const api = useApi();

  return (
    <div>
      <Header />
      <Sidebar />
      <div>
        <h1 className="text-4xl font-bold mb-6">Proxies</h1>
        <Formik
          initialValues={{
            Proxies: '',
            ProxiesName: '',
          }}
          onSubmit={(values, { resetForm }) => {
            const proxiesParsed = values.Proxies.split('\n');
            api.SendProxies(values.ProxiesName, proxiesParsed);
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
                  className="border-[1px] border-transparent border-solid rounded-xl bg-zinc-600 hover:text-white p-2 m-2 cursor-pointer">
                  Create Proxy Group
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};
