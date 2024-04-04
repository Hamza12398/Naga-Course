// let promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("done");
//   }, 1000);
// });

// console.log(promise);

type User = {
  username : string
  id: number
}
function fetchUser() {
  return new Promise<User>( (resolve, reject) => {
    setTimeout(() => {
      resolve({
        username: "Hamza",
        id: 1,
      });
    }, 1000);
  });
}

fetchUser().then((user) => {
  console.log(user);
  return user;
})
