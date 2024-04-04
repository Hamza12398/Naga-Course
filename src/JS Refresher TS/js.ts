// ///* VAR (Current execution context)
// //* LET (BLOCK SCOPE)
// //* CONST (BLOCK SCOPE)

// var username;

// username = "hamza";
// // console.log(username);

// var isLogging = true;
// function getUsername() {
//   if (isLogging) {
//     var user = "hamza";
//   }
//   // console.log(user);
// }

// getUsername();

// const x: boolean = true;
// const y: boolean = false;
// const z: boolean = true;

// // console.log(x && y && z);

// // if (x || y) {
// //   console.log("true");
// // } else {
// //   console.log("false");
// // }

// const data1 = {
//   name: "Hamza",
//   age: 30,
//   eat: function() {
//     console.log("Eating");
//   }
// };
// const {eat, ...restData} = data1

// const data2 = {...data1}
// // console.log(data2);

// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

// const filter = numbers.filter((n) => n % 2 === 0);
// console.log(filter);

// // const some = numbers.some((num) => {
//   //   return num < 0;
//   // })

//   // const reduce = numbers.reduce((acc, num) => {
//     //   return acc + num + 5;
//     // })

// const map = numbers.map(num => num)
// console.log(map);

// const data: number[] = [1, 2, 3, 4]

// const reduce = data.reduce((acc, num) => acc + num , 1)
// console.log(reduce);

let list: { id: number; num: string }[] = [];
function get(callBack: () => void) {
  console.log("first Time");
  setTimeout(() => {
    list = [
      {
        id: 1,
        num: "hamza",
      }
    ]
    callBack();
  }, 2000);
}

get(() => {
  console.log("second Time");
  console.log(list);
});