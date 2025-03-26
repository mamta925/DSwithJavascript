// function fullName(){
// console.log(this)
// }

// var fullNameArrow = () =>{
//     console.log(this)
// }

// fullNameArrow()

function getEvenNumber(number){
   return new Promise((resolve, reject)=>{
        if(number%2 == 0){
            resolve("success")
        } else {
            reject("fail")
        }
    })
}

getEvenNumber(2).then((data)=>{
    console.log(data)
}, (err)=>{
    console.log(err)
})