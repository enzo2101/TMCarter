import { useContext, useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Formik, Form, Field } from 'formik';
import { Dates } from '../types/Dates';
import useApi from '../hooks/useApi';
import moment from 'moment';
import { Seats } from '../types/Seats';
import { SelectedDate } from '../components/SelectedDate';
import { DateInfo } from '../components/DateInfo';
import { InfoContext } from '../context/InfoContext';
import { proxyGroup } from '../types/proxyGroupType';
import { cardGroup } from '../types/cardGroupType';


export const Checkout = () => {
  const api = useApi();

  const [eventInfo, setEventInfo] = useState<Dates>();
  const [seatsInfo, setSeatsInfo] = useState<Seats>();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState<boolean>();

  const info = useContext(InfoContext);

  const proxies = info?.proxyGroup;

  const cards = info?.cardGroup;

  moment.locale('en');

  return (
    <>
      <Header />
      <Sidebar />
      <div>
        <div className="flex flex-col justify-center items-center text-white space-y-4">
          {!eventInfo && (
            <div>
              <Formik
                initialValues={{ EventURL: '', ProxyID: '', CardID: '' }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  try {
                    const response: Dates = await api.GetEventInfo(values);
                    setIsLoaded(false);

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
                    {Array.isArray(proxies) && proxies && (
                      <Field
                        as="select"
                        name="ProxyID"
                        className="p-4 rounded-lg w-2/3">
                        <option value="">Select Proxy Group</option>
                        {proxies.map((proxy: proxyGroup, index) => (
                          <option
                            key={index}
                            value={proxy.ID}>
                            {proxy.Name}
                          </option>
                        ))}
                      </Field>
                    )}
                    {Array.isArray(cards) && cards && (
                      <Field
                        as="select"
                        name="CardID"
                        className="p-4 rounded-lg w-2/3">
                        <option value="">Select Card Group</option>
                        {cards.map((card: cardGroup, index) => (
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
          {isLoaded && <div>Loading...</div>}
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
    </>
  );
};
