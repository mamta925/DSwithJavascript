
class Solution {

    towerOfHanoi(n, from, to, aux) {
        if(n==0){
            return 0;
        }

         if (n == 1) {
            console.log(`Move disk ${n} from rod ${from} to rod ${to}`);
            return 1;
        }
        let count = 0;
        console.log({n, from, to, aux})
        count+= this.towerOfHanoi(n-1, from , aux,to) +1;
        console.log({n, from, to, aux})
        count+= this.towerOfHanoi(n-1,aux,to, from)
        console.log({n, from, to, aux})
        return count
        
        // code here
        
    }
}

let object = new Solution();
let response = object.towerOfHanoi(4, 1,2,3);
console.log(response);