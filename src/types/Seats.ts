// export type Seats = {
//   section: number;
//   row: string;
//   price: number;
// }[];

interface Seat {
  section: string;
  row: string;
  price: number;
}

export type Seats = Seat[];
