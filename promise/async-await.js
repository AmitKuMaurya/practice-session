
// <<<<<< STACK OVERFLOW IMP. DOC https://stackoverflow.com/questions/54495711/async-await-vs-then-which-is-the-best-for-performance   >>>>>>>>

/**
 we are using async await any the reason,
 .then() .catch() method creates promise chaianing
 and we want to get rid of this.
 */

/*
aync funtion always returns Promise
no matter weather we create promise
inside that function or not this
will warp that value inside a Promise
and return to us.

but if we are creating a promise then,
it won't wrap that promise inside another
 promise it will directly return it
because its already an promise.

we use await keyword in front of promise
only. or duch operation which may take
 time to get resolve.


*/

// example-1
// async function fun() {
//     return 'Hello';
// }

// const p = fun();
// console.log(p);


// example-2
const promise1 = new Promise((resolve,reject)=> {
    const time = 20000;
    setTimeout(() => {
        resolve(`Promise resolved !! after ${time}`);
    }, time);
});

const promise2 = new Promise((resolve,reject)=> {
    const time = 40000;
    setTimeout(() => {
        resolve(`Promise resolved !! after ${time}`);
    }, time);
});

/*
    Explaination in handlePromiseWithAsyncAwait function execution step by step.

    when the function start executing code it, 
    would first print line number 59 console statement.
    then, after that it see there is await in fetch Api so its a promise then it won't wait for that Fetch API to finish, than function handlePromiseWithAsyncAwait execution will get suspend. and removed out of call stack so that other task which are going on can run smoothly.
    and javaScript will wait to finish that promise and than it will move to line number 63 and it's also a promise so same story as before and when that gets finished it will print below two consoles quickly because they are just normal consoles.
    again we have a promise with attached await keyword  

*/

const handlePromiseWithAsyncAwait = async () => {
    console.log('Consoling Before');
    const data = await fetch(`https://api.github.com/users`);
    const res = await data.json();
    console.log('data: ', res);
    console.log('Consoling After API Call');
    
    const promiseTwo = await promise2;
    console.log('Consoling after second promise');
    console.log(promiseTwo);

    const promiseOne = await promise1;
     console.log('Consoling after first promise');
     console.log(promiseOne);

}
handlePromiseWithAsyncAwait();

// function handlePromiseWithDotThen() {
//     console.log('consoling Before');
//     fetch(`https://api.github.com/users/amitkumaurya`)
//     .then((res)=>{
//         console.log("res : ",res);
//     })
//     // const res =  data.json();
//     console.log('consoling From AFter API Call.');
    
//     const promiseTwo =  promise2.then(res=> console.log(res));
//     // console.log('promiseTwo: ', promiseTwo);
//         console.log('Consoling after second promise');

//     const promiseOne = promise1.then(res=> console.log(res));
//         console.log('Consoling after first promise');
//     // console.log('promiseOne: ', promiseOne);
    
    
// }

// handlePromiseWithDotThen();




