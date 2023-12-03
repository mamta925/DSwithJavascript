/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let str = "";
    for(let i=0; i< s.length; i++){
        if(s[i] == '('){
            if( str && str[str.length-1] == '('){
                 continue;
            } else{
                str = str.concat(s[i])
                 console.log(str)
            }
        } 
        else if(s[i] == ')') {
            if(str[str.length-1] == '('){
                    str = str.concat(s[i])
                     console.log(str)
            } else {
 continue;
            }
        }
    }
    console.log(str)
    s = str;
    return s;
};

removeOuterParentheses("(()())(())(()(()))")