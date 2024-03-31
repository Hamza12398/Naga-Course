const uderProfile: {
  username: string;
  age: number;
  isMarried: boolean;
  hobies: string[];
} = {
  username: "Hamza",
  age: 30,
  isMarried: true,
  hobies: ["Sports", "Cooking", "Reading"],
};

const number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const string: string[] = ["hamza"];

interface IUser {
  username: string;
  age: number;
  isMarried: boolean;
}

interface INewUser extends IUser {
  address: string;
}

const user: IUser = {
  username: "Hamza",
  age: 30,
  isMarried: true,
}

// console.log(user);


const person:Record<string, string> = {
  user: "person",
}
person["address"] = "address"


console.log(person);