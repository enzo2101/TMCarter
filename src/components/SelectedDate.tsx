import moment from 'moment';
import useApi from '../hooks/useApi';
import { Seats } from '../types/Seats';
import { useState } from 'react';

export const SelectedDate = ({
  selectedDate,
  seatsInfo,
  selectedCard,
}: {
  selectedCard: string;
  selectedDate: string;
  seatsInfo: Seats | undefined;
}) => {
  const api = useApi();

  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);
  const [seatIndex, setSeatIndex] = useState<number>();
  const [cardID, setCardID] = useState<string>();
  
  const handleClick = (index: number) => {
    if (index === selectedSeat) {
      setSelectedSeat(null);
    } else {
      setSelectedSeat(index);
      setSeatIndex(index);
      setCardID(selectedCard);
    }
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">Seats</h2>
        <h3>{moment(selectedDate).format('D MMMM YYYY')}</h3>
        {Array.isArray(seatsInfo) &&
          seatsInfo?.map((seat, index) => (
            <button
              type="submit"
              className={selectedSeat === index ? "flex flex-row justify-between items-center space-x-10 p-3 border-blue-500" : "flex flex-row justify-between items-center space-x-10 p-3"}
              key={index}
              onClick={() => handleClick(index)}>
              <p>Price: € {seat.price}</p>
              <p>Row: {seat.row}</p>
              <p>Section: {seat.section}</p>
            </button>
          ))}
        {selectedSeat !== null && (
          <button
            className="border-[1px] border-transparent border-solid rounded-xl bg-zinc-600 hover:text-white p-2 m-2 cursor-pointer w-full"
            onClick={() => {
              setSelectedSeat(null);
              api.SelectedSeat({
                seatIndex,
                cardID,
              });
            }}>
            Confirm Checkout
          </button>
        )}
      </div>
    </>
  );
};
