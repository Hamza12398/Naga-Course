"use strict";
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
function updateData(user, update) {
    return Object.assign({}, user);
}
const user = {
    username: "Hamza",
    address: "address",
    age: 30,
};
console.log(updateData(user, { username: "cherkaoui" }));



