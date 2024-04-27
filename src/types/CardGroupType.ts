export type CardGroup = {
  address_id: number;
  user_id: number;
  id: number;
  number: string;
  exp_month: string;
  exp_year: string;
  cvv: string;
  address: {
    id: number;
    address_line: string;
    first_name: string;
    city: string;
    country: string;
    name_on_card: string;
    phone: string;
    postal_code: string;
    state: string;
  };
}