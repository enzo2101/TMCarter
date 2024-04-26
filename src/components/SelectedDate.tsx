import moment from 'moment';
import useApi from '../hooks/useApi';
import { Seats } from '../types/Seats';

export const SelectedDate = ({
  selectedDate,
  seatsInfo,
  selectedCard
}: {
  selectedCard: string;
  selectedDate: string;
  seatsInfo: Seats | undefined;
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
                seatIndex: index,
                cardID: selectedCard
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
