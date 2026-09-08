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

console.log(countOfAtoms("H2O"));
console.log(countOfAtoms("Mg(OH)2"));
console.log(countOfAtoms("K4(ON(SO3)2)2"));
console.log(countOfAtoms("(OH)"));

/*
  n = formula.length
  k = number of unique atom names (at most n)

  Time:  O(n + k log k) to scan the formula and sort names for the answer.
         Each ')' merges one inner map into its parent. Deep nesting with
         many distinct atoms can make merges O(n^2) in the worst case.

  Space: O(n)
         stack of maps, one frame per open '('. Atom names and counts
         stored on those maps are bounded by n.
*/
