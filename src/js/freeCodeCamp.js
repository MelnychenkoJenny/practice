
// function boolToWord( bool ){
//  if (bool) {
//   return 'Yes';
//  }
//  return 'No'
// }

// console.log(boolToWord(false));

// function evenOrOdd(number) {
//  const x = number % 2 === 0 ? "Even" : "Odd";
//  return x
// }

// console.log(evenOrOdd(5));


// let count = 0;

// function cc(card) {
//   // Only change code below this line
// if (card <=6 && card>=2) {
//    count += 1;
// } else if (card ===10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
//   count -= 1;
// } 

// if (count<0) {
//  return `${count} Hold`;
// } else {
//   return `${count} Bet`;
// }
//   // Only change code above this line
// }

// console.log(cc(2));
// console.log(cc('J'));


// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };
// function updateRecords(records, id, prop, value) {
//   if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && value !== "" && !records[id].hasOwnProperty("tracks")) {
//     records[id][prop] = [value];
//   } else if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value);
//   } else if (value === "") {
//     delete records[id][prop];
//   }
//   return records;
// }
// function updateRecords(records, id, prop, value) {
//   if (value === '') {
//       return;
//   } else if (!id.hasOwnProperty(prop) && prop === 'tracks') {
//       let array = [];
//       array.push(value);
//       records[id][prop] = array;
//     } else if(!id.hasOwnProperty(prop) && prop  === 'artist' && prop === 'albumTitle') {
//       // console.log(records[id][prop]);
//       records[id][prop] = value;
//     } 
//     return records;
//   }

//   updateRecords(recordCollection, 1245, "albumTitle", "Riptide")
// updateRecords(recordCollection, 5439, "artist", "");

// console.log(recordCollection);



// // Setup
// const myArray = [];
// for (let i=1; i<=9; i+=2) {
//   myArray.push(i)
// }


// const arr = [10, 9, 8, 7, 6];

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// const myArr = [2, 3, 4, 5, 6];
// let totalEl = 0;
// for (let i=0; i<myArr.length; i+=1) {

//   totalEl += myArr[i];
//   console.log(totalEl);
// }

// const arr = [
//     [1, 2], [3, 4], [5, 6]
//   ];
  
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(arr[i][j]);
//     }
//   }

// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     console.log(arr[n-1]);
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }
// // function multiply(arr, n) {
// //   let product = 1;
// //   for (let i = 0; i < n; i++) {
// //     product *= arr[i];
// //   }
// //   return product;
// // }
// console.log(multiply([2, 4, 3], 2));



// Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   for (let i=0; i<contacts.length; i+=1) {
//     let el = contacts[i];
//     console.log(el[prop]);
//     if(el.firstName === name) {
//       if(el[prop]) {
//       return el[prop];
//       } else {
//         return 'No such property'
//       }
//     } 
//   }
//  return 'No such contact';
// }
// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Bob", "potato"));
// console.log(lookUpProfile("Bob", "potato"));


// function checkEqual(a, b) {
//   return a===b ? 'Equal' : 'Not equal'
//   }
  
  
//   console.log(checkEqual(1, 2));
//   console.log(checkEqual(1, -2));
//   console.log(checkEqual(1, 1));

function palindrome(str) {
  const string = str.split("")
 const strJo = string.join('')
  const rev = string.reverse();
  const revJo = rev.join('')

  console.log(strJo);
}

console.log(palindrome("eye"));
console.log(palindrome("My age is 0, 0 si ega ym."));
