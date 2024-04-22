import { Formik, Field, Form } from 'formik';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { useApi } from '../hooks/useApi';

export const Cards = () => {

  const api = useApi();

  return (
    <div>
      <Header />
      <Sidebar />
      <div>
        <Formik
          initialValues={{
            CardNumber: '',
            CVV: '',
            Month: '',
            Year: '',
            FirstName: '',
            LastName: '',
            Address: '',
            City: '',
            State: '',
            ZipCode: '',
          }}
          onSubmit={(values, { resetForm }) => {
            const creditCard = {
              CardNumber: values.CardNumber,
              CVV: values.CVV,
              Month: values.Month,
              Year: values.Year,
              FirstName: values.FirstName,
              LastName: values.LastName,
              Address: values.Address,
              City: values.City,
              State: values.State,
              ZipCode: values.ZipCode,
            }
            api.SendCreditCard(creditCard);
            resetForm();
          }}>
          {({ values }) => (
            <div>
              <h1 className="text-4xl font-bold mb-6 ">Credit Card</h1>
              <Form className="grid grid-cols-3 gap-4">
                <Field
                  type="text"
                  name="CardNumber"
                  placeholder="Card Number"
                  value={values.CardNumber}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-3"
                />
                <Field
                  type="text"
                  name="CVV"
                  placeholder="CVV"
                  value={values.CVV}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-1"
                />
                <Field
                  type="text"
                  name="Month"
                  placeholder="Month"
                  value={values.Month}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-1"
                />
                <Field
                  type="text"
                  name="Year"
                  placeholder="Year"
                  value={values.Year}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-1"
                />
                <Field
                  type="text"
                  name="FirstName"
                  placeholder="FirstName"
                  value={values.FirstName}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-3"
                />
                <Field
                  type="text"
                  name="LastName"
                  placeholder="LastName"
                  value={values.LastName}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-3"
                />
                <Field
                  type="text"
                  name="Address"
                  placeholder="Address"
                  value={values.Address}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-3"
                />
                <Field
                  type="text"
                  name="City"
                  placeholder="City"
                  value={values.City}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-2"
                />
                <Field
                  type="text"
                  name="State"
                  placeholder="State"
                  value={values.State}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-1"
                />
                <Field
                  type="text"
                  name="ZipCode"
                  placeholder="ZipCode"
                  value={values.ZipCode}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-3"
                />
                <button
                  className="border-[1px] border-transparent border-solid rounded-xl bg-zinc-600 hover:text-white p-2 m-2 cursor-pointer col-span-1 col-start-2"
                  type="submit">
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
