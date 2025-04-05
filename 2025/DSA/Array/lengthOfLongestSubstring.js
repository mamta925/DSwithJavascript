function lengthOfLongestSubstring(s) {

    let  max=0;
    let start = 0;

    let map = {}

    for(let j=0; j< s.length; j++){
        if(map[s[j]] == undefined) map[s[j]] =j;
        else {
            if(start<=map[s[j]])
            start = map[s[j]]+1;
            map[s[j]] =j
        }
        max = Math.max(max, j-start+1)
         
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"))