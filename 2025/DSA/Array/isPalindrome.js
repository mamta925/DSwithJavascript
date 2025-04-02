/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let lower = s.toLowerCase()
    let i=0; j= s.length-1;

    while(i<j){
        if(!isChar(lower[i])) i++;
        if(!isChar(lower[j])) j--;
        if(i>=j)return true;
        if(lower[i] !== lower[j]) {
            return false
        };
        i++;
        j--;

    }
    return true;
    
};

function isChar(char){
    if(!isNaN(char)) return false;
    if(char.charCodeAt(0)>96 && char.charCodeAt(0)<123) return true;
    return false;
}

let s = "A man, a plan, a canal: Panama"

console.log(isPalindrome(s))