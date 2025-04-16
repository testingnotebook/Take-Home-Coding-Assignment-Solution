export type Friend = {
  name: string;
  hobbies: string[];
};

export type User = {
  id: number;
  name: string;
  city: string;
  age: number;
  friends: Friend[];
};
