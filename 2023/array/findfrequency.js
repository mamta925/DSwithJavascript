class Solution{
    findFrequency(v, n, x){
        let f = 0;
        for(let i = 0; i< v.length; i++){
            if(v[i]=== x){
               f++;
            }
       }
       return f
        
    }
}
let s = new Solution();
console.log(s.findFrequency([3, 2, 1, 56, 10000, 1,167],7, 1))