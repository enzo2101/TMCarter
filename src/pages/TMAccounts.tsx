import { Field, Form, Formik } from 'formik';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import useApi from '../hooks/useApi';

export const TMAccounts = () => {
  const api = useApi();

  return (
    <div className="flex justify-center items-center gap-10">
      <div>
        <Header />
        <Sidebar />
        <div>
          <h1 className="text-4xl font-bold mb-6">TMAccount</h1>
          <Formik
            initialValues={{
              TMemail: '',
              TMpassword: '',
            }}
            onSubmit={(values, { resetForm }) => {
              api
                .SendTMAccount(values.TMemail, values.TMpassword)
                .then((response) => console.log(response))
                .catch((error) =>
                  console.error(
                    'There was a problem with the request:',
                    error.message
                  )
                );
              resetForm();
            }}>
            {({ values }) => (
              <div className="flex">
                <Form className="flex flex-col">
                  <Field
                    type="email"
                    name="TMemail"
                    placeholder="Email"
                    value={values.TMemail}
                    className="mt-2 rounded-3xl bg-TMCarter border-[1px] border-TMBorder text-white p-4 w-[500px] outline-none"
                  />
                  <Field
                    type="password"
                    name="TMpassword"
                    placeholder="Password"
                    value={values.TMpassword}
                    className="mt-2 rounded-3xl bg-TMCarter border-[1px] border-TMBorder text-white p-4 w-[500px] outline-none"
                  />
                  <button
                    type="submit"
                    className="border-[1px] border-transparent border-solid rounded-xl bg-zinc-600 hover:text-white p-2 m-2 cursor-pointer">
                    Add TMAccount
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
