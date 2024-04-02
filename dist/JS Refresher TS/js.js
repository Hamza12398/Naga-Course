"use strict";
//* VAR (Current execution context)
//* LET (BLOCK SCOPE)
//* CONST (BLOCK SCOPE)
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var username;
username = "hamza";
// console.log(username);
var isLogging = true;
function getUsername() {
    if (isLogging) {
        var user = "hamza";
    }
    // console.log(user);
}
getUsername();
const x = true;
const y = false;
const z = true;
console.log(x && y && z);
// if (x || y) {
//   console.log("true");
// } else {
//   console.log("false");
// }
const data1 = {
    name: "Hamza",
    age: 30,
    eat: function () {
        console.log("Eating");
    }
};
const { eat } = data1, restData = __rest(data1, ["eat"]);
const data2 = Object.assign({}, data1);
console.log(data2);
const numbers = [1, 2, 3, 4, 5, 10, 14, -2];
const some = numbers.some((num) => {
    return num < 0;
});
