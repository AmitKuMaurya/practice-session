// let value = 1;

// console.log(
//     dox(() => {
//         value = 2;
//     })
//     );
    
//     function dox(callback) {
//         // callback hell.
//         callback();
//         console.log('value: ', value);
// }

// function sayHello () {
//     console.log("Hello");
// }

// function sayHii () {
//     console.log("Hii");
// }


// gfg docs for callback https://www.geeksforgeeks.org/javascript-callbacks/

// var number = [1,2,3,4,5];
// function main(anotherFn) {
//     number.forEach(anotherFn);
// };

// function greet(number){
//     console.log(`Greeting ${number} times.`);
// }
// console.log(main(greet()));
    


// // IIFE

// // case - 1
// (
//   function () {
//     console.log("Say HIi !");
//   }
// )()(
//   // case - 2
//   (function () {
//     console.log("Say HIi !");
//   })()
// )(
//   // case - 3
//   () => {
//     console.log("Say HIi !");
//   }
// )();
