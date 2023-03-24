// 2 модуль 9 задание автопроверки
// Напиши функцію getExtremeElements(array), яка приймає один параметр array - 
// масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і 
// останнього елемента параметра array.

// const fn = function getExtremeElements(array) {

// const extremelElements = [];
// const firstElement = array[0];
//   const lastElementIndex = array.length - 1;
// const lastElement = array[lastElementIndex];

//   extremelElements.push(firstElement);
// extremelElements.push(lastElement);
  
// return extremelElements;

// }

// console.log(fn([1, 2, 3, 4, 5]));
// console.log(fn(["Earth", "Mars", "Venus"]));


// 2 модуль 11 задание
// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів,
// розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).
// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.


// const fn = function calculateEngravingPrice(message, pricePerWord) {

//     return message.split(" ").length * pricePerWord;
// }

// console.log(fn("JavaScript is in my blood", 10));
// console.log(fn("JavaScript is in my blood", 20));
// console.log(fn("Web-development is creative work", 40));
// console.log(fn("Web-development is creative work", 20));


// 2 модуль 16 задание
// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами 
// двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію 
// масиву довжиною maxLength елементів.
//  В іншому випадку функція повинна повернути новий масив повністю.

//  const fn = function makeArray(firstArray, secondArray, maxLength) {
//     const allArray = firstArray.concat(secondArray);
//     const allArrayIndex = allArray.length;
//     console.log(allArrayIndex);
//     if (allArrayIndex > maxLength) {
//         return allArray.slice(0, maxLength);
//     }
// return allArray;
//   }


// console.log(fn(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(fn(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4))
// console.log(fn(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(fn(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(fn(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(fn(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));




// 2 модуль 18 задание
// Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і 
// повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, 
// якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//     let sum = 0;
//    for (let i = 0; i <= number; i += 1) {
//     //  console.log(i);

//       sum += i;   
//    }
//       return sum;
// }

// console.log(calculateTotal(18));




// 2 модуль 21 задание
// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається
//  тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в 
//  цьому рядку.

// function findLongestWord(string) {
//     let word = string.split(" ");
//     console.log(word);
//     let longestWord = word[0];
//     console.log(longestWord);

//     for (let i = 0; i < word.length; i += 1) {
//         console.log(word[i].length);
//         if (word[i].length > longestWord.lenght){
//         longestWord = word[i];
//         }
        
//     }
// return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));


// 2 вариант решения
// function findLongestWord(string) {
//     let stringSplit = string.split(" ");

//     let longestWord = "";

//     for (const word of stringSplit) {
//         console.log(word);
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

// return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped overgtfbndc the lazy dog"));
// console.log(findLongestWord("Google do a rgfgfcholl"));



// 2 модуль 22 задание
// Доповни код функції createArrayOfNumbers(min, max) таким чином,
//  щоб вона повертала масив усіх цілих чисел від значення min до max.

// function createArrayOfNumbers(min, max) {
//     const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     // console.log(i);

//     numbers.push(i);
//   }

//     return numbers;
//   }
  
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));



// 2 модуль 23 задание
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел 
// (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву
//  numbers, які більші за значення параметра value (число).


// function filterArray(numbers, value) {
//     const filterArray = [];

//     for (const number of numbers) {
//         // console.log(number);

//         if (number > value) {
//             filterArray.push(number);
//             console.log(filterArray);
//         }
//     }
//     return filterArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 20));




// 2 модуль 29 задание
// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел 
// від start до end. Парним вважається число, яке ділиться на 2 без остачі 
// (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//    const evenNumbers = [];

//  for (let i = start; i <= end; i += 1) {
//     const number = i;
//    if (number % 2 === 0) {
//     evenNumbers.push(number);
//    }
//  }
//  return evenNumbers;
//    }

//    console.log(getEvenNumbers(2, 5));
//    console.log(getEvenNumbers(6, 12));




// 2 модуль 32 задание
// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву 
// масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value,
//  повертаючи true, якщо присутнє, і false в іншому випадку.
// При виконанні цього завдання в тілі функції includes() не можна використовувати 
// метод масив.includes(значення).

// function includes(array, value) {

//   for (let item of array) {
//     console.log(item);
//   if (item === value) {
//  return true;
//   }
//     }
//     return false;
//   }


//   console.log(includes([1, 2, 3, 4, 5], 3));
//   console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
