// // Object destructuring

// const person = {
//   name: 'Jarod',
//   age: 40,
//   location: {
//     city: 'London',
//     temp: 18,
//   },
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// // const { city, temp: temperature } = person.location;

// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const { name: publisherName = 'self published' } = book.publisher;

// console.log(publisherName);

// Array Destructuring

const address = ['Shoreditch High Street', 'London', 'E1'];

const [, city = 'London', postcode] = address;

console.log(`You are in ${city} ${postcode}`);

const item = ['coffee', '£2', '£2.50', '£2.75'];

const [itemName,,medium] = item;

console.log(`A medium ${itemName} is ${medium}`);
