// // findSecondLargest(arr){

// //     if(arr.length<2){
// //     return 'not valid'
// //     }
// //     let Max = -Infintity;
// //     let secondMax ;
         
// //          for(let value of arr){
// //          if(value>max){
// //          secondMax = Max
// //          max = value
// //          }
// //          }
// //          return secondMax;
// //     }
// //     console.log(findSecondLargest([2,5,7,3,9]))

// async function findSecondLargest(arr){
 

// }
// console.log(findSecondLargest([1,1,1,1,1,1,1,1]))

var input_ = `2
3 2
1 2 4
1 3 4
3 3
1 3 5
4 2 10`
input_ = input_.replace(/\n$/, "");
input_ = input_.split("\n");

var idx_ = 0;
       console.log(input_)
var T = parseInt(input_[idx_++].trim(), 10);
for(var t_i = 0; t_i < T; t_i++) {

    var n = parseInt(input_[idx_].trim(), 10);
    var m = parseInt(input_[idx_++].trim(), 10);
        console.log(n,m)
    var a = input_[idx_++].trim().split(' ').map(function(el) {
        return parseInt(el, 10);
    });
    var b = input_[idx_++].trim().split(' ').map(function(el) {
        return parseInt(el, 10);
    });

   var out_ = largest_rectangle( n,  m,  a,  b);
   console.log(out_)
   process.stdout.write(out_.toString());
   process.stdout.write('\n');
}