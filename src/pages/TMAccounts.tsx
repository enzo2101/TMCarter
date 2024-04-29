import { Field, Form, Formik } from 'formik';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import useApi from '../hooks/useApi';
import { useContext, useEffect, useState } from 'react';
import { InfoContext } from '../context/InfoContext';
import { TMAccount } from '../types/TMAccountType';

export const TMAccounts = () => {
  const api = useApi();

  const info = useContext(InfoContext);

  const TMAccounts = info?.TMAccount;

  const [TMAccountID, setTMAccountID] = useState('');

  const [currentTMAccount, setCurrentTMAccount] = useState<TMAccount | ''>('');

  useEffect(() => {
    if (TMAccountID && Array.isArray(TMAccounts)) {
      setCurrentTMAccount(
        TMAccounts.find((TMAccount: TMAccount) => {
          return Number(TMAccount.ID) === Number(TMAccountID);
        })
      );
    } else {
      setCurrentTMAccount('');
    }
  }, [TMAccountID]);

  useEffect(() => {
    console.log(currentTMAccount);
  }, [currentTMAccount]);

  return (
    <div className="flex justify-center items-center gap-10">
      <div>
        <Header />
        <Sidebar />
        <div>
          <h1 className="text-4xl font-bold mb-6">TMAccount</h1>
          <Formik
            initialValues={{
              TMemail:
                currentTMAccount && typeof currentTMAccount === 'object'
                  ? currentTMAccount.Email
                  : '',
              TMpassword:
                currentTMAccount && typeof currentTMAccount === 'object'
                  ? currentTMAccount.Password
                  : '',
            }}
            enableReinitialize={true}
            onSubmit={(values, { resetForm }) => {
              api.SendTMAccount(values.TMemail, values.TMpassword);
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
                    type={currentTMAccount && "text" || "password"}
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
      <div className="w-96">
        <select
          className="mt-2 rounded-3xl bg-TMCarter border-[1px] border-TMBorder text-white p-4 w-[300px] outline-none"
          value={TMAccountID}
          onChange={(e) => setTMAccountID(e.currentTarget.value)}>
          <option value="">Select TMAccount</option>
          {Array.isArray(TMAccounts) &&
            TMAccounts?.map((TMAccount: TMAccount) => (
              <option
                key={TMAccount.ID}
                value={TMAccount.ID}>
                {TMAccount.Email}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};
