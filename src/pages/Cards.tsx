import { Formik, Field, Form } from 'formik';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import useApi from '../hooks/useApi';
import { useState, useContext, useEffect } from 'react';
import { InfoContext } from '../context/InfoContext';
import { CardGroup } from '../types/CardGroupType';

export const Cards = () => {
  const api = useApi();

  const info = useContext(InfoContext);

  const cards = info?.CardGroup;

  const [CardsGroupID, setCardsGroupID] = useState('');

  const [currentCardGroup, setCurrentCardGroup] = useState<CardGroup | ''>('');

  useEffect(() => {
    if (CardsGroupID && Array.isArray(cards)) {
      setCurrentCardGroup(
        cards.find((card: CardGroup) => {
          return Number(card.id) === Number(CardsGroupID);
        })
      );
    } else {
      setCurrentCardGroup('');
    }
  }, [CardsGroupID]);

  return (
    <div className="flex justify-center items-center">
      <Header />
      <Sidebar />
      <div>
        <Formik
          initialValues={{
            CardNumber:
              currentCardGroup && typeof currentCardGroup === 'object'
                ? currentCardGroup.number
                : '',
            CVV:
              currentCardGroup && typeof currentCardGroup === 'object'
                ? currentCardGroup.cvv
                : '',
            Month:
              currentCardGroup && typeof currentCardGroup === 'object'
                ? currentCardGroup.exp_month
                : '',
            Year:
              currentCardGroup && typeof currentCardGroup === 'object'
                ? currentCardGroup.exp_year
                : '',
            NameOnCard:
              currentCardGroup && typeof currentCardGroup === 'object'
                ? currentCardGroup.address.name_on_card
                : '',
            Address:
              currentCardGroup && typeof currentCardGroup === 'object'
                ? currentCardGroup.address.address_line
                : '',
            City:
              currentCardGroup && typeof currentCardGroup === 'object'
                ? currentCardGroup.address.city
                : '',
            State:
              currentCardGroup && typeof currentCardGroup === 'object'
                ? currentCardGroup.address.state
                : '',
            PostalCode:
              currentCardGroup && typeof currentCardGroup === 'object'
                ? currentCardGroup.address.postal_code
                : '',
            Country:
              currentCardGroup && typeof currentCardGroup === 'object'
                ? currentCardGroup.address.country
                : '',
            Phone:
              currentCardGroup && typeof currentCardGroup === 'object'
                ? currentCardGroup.address.phone
                : '',
          }}
          enableReinitialize={true}
          onSubmit={(values, { resetForm }) => {
            const creditCard = {
              number: values.CardNumber,
              exp_month: values.Month,
              exp_year: values.Year,
              cvv: values.CVV,
              address: {
                address_line: values.Address,
                city: values.City,
                country: values.Country,
                name_on_card: values.NameOnCard,
                phone: values.Phone,
                postal_code: values.PostalCode,
                state: values.State,
              },
            };
            {
              (!CardsGroupID &&
                api.SendCreditCard(creditCard)) ||
                api.UpdateCards(Number(CardsGroupID), creditCard);
            }

            resetForm();
          }}>
          {({ values }) => (
            <div>
              <h1 className="text-4xl font-bold mb-6 ">Credit Card</h1>
              <Form className="grid grid-cols-3 gap-4">
                <Field
                  type="text"
                  name="CardNumber"
                  placeholder="Card Number"
                  value={values.CardNumber}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-3"
                />
                <Field
                  type="text"
                  name="CVV"
                  placeholder="CVV"
                  value={values.CVV}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-1"
                />
                <Field
                  type="text"
                  name="Month"
                  placeholder="Month"
                  value={values.Month}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-1"
                />
                <Field
                  type="text"
                  name="Year"
                  placeholder="Year"
                  value={values.Year}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-1"
                />
                <Field
                  type="text"
                  name="NameOnCard"
                  placeholder="Name on Card"
                  value={values.NameOnCard}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-3"
                />
                <Field
                  type="text"
                  name="Address"
                  placeholder="Address"
                  value={values.Address}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-3"
                />
                <Field
                  type="text"
                  name="Country"
                  placeholder="Country"
                  value={values.Country}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-1"
                />
                <Field
                  type="text"
                  name="City"
                  placeholder="City"
                  value={values.City}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-1"
                />
                <Field
                  type="text"
                  name="State"
                  placeholder="State"
                  value={values.State}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-1"
                />
                <Field
                  type="text"
                  name="PostalCode"
                  placeholder="Postal Code"
                  value={values.PostalCode}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-1"
                />
                <Field
                  type="text"
                  name="Phone"
                  placeholder="Phone"
                  value={values.Phone}
                  className="bg-TMCarter mt-2 rounded-3xl border-solid p-2 col-span-2"
                />
                <button
                  className="border-[1px] border-transparent border-solid rounded-xl bg-zinc-600 hover:text-white p-2 m-2 cursor-pointer col-span-1 col-start-2"
                  type="submit">
                  {(!CardsGroupID && <span>Submit</span>) || (
                    <span>Update</span>
                  )}
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
      <div className="w-96">
        <select
          className="mt-2 rounded-3xl bg-TMCarter border-[1px] border-TMBorder text-white p-4 w-[300px] outline-none"
          value={CardsGroupID}
          onChange={(e) => setCardsGroupID(e.currentTarget.value)}>
          <option value="">Select card group to update</option>
          {Array.isArray(cards) &&
            cards?.map((card: CardGroup) => (
              <option
                key={card.id}
                value={card.id}>
                ************{card.number.substring(card.number.length - 4)}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};
