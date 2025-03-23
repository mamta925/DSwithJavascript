# Subsequence Generation using Recursion & Backtracking

This guide explains how to generate all **subsequences (subsets)** of a given array using recursion and backtracking.

---

## 👀 Problem Statement

Given an array of elements, generate **all possible subsequences** (i.e., subsets) of the array.

### ✨ Example:

```js
Input: ['a', 'b']

Output:

['a', 'b']
['a']
['b']
[] 
```

## Concept: Recursion + Backtracking

#### At each index, we have two choices:

- Include the current element

- Exclude the current element

We explore both possibilities recursively.

## Time & Space Complexity

Time Complexity: O(2^n)

Space Complexity: O(n) recursion depth + O(2^n) for result if stored

## Visual Representation (Tree)

For input ['a', 'b'], the recursion decision tree looks like this:

```pgsql
         f(0, [])
        /        \
   include 'a'   exclude 'a'
     /               \
f(1, ['a'])        f(1, [])
   /     \           /     \
+ 'b'   - 'b'     + 'b'   - 'b'
 ↓       ↓         ↓       ↓
['a','b']['a']   ['b']     []

Each path from root to leaf forms one valid subsequence.

 Output
['a', 'b']
['a']
['b']
[]
```

```js
function generateSubsequences(arr, index = 0, path = []) {
  if (index === arr.length) {
    console.log(path); // Print the current subsequence
    return;
  }

  // Include current element
  path.push(arr[index]);
  generateSubsequences(arr, index + 1, path);

  // Backtrack
  path.pop();

  // Exclude current element
  generateSubsequences(arr, index + 1, path);
}

// Example usage
const input = ['a', 'b'];
generateSubsequences(input);
```




