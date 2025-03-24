function generateSubsequenceSumK(arr, k, index=0, path=[], sum=0){

    if(index>=arr.length){
     
        if(sum == k){
            console.log(path)
        }
        return;

    }
    path.push(arr[index])
    generateSubsequenceSumK(arr,k, index+1,path,sum+arr[index] )
    path.pop();
    generateSubsequenceSumK(arr,k, index+1,path,sum )

}
//console.log( generateSubsequenceSumK([1,2,1], 2))

function generateAnySubsequenceSumK(arr, k, index=0, path=[], sum=0){

    if(index>=arr.length){
     
        if(sum == k){
            return [...path]
        }
        return false;

    }
    path.push(arr[index])
    const includeResult = generateAnySubsequenceSumK(arr,k, index+1,path,sum+arr[index] );
    if(includeResult)return includeResult;
    path.pop();
    const excludeResult = generateAnySubsequenceSumK(arr,k, index+1,path,sum )
    if(excludeResult)return excludeResult;

}
//console.log( generateAnySubsequenceSumK([2,1,2,1], 2))

function generateCountSubsequenceSumK(arr, k, index=0, sum=0){

    if(index>=arr.length){
        return sum === k ? 1 : 0;
    }
  const left = generateCountSubsequenceSumK(arr, k, index + 1, sum + arr[index]);

  const right = generateCountSubsequenceSumK(arr, k, index + 1, sum);

  return left + right;

}
console.log( generateCountSubsequenceSumK([2,1,2,1], 2))