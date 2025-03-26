function isSubsequence(str1, str2) {
   
    if(str2.length< str1.length){
        return false
    }

    let j = 0;
    for(let i = 0; i< str2.length; i++){
        if(str2[i]=== str1[j]){
            j++
        }
        if(j === str1.length){
            return true;
        }
    }
  
    return false

  }

  console.log(isSubsequence('hello', 'hello world'))
  console.log(isSubsequence('abc', 'acb'))
  console.log(isSubsequence('sing', 'sting'))
  console.log(isSubsequence('abc', 'abracadabra'))

  function isSubsequences(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
  }
  