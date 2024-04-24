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
          }}
          onSubmit={(values, { resetForm }) => {
            const valuesParsed = values.Proxies.split('\n');
            api.SendProxies(valuesParsed);
            resetForm();
          }}>
          {({ values }) => (
            <div className="flex">
              <Form>
                <Field
                  as="textarea"
                  type="text"
                  name="Proxies"
                  placeholder="127.0.0.1:8080:user:pass"
                  value={values.Proxies}
                  style={{
                    marginTop: '10px',
                    borderRadius: '25px',
                    backgroundColor: '#151517',
                    borderStyle: 'solid',
                    borderColor: '#222024',
                    color: 'white',
                    padding: '10px',
                    width: '500px',
                    outline: 'none',
                    height: '200px',
                  }}
                />
                <button
                  type="submit"
                  className="border-[1px] border-transparent border-solid rounded-xl bg-zinc-600 hover:text-white p-2 m-2 cursor-pointer">
                  Submit
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};
