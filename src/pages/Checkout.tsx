import { useState } from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Formik, Form, Field } from 'formik';
import { Dates } from '../types/Dates';
import { useApi } from '../hooks/useApi';
import moment from 'moment';
import { Seats } from '../types/Seats';

export const Checkout = () => {
  const api = useApi();

  const [eventInfo, setEventInfo] = useState<Dates>();
  const [seatsInfo, setSeatsInfo] = useState<Seats>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleSeat = async (UUID: string, date: string) => {
    const response = await api.GetSeatsInfo(UUID, date);
    if (response) {
      setSeatsInfo(response.Seats);
    }
    setSelectedDate(date);
  };

  moment.locale('en');

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
                    }}></Field>
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
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Event Information</h2>
            <p>
              <span className="font-bold">Event Name:</span>{' '}
              {eventInfo?.Event.name}
            </p>
            <p>
              <span className="font-bold">Location:</span>{' '}
              {eventInfo?.Event.location}
            </p>
            <h2 className="text-2xl font-bold">Dates</h2>
            {eventInfo?.Event.date.map((date, index) => (
              <button
                className="border-[1px] border-transparent border-solid rounded-md bg-zinc-600 hover:text-white p-2 m-2 cursor-pointer"
                key={index}
                onClick={() => handleSeat(eventInfo.UUID, date)}>
                <p>{moment(date).format('D MMMM YYYY')}</p>
              </button>
            ))}
          </div>
        )}
        {selectedDate && (
          <div>
            <h2 className="text-2xl font-bold">Seats</h2>
            <h3>{moment(selectedDate).format('D MMMM YYYY')}</h3>
                {Array.isArray(seatsInfo) &&
                  seatsInfo?.map((seat, index) => (
                  <button
                  type="submit"
                  className="flex flex-row justify-between items-center space-x-10 p-3 "
                  key={index}
                  onClick={() =>
                    api.SelectedSeat({
                      price: seat.price,
                      row: seat.row,
                      section: seat.section,
                      date: selectedDate,
                    })
                  }>
                    <div>
                    <p>Price: € {seat.price}</p>
                    <p>Row: {seat.row}</p>
                    <p>Section: {seat.section}</p>
                    </div>
                  </button>
                ))}
          </div>
        )}
        </div>
        </div>
  );
};
