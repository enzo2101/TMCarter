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
import { idproxy } from '../types/idproxy';
import { idCards } from '../types/idCards';

export const Checkout = () => {
  const api = useApi();

  const [eventInfo, setEventInfo] = useState<Dates>();
  const [seatsInfo, setSeatsInfo] = useState<Seats>();
  const [idProxy, setIdProxy] = useState([]);
  const [idCard, setIdCard] = useState([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState<boolean>();

  moment.locale('en');

  useEffect(() => {
    const GetProxies = async () => {
      api
        .GetProxies()
        .then((response) => {
          setIdProxy(response);
        })
        .catch((error) => {
          console.error('There was a problem with the request:', error.message);
        });
    };

    GetProxies();
    const GetCards = async () => {
      api
        .GetCards()
        .then((response) => {
          setIdCard(response);
        })
        .catch((error) => {
          console.error('There was a problem with the request:', error.message);
        });
    };
    GetCards();
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="flex flex-col justify-center items-center text-white space-y-4">
        {!eventInfo && (
          <div>
            <Formik
              initialValues={{ EventURL: '', ProxyID: '', CardID: '' }}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  const response: Dates = await api.GetEventInfo(values);
                  setIsLoaded(false)

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
                <Form className="flex flex-col space-y-3 justify-center items-center">
                  <Field
                    type="text"
                    name="EventURL"
                    placeholder="Event URL"
                    value={values.EventURL}
                    className="mt-2 rounded-3xl bg-TMCarter border-[1px] border-TMBorder text-white p-4 w-[500px] outline-none"></Field>
                  {idProxy && (
                    <Field
                      as="select"
                      name="ProxyID"
                      className="p-4 rounded-lg w-2/3">
                      <option value="">Select Proxy Group</option>
                      {idProxy.map((proxy: idproxy, index) => (
                        <option
                          key={index}
                          value={proxy.ID}>
                          {proxy.Name}
                        </option>
                      ))}
                    </Field>
                  )}
                  {idCard && (
                    <Field
                      as="select"
                      name="CardID"
                      className="p-4 rounded-lg w-2/3">
                      <option value="">Select Card Group</option>
                      {idCard.map((card: idCards, index) => (
                        <option
                          key={index}
                          value={card.id}>
                          {card.number.substring(card.number.length - 4)}
                        </option>
                      ))}
                    </Field>
                  )}
                  <button
                    className="border-[1px] border-transparent border-solid rounded-xl bg-zinc-600 hover:text-white p-2 m-2 cursor-pointer w-full"
                    type="submit"
                    disabled={isSubmitting}>
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        )}
        {isLoaded && (
          <div>Loading...</div>
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
