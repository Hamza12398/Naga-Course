// const uderProfile: {
//   username: string;
//   age: number;
//   isMarried: boolean;
//   hobies: string[];
// } = {
//   username: "Hamza",
//   age: 30,
//   isMarried: true,
//   hobies: ["Sports", "Cooking", "Reading"],
// };

// const number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const string: string[] = ["hamza"];

// interface IUser {
//   username: string;
//   age: number;
//   isMarried: boolean;
// }

// interface INewUser extends IUser {
//   address: string;
// }

// // const user: IUser = {
// //   username: "Hamza",
// //   age: 30,
// //   isMarried: true,
// // };

// // console.log(user);

// const person: Record<string, string | number | boolean> = {
//   user: "person",
// };
// person["address"] = "address";
// person["age"] = 12;
// person["isMarried"] = true;

// // console.log(person);

// enum State {
//   Active = "active",
//   Inactive = "inactive",
// }

// const num = State.Active;
// // console.log(num);

// interface IUser {
//   username: string;
//   age: number;
//   address: string;
//   isMarried: boolean;
// }

// type IUserType = keyof IUser;

// const users: IUser = {
//   username: "Hamza",
//   age: 30,
//   address: "address",
//   isMarried: true,
// };

// function getUser(obj: IUser, key: IUserType) {
//   return obj[key];
// }
// // console.log(getUser(users, "username"));
// // console.log(getUser(users, "age"));
// // console.log(getUser(users, "address"));
// // console.log(getUser(users, "isMarried"));

// function arr([a, b, c]: string[]) {
//   return `First ${a} and ${b}`;
// }
// // console.log(arr(["a", "b"]));

// function argTest<T>(arg: T) {
//   return arg;
// }
// // console.log(argTest("arg"));
// // console.log(argTest(true));
// // console.log(argTest(12));

// function swap<T>(arg1: T, arg2: T) {
//   return [arg2, arg1];
// }
// console.log(swap(1, 2));

interface IUser {
  username: string;
  address: string;
  age: number;
}

function updateData(user: IUser, update:Partial<IUser>) {
  return { ...user };
}

  const user: IUser = {
    username: "Hamza",
    address: "address",
    age: 30,
  };

console.log(updateData(user, {username: "cherkaoui"}));


interface ICity {
  [key: string]: string;
}

const cities: ICity  = {
  "Istanbul": "Istanbul",
  "Ankara": "Ankara",
  "Bursa": "Bursa",
}
