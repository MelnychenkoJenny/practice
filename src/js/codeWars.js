// function makeNegative(num) {
//     return -Math.abs(num) }

//   console.log(makeNegative(-50));

// function squareDigits(num){
//     const klo = ('' + num).split('')
//     console.log(klo);
//     console.log(typeof num)
//     console.log(typeof klo)
//     return ('' + num).split('').map(i=>Math.pow(i, 2)).join('')
//   }
//   console.log(squareDigits(3212));
//   console.log(9414);

// function squareSum(numbers){
//     let sum = 0;
//     for (let number of numbers) {
//         console.log(number);
//      let numEl = Math.pow(number, 2);
//       sum += numEl;
//     }
//     return sum;
//     }

//    console.log(squareSum([1,2])); 

// const reverseSeq = n => {
//   const array = [];
//   for (let i=n; i>=1; i--) {
//     array.push(i)
//   }
//   return array;
// };
// console.log(reverseSeq(5));


// function countPositivesSumNegatives(input) {
    
//   if (input.length <= 2){
 
//         return [];
//       }
// const array = [];
// let i = 0;
// let sum = 0;
// console.log(typeof sum);
// for (const num of input) {
//     console.log(input[num]);
//     if(num<0) {
//         sum+=num
//         console.log(sum);
//     }else if (num>0 && num!==0) {
//         i+=1
//     } 
    
// }
// array.push(i)
// array.push(sum)
// console.log(array);
// return array
// }

// function countPositivesSumNegatives(input) {
//     if (input == null || input.length < 1){
//       return [];
//     }
//     let sum =0;
//     let pos =[];
    
//     for (let i=0; i<input.length; i+=1){

//     if(input[i]>0){
//     pos.push(input[i]);
    
//     } else{
//     sum += input[i];
    
//     }
//     }

//         return [pos.length, sum];
//     }
// console.log(countPositivesSumNegatives([0, 0, 5, 8, -6]));
// // console.log([10, -65]);

// function fakeBin(x){
// return x.split('').map(o=> {
//     if(o>=5) {
//         console.log(o);
//         o=1

//     } else {
//         o=0
//     }
//     return o
// }).join('')

// }
// console.log(fakeBin('45385593107843568'));
// // console.log('01011110001100111');

// function removeSmallest(numbers) {
//     let num = Infinity;
 
//   numbers.map(el=>{

//         if(el<num) {
//             num = el
//         }
//     })
//     const indexEl = numbers.indexOf(num)
//   const newArray = [...numbers]
//   newArray.splice(indexEl, 1)

//     return newArray

//   }

//   console.log(removeSmallest([10, 2, 3, 4, 1, 5]));

// console.log(typeof false); //boolean
// console.log(typeof undefined);//undefined
// console.log(typeof null);//object
// console.log(typeof object);//undefined


// console.log(false == undefined);
// console.log(false == null);
// console.log(null == undefined);
function basicOp(operation, value1, value2)
{
  if(operation === '+') {
    return value1+value2
  } else if(operation === '-') {
    return value1-value2
  }else if(operation === '*') {
    return value1*value2
  }else if(operation === '/') {
    return value1/value2
  }

}

console.log(basicOp('+', 1, 5));