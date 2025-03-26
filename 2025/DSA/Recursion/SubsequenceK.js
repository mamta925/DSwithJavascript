function generateSubsequenceSumK(arr, k, index=0, path=[], sum=0, result=[]){

    if(index>=arr.length){
     
        if(sum == k){
            result.push([...path])
        }
        return;

    }
    path.push(arr[index])
    generateSubsequenceSumK(arr,k, index+1,path,sum+arr[index],result )
    path.pop();
    generateSubsequenceSumK(arr,k, index+1,path,sum,result )
    
    return result;

}
console.log( "result",generateSubsequenceSumK([2,3,6,7], 7))


// var combinationSum = function(candidates, target) {
//     const result = []
//   generateCOmbinationSum(candidates,0, target,0,result,[])
//     return result;
   
// };

// function generateCOmbinationSum(candidates,index, target, sum, result, path){

//    if(index==candidates.length){
//        if(sum === target){
//         console.log(path)
//            result.push(path)
//        }
//       return;
//    }
//    path.push(candidates[index])
//    generateCOmbinationSum(candidates, index+1, target, sum+candidates[index], result, path)
//      path.pop()

//    generateCOmbinationSum(candidates, index+1, target, sum, result, path)

// }
// console.log( combinationSum ([1,2,1], 2))

// function generateAnySubsequenceSumK(arr, k, index=0, path=[], sum=0){

//     if(index>=arr.length){
     
//         if(sum == k){
//             return [...path]
//         }
//         return false;

//     }
//     path.push(arr[index])
//     const includeResult = generateAnySubsequenceSumK(arr,k, index+1,path,sum+arr[index] );
//     if(includeResult)return includeResult;
//     path.pop();
//     const excludeResult = generateAnySubsequenceSumK(arr,k, index+1,path,sum )
//     if(excludeResult)return excludeResult;

// }
// //console.log( generateAnySubsequenceSumK([2,1,2,1], 2))

// function generateCountSubsequenceSumK(arr, k, index=0, sum=0){

//     if(index>=arr.length){
//         return sum === k ? 1 : 0;
//     }
//   const left = generateCountSubsequenceSumK(arr, k, index + 1, sum + arr[index]);

//   const right = generateCountSubsequenceSumK(arr, k, index + 1, sum);

//   return left + right;

// }
// console.log( generateCountSubsequenceSumK([2,1,2,1], 2))


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result =  generateCOmbinationSum(candidates,0, target,0,[],[])
    return result;
   
};

function generateCOmbinationSum(candidates,index, target, sum, result, path){

if (sum === target) {
       result.push([...path]); 
       return;
   }
   
   if (sum > target || index === candidates.length) {
       return;
   }
   path.push(candidates[index])
   generateCOmbinationSum(candidates, index, target, sum+candidates[index], result, path)
     path.pop()

   generateCOmbinationSum(candidates, index+1, target, sum, result, path)

   return result;
}

// console.log( combinationSum ([1,2], 2))










function getAllSumSubset(arr, index=0, path=[], sum=0){

    if(index>=arr.length){
        console.log(sum)
        return;
    }
    getAllSumSubset(arr, index+1, [...path, arr[index]], sum+arr[index])
    getAllSumSubset(arr, index+1, path, sum)


}

//console.log( getAllSumSubset([2,3]))



//unique subset

function combinationNoDuplicates(arr, target) {
    arr.sort((a, b) => a - b);  
    const result = [];
    generateUniqueCombination(arr, target, 0, [], 0, result);
    return result;
  }

function generateUniqueCombination(arr, target, index=0, path=[], sum=0, result){

    if(sum === target){
        result.push([...path]);

        return;
    }
    if (sum > target || index === arr.length) {
        return;
      }
    for(let i=index;i<arr.length;i++){
       
        if(arr[i] === arr[i-1]&& index<i) continue;
        path.push(arr[i]);
        generateUniqueCombination(arr, target, i + 1, path, sum + arr[i], result);
        path.pop();

    }
  


}

//console.log( combinationNoDuplicates([10,1,2,7,6,1,5],8))




function combinationSumNoDuplicates(arr) {
    arr.sort((a, b) => a - b);  
    const result = [];
    generateUniqueSumCombination(arr, 0, [], 0, result);
    return result;
  }

function generateUniqueSumCombination(arr, index=0, path=[], sum=0, result){

  
    if (index === arr.length) {
        result.push(sum);
        return;
      }
    for(let i=index;i<arr.length;i++){
       
        if(arr[i] === arr[i-1]&& index<i) continue;
        path.push(arr[i]);
        generateUniqueSumCombination(arr, i + 1, path, sum + arr[i], result);
        path.pop();

    }
  
    

}

console.log( combinationSumNoDuplicates([10,1,2,7,6,1,5],8).sort((a,b) => a-b))



