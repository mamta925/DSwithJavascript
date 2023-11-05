/**
 * @param {string} s
 * @return {number}
 */

//l
//abcdaa
//r
// var lengthOfLongestSubstring = function(s) {
 
//     let l = 0;
//     let r = 0;
//     let len = s.length;
//     let maxLength = 0;
//     const stringSet = new Set()

//     while(r<len){
//         if(stringSet.has(s[r])){
          
//            stringSet.delete(s[l])
//            l++;
           
//         } else {
//             stringSet.add(s[r])
//             maxLength = Math.max(maxLength, stringSet.size)
//             r++;
//         }
//     }
//     return maxLength;
    
// };


//l
//abcdaa
//r
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
 
    let l = 0;
    let r = 0;
    let len = s.length;
    let maxLength = 0;
    const stringMap = new Map()

    while(r<len){
        if(stringMap.get(s[r])!=undefined)
            l = Math.max(stringMap.get(s[r])+1, l);

        stringMap.set(s[r], r)
        maxLength = Math.max(maxLength, r-l+1)
        r++;
    }
    return maxLength;
    
};
console.log(lengthOfLongestSubstring('abcabcbb'))


