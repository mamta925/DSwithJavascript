class Solution {

    AllPossibleStrings(s) {
        // code here
        let result = []
        this.solve(s, "", 0,  result)
        return result.sort();
        
    }
    
    solve(s, curr, index, result){
        if(index>=s.length) {
            if(curr!="")
                result.push(curr)
            return;
        }
        this.solve(s, curr+s[index], index+1, result)
         this.solve(s, curr, index+1, result)
    }
}

let a =  new Solution();
a.AllPossibleStrings("abc")


