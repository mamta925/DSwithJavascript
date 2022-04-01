/*
Input 2 strings, return true or false
anagram is a word, phrase or a name formed by rearranging the letters of another
example cinema , formed from iceman

*/

function validAnagram(str1, str2){

    let strFrequencyCount = {};
    if(str1.length!== str2.length){
        return false;
    }
    for(const char of str1){
        strFrequencyCount[char] = ++strFrequencyCount[char] || 1
    }
    for(const char of str2){
        if(strFrequencyCount[char]) {
            strFrequencyCount[char]--;
            if(strFrequencyCount[char] == 0){
                delete strFrequencyCount[char]
            }
        } else {
            break;
        }
    }
    if(Object.keys(strFrequencyCount).length){
        return false;
    }
    return true;

}

console.log(validAnagram('anagrams', 'nagaramm'))
console.log(validAnagram('cinema', 'iceman'))