



let obj = {}

function add(){
let sum = 0;
let key = ''
for(let i =0; i< arguments.length; i++){
    key+=arguments[i]+ ' ';
}
if (obj[key]){
    console.log("I am from cache" ,obj[key] )
  return obj[key]
} 
sum = arguments.reduce((a,b)=> a+b,  0)

obj[key] = sum;
console.log("I am not from cache", obj)
return sum


}
add("22",2)
add(2,2,2) // add & return 4
add(2,2,2)
add(22,2)
add("22",2)