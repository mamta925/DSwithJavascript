function fatcorial(n){

    if(n<=1)
     {
        return 1;
     }
     let total = 1;
     for(let i=1; i<=n;i++){
        total = total*i
     }
     return total;
}
console.log(fatcorial(5));

function fatcorialRecursion(n:number): number{
    if(n<=1)
        {
           return 1;
        }
        return n *fatcorialRecursion(n-1)

}