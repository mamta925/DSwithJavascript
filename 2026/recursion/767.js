// 767. Reorganize String
// Rearrange s so no two adjacent chars are the same.
// Return any valid string, or "" if impossible.
//
// Greedy (even slots first):
// 1. Count each letter. If any letter appears more than (n+1)/2 times,
//    two copies must sit next to each other: impossible.
// 2. Put the most frequent letter on even indices 0, 2, 4, ...
//    Then fill remaining letters the same way. If even slots run out,
//    wrap to odd indices 1, 3, 5, ...
// Even spacing keeps copies of the same letter at least one apart.
//
// Flow:
//
//   count[26]  -->  maxFreq > (n+1)/2 ? --yes-->  ""
//                         |
//                        no
//                         v
//              pick letter with max count
//                         v
//              place on even indices, wrap to odd
//                         v
//              remaining letters, same placement
//                         v
//                      result string

function reorganizeString(s) {
    const n = s.length;
    const count = new Array(26).fill(0);

    for (let i = 0; i < n; i++) {
        count[s.charCodeAt(i) - 97]++;
    }

    let maxFreq = 0;
    let maxChar = 0;
    for (let c = 0; c < 26; c++) {
        if (count[c] > maxFreq) {
            maxFreq = count[c];
            maxChar = c;
        }
    }

    if (maxFreq > Math.floor((n + 1) / 2)) {
        return "";
    }

    const out = new Array(n);
    let i = 0;

    function place(ch) {
        while (count[ch] > 0) {
            out[i] = String.fromCharCode(97 + ch);
            count[ch]--;
            i += 2;
            if (i >= n) {
                i = 1;
            }
        }
    }

    place(maxChar);
    for (let c = 0; c < 26; c++) {
        if (c !== maxChar) {
            place(c);
        }
    }

    return out.join("");
}

console.log(reorganizeString("aab")); // aba
console.log(reorganizeString("aaab")); // ""
console.log(reorganizeString("vvvlo")); // vlvov  (any valid)

/*
  n = s.length   alphabet size k = 26

  Time:  O(n)  count + one write of each char
  Space: O(n)  output array; count is O(1)
*/
function countOfAtoms(formula: string): string {
    const stack: Record<string, number>[] = [{}];
    const n = formula.length;
    let i = 0;

    const parseCount = (): number => {
        if (i >= n || formula[i] < "0" || formula[i] > "9") {
            return 1;
        }
        let num = 0;
        while (i < n && formula[i] >= "0" && formula[i] <= "9") {
            num = num * 10 + Number(formula[i]);
            i++;
        }
        return num;
    };

    while (i < n) {
        const ch = formula[i];

        if (ch === "(") {
            stack.push({});
            i++;
        } else if (ch === ")") {
            i++;
            const k = parseCount();
            const inner = stack.pop()!;
            const parent = stack[stack.length - 1];
            for (const atom in inner) {
                parent[atom] = (parent[atom] || 0) + inner[atom] * k;
            }
        } else {
            let name = ch;
            i++;
            while (i < n && formula[i] >= "a" && formula[i] <= "z") {
                name += formula[i];
                i++;
            }
            const k = parseCount();
            const top = stack[stack.length - 1];
            top[name] = (top[name] || 0) + k;
        }
    }

    const counts = stack[0];
    const atoms = Object.keys(counts).sort();
    let result = "";
    for (const atom of atoms) {
        result += atom;
        if (counts[atom] > 1) {
            result += String(counts[atom]);
        }
    }
    return result;
}