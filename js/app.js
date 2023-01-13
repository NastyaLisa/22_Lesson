//Task 1
const users = ['Mike', 'Nikola', 'Tom'];
console.log(users[2]);
users[1] = 'Alex';

console.log(users);

console.log(users.length);

users.splice(1,2);

console.log(users.length);

console.log(users)

// Task 2
// var 1
let a = [5, 3, -4, 25, 32, -16, 6];
let b = [21, -30, 9, 5, 12, -19, 5, 28];

let totalA = 0;

for (const value of a) {
  totalA += Number(value);
};
console.log('totalA', totalA);

let totalB = 0;

for (const value of b) {
  totalB += Number(value);
  }
console.log('totalB', totalB);

function maxArray(totalA, totalB) {
   if (totalA > totalB) {
    return `${totalA}`;
  };
  if (totalA < totalB) {
    return `${totalB}`;
  } if (totalA = totalB) {
    return `${totalA} = ${totalB}`;
  };
};

console.log(maxArray(totalA, totalB));

// var 2
let c = [5, 3, -4, 25, 32, -16, 6, 35, 33];
let d = [21, -30, 9, 5, 12, -19, 5, 28];

console.log('Длина массива c:', c.length);
console.log('Длина массива d:', d.length);

  function maxArray(c, d) {
   if (c.length > d.length) {
    return `${c.length} > ${d.length}`;
    };
    
  if (c.length < d.length) {
    return `${c.length} < ${d.length}`;

  } if (c.length = d.length) {
    return `${c.length} = ${d.length}`;
  };
};

console.log(maxArray(c, d));


//Task 3

let phrase = 'I am learning JavaScript right now';

phrase = phrase.split(' ');

console.log(phrase);



//Task 4

let a3 = [5, 3, 8, 5, 3, 2, 1, 2];
let b3 = [];

a3.forEach(function(el, i) {
  if (b3.indexOf(el) === -1) {
    b3.push(el);
  }
})
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