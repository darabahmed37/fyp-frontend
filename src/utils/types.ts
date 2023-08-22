export type User = {
  dob: string;
  id: number;
  role: string;
  latitude: string;
  longitude: string;
  name: string;
  phoneNumber: string;
  username: string;
};

export interface IServices {
  image: string;
  description: string;
  title: string;
  id: string;
}

export type Rating = {
  id: number;
  stars: number;
  fromId: any;
  toId: any;
};

export type Mechanic = {
  id: number;
  user: User;
  services: IServices[];
  rating: Rating[];
};
