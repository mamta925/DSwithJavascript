function fibonacci(n:number): number{
   
    if(n<=2) return n;
    let pre = 1;
    let next = 2;
    let current = 0

    for(let i=3;i<=n;i++)
{
    current=pre+next;
    pre=next;
    next = current;
}
return current;
}
console.log(fibonacci(5));


function fibRecursion(n: number):number {

    if(n<=2) return n;


    return fibRecursion(n-1)+fibRecursion(n-2)
}
console.log(fibRecursion(6));