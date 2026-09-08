function climbStairs(n: number, mem: Record<number, number> = {}): number {

    if(n<=2) return n;
    if(mem[n]) return mem[n];

    let ways = climbStairs(n-1,mem)+climbStairs(n-2, mem)
     mem[n] = ways;

    return mem[n]
};

/*
  n = number of stairs (the input)

  Time:  O(n)
         Each k from 3 to n is computed once, then reused from mem.
         Without mem this would be O(2^n) because every call splits into two.

  Space: O(n)
         mem stores one entry per k, and the recursion stack goes down to 2.
*/