import moment from 'moment';
import useApi from '../hooks/useApi';
import { Seats } from '../types/Seats';
import { Dates } from '../types/Dates';

export const SelectedDate = ({
  selectedDate,
  seatsInfo,
  eventInfo
}: {
  selectedDate: string;
  seatsInfo: Seats | undefined;
  eventInfo: Dates;
}) => {
  const api = useApi();

  return (
    <div>
      <h2 className="text-2xl font-bold">Seats</h2>
      <h3>{moment(selectedDate).format('D MMMM YYYY')}</h3>
      {Array.isArray(seatsInfo) &&
        seatsInfo?.map((seat, index) => (
          <button
            type="submit"
            className="flex flex-row justify-between items-center space-x-10 p-3"
            key={index}
            onClick={() =>
              api.SelectedSeat({
                seat: index,
                date: eventInfo.Event.date.findIndex((date) => date === selectedDate),
              })
            }>
            <p>Price: € {seat.price}</p>
            <p>Row: {seat.row}</p>
            <p>Section: {seat.section}</p>
          </button>
        ))}
    </div>
  );
};
