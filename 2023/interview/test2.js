// let input = [1, "turing", {x:2},[3,4],{y:5}]
// for(let i =0; i< input.length; i++){
//     if(input[i]== 'turing') input.splice(i,1)
//     else console.log(input[i])
// }

// try {
//     a
// } catch(err){
//     console.log(err)
// }

// // let a = {y:10}
// // a.x = a;
// // console.log(JSON.stringify(a))

// // let arr = [1, "turing", {x:2},[3,4]]
// // delete arr[1]
// //  console.log(arr)

// var URL  = require('url').URL
// const myUrl = new URL('https://example.org:8888')
// console.log(myUrl.port)
// myUrl.port = 443
// console.log(myUrl.port)
// myUrl.port =1234
// console.log(myUrl.port)
// console.log(myUrl.href)
// myUrl.port ='abcd'
// console.log(myUrl.port)
// console.log(myUrl.href)
// myUrl.port =1234.5678
// console.log(myUrl.port)
// console.log(myUrl.href)



// console.log(1)
// setTimeout(()=>{
//     console.log(2)
// },0)
// Promise.resolve(3).then(console.log)
// console.log(4)

// try{
// const m =1;
// const n = m+ z;
// console.log(n)
// } catch(err){
//     console.log(err.name)
// }


const user = {
    hello: "welcome",
    sayWelcome(){
        console.log(this.hello)
    }
}
setTimeout(user.sayWelcome.bind(user),0)