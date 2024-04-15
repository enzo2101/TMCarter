import { Formik, Field, Form } from 'formik';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

interface FormValues {
  CardNumber: string;
  CVV: string;
  Month: string;
  Year: string;
  FirstName: string;
  LastName: string;
  Address: string;
  City: string;
  State: string;
  ZipCode: string;
}

export const Cards = () => {
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
          // validate={(values) => {
          //   const errors: Partial<FormValues> = {};

          //   // Validating CardNumber
          //   if (!values.CardNumber) {
          //     errors.CardNumber = 'Required';
          //   } else if (values.CardNumber.length !== 16) {
          //     errors.CardNumber = 'Must be 16 characters';
          //   }

          //   // Validating CVV
          //   if (!values.CVV) {
          //     errors.CVV = 'Required';
          //   } else if (values.CVV.length !== 3) {
          //     errors.CVV = 'Must be 3 characters';
          //   }

          //   // Validating Month
          //   const month = parseInt(values.Month);
          //   if (!values.Month) {
          //     errors.Month = 'Required';
          //   } else if (isNaN(month) || month < 1 || month > 12) {
          //     errors.Month = 'Invalid month';
          //   }

          //   // Validating Year
          //   const year = parseInt(values.Year);
          //   if (!values.Year) {
          //     errors.Year = 'Required';
          //   } else if (isNaN(year) || year < 2024 || year > 2050) {
          //     errors.Year = 'Invalid year';
          //   }

          //   // Validating FirstName
          //   if (!values.FirstName) {
          //     errors.FirstName = 'Required';
          //   }

          //   // Validating LastName
          //   if (!values.LastName) {
          //     errors.LastName = 'Required';
          //   }

          //   // Validating Address
          //   if (!values.Address) {
          //     errors.Address = 'Required';
          //   }

          //   // Validating City
          //   if (!values.City) {
          //     errors.City = 'Required';
          //   }

          //   // Validating State
          //   if (!values.State) {
          //     errors.State = 'Required';
          //   }

          //   // Validating ZipCode
          //   if (!values.ZipCode) {
          //     errors.ZipCode = 'Required';
          //   }

          //   return errors;
          // }}
          onSubmit={(values, { resetForm }) => {
            alert(JSON.stringify(values, null, 2));
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
                  name="Mounth"
                  placeholder="Mounth"
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
