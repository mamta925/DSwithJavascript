// const arr = ["flower","flow","flight"]

// // O(1)
// // O(n)
// // // ["dog", "car", "race"]


// // let sortestStringLength = arr[0].length;
// // let sotestString = arr[0];


// // for(let i =1 ; i< arr.length; i++)
// // {
// //     if(arr[i].length< sortestStringLength){
// //         sortestStringLength = arr[i].length
// //         sotestString = arr[i]
// //     }
    
// // }
// // let finalPrefix = ''
// // function longestSuffix(arr){
// //     for(let item=0; item< sortestStringLength; item++) {  
// //         let prefix = sotestString[item];
// //         for(let j=1; j< arr.length; j++) {
             
// //             if(prefix=== arr[j][item]){
// //                 continue
// //             } else {
// //                 return finalPrefix;
// //             }
// //         }
// //         finalPrefix+=prefix;
// //     }
// //    return finalPrefix;
// // }

// function findPrefix(string1, string2)
// {
//     let prefix = ''
//     for(let i=0; i<string1.length|| string2.length; i++){
//         if(string1[i]=== string2[i]){
//             prefix +=string1[i]
//         } else {
//             return prefix;
//         }

//     }
    
// }



// let pre = findPrefix(arr[0], arr[1])


// for(let i = 2; i<arr.length; i++){O(n)
//    const tempPrefix =  findPrefix(arr[i], pre)
//    if(tempPrefix.length === 0){
//     return ''
//    } else {
//     pre = tempPrefix;
//    }
  
//    console.log(pre)

// }



const arr = [10,1,2,7,6,1,5]  //targetnumber = 8
const targetNumber = 8

// sort [1,1,2,5,6,7,10]  
     



let sortedArr = arr.sort((a,b)=>a-b);
console.log(sortedArr)

let pointer1= i;
let pointer2 = sortedArr.length-1;
const subArray = []
const sum = 0;
let tempSubarray = []
while(pointer1< pointer2){

     if(arr[pointer1]+arr[pointer2]>targetNumber) {
        pointer2--;
     } else if(arr[pointer1]+arr[pointer2]<targetNumber) {

        let total = arr[pointer1]+ arr[pointer2];
            let newPointer = pointer1;
            newPointer++;
            total = total+arr[newPointer]
            if(total< targetNumber){
                newPointer++;
            } else {
                push(subarray)
            } 

     }
     else  {
        subArray.push([arr[pointer1], arr[pointer2]])
     }

}

getPointers(arr, i, j, total){



}
function findTotalSumSubArray(arr, total, currentSum){
    let pointer1= i;
    let pointer2 = sortedArr.length-1;
    let tempSubarray = []
    while(pointer1< pointer2){
    
         if(arr[pointer1]+arr[pointer2]>targetNumber) {
            pointer2--;
         } else if(arr[pointer1]+arr[pointer2]<targetNumber) {
    
            let total = arr[pointer1]+ arr[pointer2]+ currentSum;
                let newPointer = pointer1;
                newPointer++;
                total = total+arr[newPointer]
                if(total< targetNumber){
                    newPointer++;
                } else {
                    push(subarray)
                } 
    
         }
         else  {
            subArray.push([arr[pointer1], arr[pointer2]])
         }
    
    }


}