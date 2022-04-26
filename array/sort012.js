class Solution {
    

    sort012(arr, N)
    {
        let zero = 0, one = 0, two = 0;
        let res = [];
    
    for(let i = 0; i<N; i++) {
        if(arr[i]=== 0) zero++;
        else if(arr[i]===1) one++;
        else if(arr[i]=== 2) two++;
    }
    while(zero) {
        res.push(0);
        zero--;
    }
     while(one){
        res.push(1);
        one--;
    }
     while(two){
        res.push(2);
        two--;
    }
    return res;
    }
}

let s = new Solution();
console.log(s.sort012([0, 2, 1, 2, 0],5))