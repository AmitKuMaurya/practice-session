

/*

 We have used .then() .catch method of promise,
 there is no harm in using promises like that,
 but it looks messy and known for promise chaining, 
 thats why we avoid this way to make our code clean,
 and readble. 

 --> Below mentioned some of the steps which 

 1. createOrder
 2. proceedToPayments
 3. showOrderSummary
 4. updateWallet

 */

const cart = ["trouser", "jeans", "shirts", "hoodies"];
var loggedUser = true;
var isVerified = true;

function createOrder(cart) {
    return new Promise((resolve, reject) => {
        var orderId = 11111;
        if (logged(loggedUser) && cart.length > 1) {
            setTimeout(() => {
                resolve(orderId);
            }, 3000);
        } else reject(new Error("User is not logged in, can't add products"));
    });
}

function proceedToPayments(orderId) {
    console.log('orderId: ', orderId);
    return new Promise((resolve, reject) => {
        if (cardVerified(isVerified)) {
            setTimeout(() => {
                const paymentIntent = "kjhcbd51351sx13xs";
                resolve(paymentIntent);
            }, 4000);
        }
        else reject(new Error("payment card is not verified"));
    });
}

function showOrderSummary(paymentIntent) {
    console.log('paymentIntent: ', paymentIntent);
    return new Promise((resolve, reject) => {
        if (paymentIntent) {
            setTimeout(() => {
                const status = "dispatched";
                resolve(status);
            }, 5000);
        }
        else reject(new Error("order failed, transection will be refund. if deduction happened !"));
    });
}

function updateWallet(status) {
    console.log('status: ', status);
    return new Promise((resolve, reject) => {
        if (status) {
            resolve("wallet is updated");
        }
        else reject(new Error("deduction doen't happend from wallet !"));
    });
}

function logged(loggedUser) {
    return loggedUser;
}

function cardVerified(isVerified) {
    return isVerified;
}

createOrder(cart)
// .then((orderId)=> console.log(orderId))
    .then((orderId) => proceedToPayments(orderId))
    // .catch((err) => console.log(err.message))
    .catch((err) => console.log(err.message))
    .then((paymentIntent) => showOrderSummary(paymentIntent))
    .then((status) => updateWallet(status))
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message))



// createOrder(cart)
//     .then((orderId) => proceedToPayments(orderId))
//     .then((paymentIntent) => showOrderSummary(paymentIntent))
//     .then((status) => updateWallet(status))
//     .then((result) => console.log(result))
    // .catch((err) => console.log(err.message));

