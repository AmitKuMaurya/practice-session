const arr = [];
const obj = {
    name : 'amit',
    age : "20",
    class : "15th"
};


// here are some of the proprties of obj and array


// console.log(typeof arr, typeof obj) // to differentiate them or to know actual data type of it

// array properties

console.log(Array.isArray(arr)); // to check an array typeof

// objects properties 
// console.log(obj.hasOwnProperty('name'))
// console.log(Object.values(obj))
// console.log(Object.getOwnPropertyNames(obj))
Object.freeze(obj);
obj.gender = 'male';
console.log(obj);
