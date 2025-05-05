const cart = [];
const validateCart = (cart) => {
    return cart.length > 0;
}


// createOrder(cart).then((orderId) => {
//     console.log("Order ID:", orderId);
//     return orderId;
// }).then((orderId)=>{
//   return proceedToPayment(orderId)
// }).then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log("Error:", error);
// })

function proceedToPayment(orderId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(orderId){
                return resolve("Payment successful");
            } else {
                return reject("Payment failed");
            }
        }, 2000);
    })
}


function createOrder(cart) {
    return new Promise((resolve, reject) => {
            
        if(!validateCart(cart)){
           return reject("Invalid cart");
        }
        const orderId = Math.floor(Math.random() * 1000);
        setTimeout(() => {
           return resolve(orderId);
        }, 2000);
    })


}

Promise.any([createOrder(cart), proceedToPayment()])
    .then((results) => {
        console.log( results);
    })
    .catch(({errors}) => {
        console.log( errors);
    });

