import { Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import { AuthContext } from '../context/Auth/AuthContext';
import { redirect } from 'react-router';

export const Register = () => {
  const auth = useContext(AuthContext);

  return (
    <div className="bg-transparent h-[500px] w-[500px] border-[1px] rounded-xl flex flex-col ">
      <h1 className="pt-20 text-4xl font-bold">Register</h1>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values) => {
          auth.register(values.username, values.password).then((response) => {response && redirect('/login')}).catch((error) => console.log(error));
        }}>
        {({ values }) => (
          <Form className="flex flex-col items-center justify-center h-full space-y-4">
            <Field
              type="text"
              name="username"
              value={values.username}
              placeholder="Username"
              className="mt-2 rounded-3xl bg-TMCarter border-[1px] border-TMBorder text-white p-4 w-3/4 outline-none" />
            <Field
              type="password"
              name="password"
              value={values.password}
              placeholder="Password"
              className="mt-2 rounded-3xl bg-TMCarter border-[1px] border-TMBorder text-white p-4 w-3/4 outline-none" />
            <button
              type="submit"
              className="border-[1px] border-transparent border-solid rounded-xl bg-zinc-600 hover:text-white p-2 m-2 cursor-pointer w-1/3">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
