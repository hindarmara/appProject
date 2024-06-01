const name = "max";
let age = 29;
const hasHobbies = true;

// ver 1
function summarizeUser(userName, userAge, userHasHobbies) {
  return (
    "name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobbies
  );
}

// ver 2
// const summarizeUser = function (userName, userAge, userHasHobbies) {
//     return (
//         "name is " +
//         userName +
//         ", age is " +
//         userAge +
//         " and the user has hobbies: " +
//         userHasHobbies
//       );
//     }

// ver 3
// const summarizeUser = (userName, userAge, userHasHobbies) => {
//     this.age = 30;
//     return (
//         "name is " +
//         userName +
//         ", age is " +
//         userAge +
//         " and the user has hobbies: " +
//         userHasHobbies
//       );
//     } 

// ver 1
// const add = (a, b) => {
//     return a + b;
// }

// ver 2
// the function inline
// const add = (a, b) => a + b;

// if you have 1 argument only, you can remove the parentheses
const addOne = a => a + 1;

const addRandom = () => 1 + 2;

console.log(addRandom());
// console.log(add(1, 2));

console.log(summarizeUser(name, age, hasHobbies));
