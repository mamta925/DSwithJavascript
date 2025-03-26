def findSumOfExpressions(num, N):
 
N = len(num)
    sumOfExp = 0
 
    for i in range(2 ** (N - 1)):
       
        ans_sub = 0
 
        subst = num[0]
 
        for j in range(N - 1):
 
            if (i >> j) & 1:
                ans_sub += int(subst)
                subst = num[j + 1]
            else:
                subst += num[j + 1]
            if j == N - 2:
                ans_sub += int(subst)
 
        sumOfExp += ans_sub
    
    if N == 1:
        print(int(num))
    else:
 
        # Print answer
        print(sumOfExp)