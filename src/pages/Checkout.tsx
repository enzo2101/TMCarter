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
      console.log(seatsInfo);
    }
    setSelectedDate(date);
  };

  moment.locale('en');

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="flex flex-col justify-center items-center fixed text-white bottom-1/2 left-40%">
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
            <h2>Event Information</h2>
            <p>Event Name: {eventInfo?.Event.name}</p>
            <p>Location: {eventInfo?.Event.location}</p>
            <h2>Dates</h2>
            {eventInfo?.Event.date.map((date, index) => (
              <button
                key={index}
                onClick={() => handleSeat(eventInfo.UUID, date)}>
                <td>{moment(date).format('D MMMM YYYY')}</td>
              </button>
            ))}
          </div>
        )}
        {selectedDate && (
          <div>
            <h2>Seats</h2>
            <h3>{moment(selectedDate).format('D MMMM YYYY')}</h3>
            {Array.isArray(seatsInfo) &&
              seatsInfo?.map((seat, index) => (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  key={index}>
                  <p>Price: € {seat.price}</p>
                  <p>Row: {seat.row}</p>
                  <p>Section: {seat.section}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
