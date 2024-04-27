import { useContext } from 'react';
import { InfoContext } from '../context/InfoContext';
import { Field } from 'formik';
import { CardGroup } from '../types/CardGroupType';

export const CardsSelector = ({cardPlaceholder}: {cardPlaceholder: string}) => {
  const info = useContext(InfoContext);

  const cards = info?.CardGroup;

  return (
    <div className="w-full">
      {Array.isArray(cards) && cards && (
        <Field
          as="select"
          name="CardID"
          className="p-4 rounded-lg w-2/3">
          <option>{cardPlaceholder}</option>
          {cards.map((card: CardGroup, index) => (
            <option
              key={index}
              value={card.id}>
              {card.number.substring(card.number.length - 4)}
            </option>
          ))}
        </Field>
      )}
    </div>
  );
};
