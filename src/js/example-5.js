// function greet(clientName, value) {
//   return `${clientName}, ласкаво ${value} просимо в «${this.service}».`;
// }

// const steam = {
//   service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// console.log(steamGreeter("Манго", 10));

// const gmail = {
//   service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter("Полі"); // "Полі, ласкаво просимо в «Gmail»."

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback, value) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}. value: ${value}`);
// }

// makeMessage(customer.getFullName.bind(customer), 10); // Виникне помилка на момент виклику функ
// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) {continue};
//   console.log(key);
// }

// console.log(dog);

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   };
// getPrice() {
//   return this.price;
// };
// changePrice(newPrice) {
//   this.price = newPrice;
//   return newPrice;

// };
// }

// const carNew = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(carNew);
// console.log(carNew.changePrice(12));
// console.log(carNew.changePrice(142));
// console.log(carNew);

// class Storage {
//   constructor(items) {
//     this.items = items;
//   };
//   getItems() {
//     return this.items;
//   };
//   addItem(newItem) {
//     return this.items.push(newItem);
//   };
//   removeItem(itemToRemove) {
//     const indexOfItem = this.items.indexOf(itemToRemove);
//     this.items.splice(indexOfItem, 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.addItem("bhgv"));
// console.log(storage.removeItem("Prolonger"));
// console.log(storage.removeItem("Antigravitator"));
// console.log(storage);

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   };
//   getValue() {

//     return this.value;
//   };
//   padEnd(str) {
//    return this.value += str;
//   };
//   padStart(str) {
//     return this.value = str + this.value;
//   };
//   padBoth(str) {
//     return this.value = str + this.value + str;
//   }
// }
// const builder = new StringBuilder(".");
// console.log(builder);
// builder.padEnd("^");
// console.log(builder.getValue());
// builder.padStart("^");
// console.log(builder.getValue());
// builder.padBoth("=");
// console.log(StringBuilder);

// const Car = function ({ brand, model, price } = {}) {
//   // 2. Функция вызывается в контексте созданного объекта,
//   //    то есть в this записывается ссылка на него
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   // 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
//   //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)
//   // 4. Ссылка на обьект возвращается в место вызова new Car
// };

// Car.prototype.sayHi = function () {
//   console.log('Car.prototype.sayHi -> this', this);
//   console.log('Hello :) ');
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// console.log(Car.prototype);

// 1. Если функция вызывается через new, создаётся пустой объект
// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar);
// console.log(myCar.change(1));
// console.log(myCar);

// // myCar.sayHi();
// // myCar.changePrice(10000);

// const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
// console.log(myCar2);
// console.log(myCar2.change(10));
// console.log(myCar2);

// myCar2.sayHi();

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     console.log(emails);
//     const uniqueEmails = new Set(emails);
//     console.log(uniqueEmails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };
// console.log(historyService.getEmails());

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);

//     const uniqueEmails = new Set(emails);
//     console.log(uniqueEmails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// // console.log(historyService.getEmails());
// const novinka = 
//    [
//     { name: 'Log', age: 4 },
//     { name: 'Pol', age: 24 },
//     { name: 'Hug', age: 44 },
//   ];
// const nov1 = new Set(novinka);
// console.log(nov1);


// const makeSheff = function(name) {
//   const makeDish = function(dish)
//   {console.log(`${name} cook ${dish}`);
// }
// return makeDish
// }
// const mango = makeSheff('Mango');
// mango('tea')
// function makeSheff(name) {
// function makeDish(dish)
//   {console.log(`${name} cook ${dish}`);
// }
// return makeDish
// }
// const mango = makeSheff('Mango');
// console.log(mango);
// mango('hju')

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.
// function areYouPlayingBanjo(name) {
//   const r = 'r'
//   const nameToLowerCase = name.toLowerCase();
//   return nameToLowerCase[0] === r ? `${name} plays banjo`:`${name} does not play banjo`;
// }

// console.log(areYouPlayingBanjo("rolf"));
// console.log(areYouPlayingBanjo("Rolf"));
// console.log(areYouPlayingBanjo("bravo"));


// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
//  You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
//  Be careful, there shouldn't be a space at the beginning or the end of the sentence!


// function smash (words) {
// return words.join(' ')

// };

// console.log(smash(["this", "is", "a", "really", "long", "sentence"]));

// var countSheep = function (num){
// let str = '';

//   for(let i=1; i<=num; i+=1) {

//     str += `${i} sheep...`
//   }
//   return str
// }

// // var countSheep = function (num){
// //   let str = "";
// //   for(let i = 1; i <= num; i++) { 
// //     str+= `${i} sheep...`; }
// //   return str;
// // }
// console.log(countSheep(0));
// console.log(countSheep(3));

// function paperwork(n, m) {
//   if(n<0 || m<0) {
//     return 0;
//   }
//   return n*m
// }
// console.log(paperwork(-5, 5));


