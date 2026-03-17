export interface Grade {
  date: string;
  grade: string;
  score: number;
}

export interface Address {
  building: string;
  street: string;
  zipcode: string;
  coord: [number, number]; // [longitude, latitude]
}

export interface Restaurant {
  _id: string;
  name: string;
  cuisine: string;
  borough: string;
  restaurant_id: string;
  address: Address;
  grades: Grade[];
}

export interface RestaurantsResponse {
  cuisine: string;
  name: string;
  borough: string;
  address: Address;
  grades: Grade[];
  restaurants: Restaurant[];
  total?: number;
  page?: number;
  limit?: number;
}
