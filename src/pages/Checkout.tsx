import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Formik, Form, Field } from 'formik';
import { Dates } from '../types/Dates';
import useApi from '../hooks/useApi';
import moment from 'moment';
import { Seats } from '../types/Seats';
import { SelectedDate } from '../components/SelectedDate';
import { DateInfo } from '../components/DateInfo';

export const Checkout = () => {
  const api = useApi();

  const [eventInfo, setEventInfo] = useState<Dates>();
  const [seatsInfo, setSeatsInfo] = useState<Seats>();
  const [selectedDate, setSelectedDate] = useState<string>('');

  moment.locale('en');

  useEffect(() => {
    const GetProxies = async () => {
      api.GetProxies().then((response) => {
        localStorage.setItem('proxies', JSON.stringify(response));
      }).catch((error) => {
        console.error('There was a problem with the request:', error.message);
      });
    };
    GetProxies();
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="flex flex-col justify-center items-center text-white space-y-4">
        {!eventInfo && (
          <div>
            <Formik
              initialValues={{ EventURL: '' }}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  const response: Dates = await api.GetEventInfo(values);

                  if (response.Event.date) {
                    setEventInfo(response);
                    setSubmitting(false);
                    resetForm();
                  }
                } catch (error) {
                  console.error(
                    'There was a problem with the request:',
                    error.message
                  );
                }
              }}>
              {({ values, isSubmitting }) => (
                <Form>
                  <Field
                    type="text"
                    name="EventURL"
                    placeholder="Event URL"
                    value={values.EventURL}
                    className="mt-2 rounded-3xl bg-TMCarter border-[1px] border-TMBorder text-white p-4 w-[500px] outline-none"></Field>
                  <button
                    className="border-[1px] border-transparent border-solid rounded-xl bg-zinc-600 hover:text-white p-2 m-2 cursor-pointer"
                    type="submit"
                    disabled={isSubmitting}>
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        )}
        {eventInfo && (
          <div>
            <DateInfo
              eventInfo={eventInfo}
              setSeatsInfo={setSeatsInfo}
              setSelectedDate={setSelectedDate}
            />
          </div>
        )}
        {eventInfo && selectedDate && (
          <div>
            <SelectedDate
              seatsInfo={seatsInfo}
              selectedDate={selectedDate}
              eventInfo={eventInfo}
            />
          </div>
        )}
      </div>
    </div>
  );
};
