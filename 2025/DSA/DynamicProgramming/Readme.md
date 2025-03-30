# 🧠 Dynamic Programming Problem-Solving Framework

This guide outlines a simple and powerful 3-step method to approach and solve dynamic programming (DP) problems. Use it consistently to tackle problems involving optimization, counting, and decision-making over sequences.

---

## ✅ Step 1: Represent the Problem in Terms of Index (and State)

- Identify the **minimum information needed** to describe a subproblem.
- Usually involves an `index` (position in array/string) and possibly additional state variables (e.g., remaining capacity, sum, steps left).
- Define your `dp[i]` or `dp[i][j]` based on the problem's requirements.

**Examples:**
- `dp[i]` = max sum up to index `i`
- `dp[i][j]` = true if a subset of the first `i` elements can sum to `j`

---

## ✅ Step 2: Explore All Possible Decisions at That Index

- At each index/state, **enumerate all valid choices**.
- For each choice, **move to the next state** and use DP to store the result.
- This is where you write your **recurrence relation**.

**Examples:**
- Include or exclude current element
- Jump 1 step or 2 steps
- Try taking a coin or skipping it

---

## ✅ Step 3: Aggregate the Results (Sum / Min / Max / Count)

- Depending on the problem, combine results from all choices:
  - **Sum** for total ways
  - **Min/Max** for optimization
  - **Boolean OR/AND** for possibility checks

- Build your answer either:
  - **Top-down** (recursion with memoization)
  - **Bottom-up** (tabulation with a DP array/table)

---

## 🧪 Examples

### Climbing Stairs (Count Ways)

```js
// dp[i] = number of ways to reach step i
dp[i] = dp[i - 1] + dp[i - 2];
