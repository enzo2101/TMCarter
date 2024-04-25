import { Dispatch, SetStateAction } from 'react';
import { Dates } from '../types/Dates';
import useApi from '../hooks/useApi';
import { Seats } from '../types/Seats';
import moment from 'moment';

export const DateInfo = ({ eventInfo, setSeatsInfo, setSelectedDate }: { eventInfo: Dates, setSeatsInfo: Dispatch<SetStateAction<Seats | undefined>>, setSelectedDate: Dispatch<SetStateAction<string>> }) => {

  const api = useApi();

  const handleSeat = async (date: number) => {
    const response = await api.GetSeatsInfo(date);
    if (response) {
      setSeatsInfo(response.Seats);
    }
    setSelectedDate(eventInfo.Event.date[date]);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold">Event Information</h2>
      <p>
        <span className="font-bold">Event Name:</span> {eventInfo?.Event.name}
      </p>
      <p>
        <span className="font-bold">Location:</span> {eventInfo?.Event.location}
      </p>
      <h2 className="text-2xl font-bold">Dates</h2>
      {eventInfo?.Event.date.map((date, index) => (
        <button
          className="border-[1px] border-transparent border-solid rounded-md bg-zinc-600 hover:text-white p-2 m-2 cursor-pointer"
          key={index}
          onClick={() => handleSeat(index)}>
          <p>{moment(date).format('D MMMM YYYY')}</p>
        </button>
      ))}
    </div>
  );
};
