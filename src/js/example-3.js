
// 3 модуль 4 задание
// Доповни код, присвоївши оголошеним змінним вирази звернення 
// до відповідних властивостей об'єкта apartment.

// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
  // // Change code below this line
  // const ownerName = apartment.owner.name;
  // const ownerPhone = apartment.owner.phone;
  // const ownerEmail = apartment.owner.email;
  // const numberOfTags = apartment.tags.length;
  // const firstTag = apartment.tags[0];
  // const lastTagIndex = apartment.tags.length - 1;
  // const lastTag = apartment.tags[lastTagIndex];
  // // Change code above this line

  // console.log(numberOfTags);
  // console.log(lastTagIndex);

  // console.log(firstTag);
  // console.log(lastTag);




  // 3 модуль Завдання 10
  // Перебери об'єкт apartment, використовуючи цикл for...in, і запиши 
  // в масив keys всі його ключі, а в масив values всі значення його властивостей.
  
  // const apartment = {
  //   descr: "Spacious apartment in the city center",
  //   rating: 4,
  //   price: 2153,
  // };
  // const keys = [];
  // const values = [];
  // // Change code below this line
  // for (const key in apartment) {
  //   keys.push(key);
  //   values.push(apartment[key]);
  //   }




  // 3 модуль 12 завдання
  // Напиши функцію countProps(object), яка рахує і повертає кількість власних
  //  властивостей об'єкта в параметрі object. Використовуй змінну propCount для 
  //  зберігання кількості властивостей об'єкта

  // function countProps(object) {
  //   let propCount = 0;

  //   for (const key in object) {
  //     console.log(key);
      
  //     if (object.hasOwnProperty(key)) {
  //       console.log(Object.keys(object));
  //       propCount = Object.keys(object).length;
  //     }
  //   }
  //   return propCount;
  // }

  // console.log(countProps({name: "Mango", age: 2, lon: 123,}));
  


// 3 модуль 14 завдання
// Виконай рефакторинг функції countProps(object), 
// використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.

  // function countProps(object) {

  //   let propCount = 0;
  // const keys = Object.keys(object);
  //   // propCount = keys.length;
  //   for (const key of keys) {
  //     propCount = keys.length;
  //   }
  
  //   return propCount;

  // }
  // console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
  // console.log(countProps({ name: "Mango", age: 2 }));




  // 3 модуль 19 завдання
  // Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. 
  // Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. 
  // Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

  // const products = [
  //   { name: "Radar", price: 1300, quantity: 4 },
  //   { name: "Scanner", price: 2700, quantity: 3 },
  //   { name: "Droid", price: 400, quantity: 7 },
  //   { name: "Grip", price: 1200, quantity: 9 },
  // ];
  
  // function getAllPropValues(propName) {

  // const allPropValues = [];
  //   for (const product of products) {

  //     if (product.hasOwnProperty(propName)) {
  //       console.log(product[propName]);
  //       allPropValues.push(product[propName]);
  //     }
      
  //   }
  //   return allPropValues;
  // }

  // console.log(getAllPropValues("price"));
  // console.log(getAllPropValues("cdf"));



// 3 модуль 31 завдання
//   Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона 
//   приймала будь-яку кількість аргументів, рахувала і повертала їх суму.

  // Change code below this line
// function add(...args) {
  
//   let sum = 0;
//   for (const arg of args) {
  
//   sum += arg;
//     }
//   return sum;
//   // Change code above this line
// }
// console.log(add(12, 4, 11, 48));



//  3 модуль 32 завдання
//  Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції 
//  addOverNum() таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за 
//  задане число. Це число повинно бути першим параметром функції.

// Change code below this line
// function addOverNum(firstNumber, ...args) {
//   console.log(firstNumber);
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     console.log(arg);
//     if (arg > firstNumber) {
//     total += arg;
//     }
    
//   }
//   return total;
  
//   // Change code above this line
// }

//   console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));




//  3 модуль 33 завдання
// Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди 
// буде масив чисел, а решта аргументів будуть просто числами.
// Доповни код функції таким чином, щоб вона повертала новий масив matches, 
// в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.
// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], 
// тому що тільки вони є в масиві першого аргументу.


// Change code below this line
// function findMatches(firstArray, ...args) {

//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     console.log(arg);
//     if (firstArray.includes(arg)) {
//       matches.push(arg);
//     }
//   }

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));





//  3 модуль 35 завдання
// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з 
// oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти 
// потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const indexOfBook = this.books.indexOf(oldName);
//       this.books.splice(indexOfBook, 1, newName);
//        // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));




//  3 модуль 35 завдання
// Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля
//  potionName з масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const indexOfPotion = this.potions.indexOf(potionName);
    
//   this.potions.splice(indexOfPotion, 1);

//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.removePotion("Stone skin"));




//  3 модуль 41 завдання

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     const {potions} = this;
//     return potions;
//   },
//   addPotion(newPotion) {
//     // const {potions} = this;
//     for (const el of this.potions) {
//       console.log(el);
//       if (newPotion.name === el.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//       this.potions.push(newPotion);
//     }
    
//   },
//   removePotion(potionName) {
//     // const {potions} = this;
//     for (let i = 0; i < this.potions.length; i += 1) {
//       // const {name} = potions[i];
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
// },

//   updatePotionName(oldName, newName) {
//     const {potions} = this;
    
//     for (let potion of potions) {
           
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return;

//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   // Change code above this line
// },
// }


// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 620 }));




// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));

// console.log(atTheOldToad);

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// console.log(atTheOldToad.removePotion("Invisibility"));


// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);
//     callback(100);
// };

// const fnB = function (number) {
//     console.log('Это лог при вызове fnB', number);
// };

// fnA('qweqwe', fnB);
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => {
//   console.log(book.genres);
//   return book.genres});
// console.log(genres);
