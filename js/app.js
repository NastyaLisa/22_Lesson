//Task 1
const users = ['Mike', 'Nikola', 'Tom'];

console.log(users[1]);
users[1] = 'Alex';

console.log(users);

console.log(users.length);

users.splice(1,2);

console.log(users.length);

console.log(users)

// Task 2
const a = [5, 3, -4, 25, 32, -16, 6, 35, 33];
const b = [21, -30, 9, 5, 12, -19, 5, 28];

console.log('Длина массива a:', a.length);
console.log('Длина массива b:', b.length);

  function maxArray(a, b) {
   if (a.length > b.length) {
    return `a > b: ${a.length} > ${b.length}`;
    };
    
  if (a.length < b.length) {
    return `a < b: ${a.length} < ${b.length}`;

  } if (a.length = b.length) {
    return `a == b; ${a.length} = ${b.length}`;
  };
};

console.log(maxArray(a, b));


//Task 3

let phrase = 'I am learning JavaScript right now';

phrase = phrase.split(' ');

console.log(phrase);

//Task 4

let a3 = [5, 3, 8, 5, 3, 2, 1, 2];
let b3 = [];

a3.forEach(el => {
  if (b3.indexOf(el) === -1) {
    b3.push(el);
  }
});
console.log(b3);


//Task 5
let users2 = [
  { id: 1, age: 17 },
  { id: 2, age: 18 },
  { id: 3, age: 19 },
  { id: 4, age: 21 },
  { id: 5, age: 17 },
  { id: 6, age: 20 },
  { id: 7, age: 25 },
]

users2.forEach(user2 => {
  if (user2.age > 18 && user2.age < 21)
    console.log(user2.id);
});