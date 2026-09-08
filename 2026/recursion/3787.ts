/**
 * 3787. Find Diameter Endpoints of a Tree
 *
 * A node is special iff some longest path in the tree starts or ends there.
 *
 * Tree fact:
 *   Pick any node, walk to a farthest node A.
 *   Walk from A to a farthest node B. A--B is a diameter.
 *   Every diameter endpoint is at distance D from A, or from B (or both).
 *
 * So 3 BFS: A from 0, dist from A, dist from B. Mark if dist == D.
 *
 * Time:  O(n)  three tree traversals
 * Space: O(n)
 */

function findSpecialNodes(n: number, edges: number[][]): string {
    const adj: number[][] = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }

    function bfs(start: number): { far: number; dist: number[] } {
        const dist = new Array(n).fill(-1);
        dist[start] = 0;
        const q = [start];
        let far = start;
        for (let h = 0; h < q.length; h++) {
            const u = q[h];
            if (dist[u] > dist[far]) {
                far = u;
            }
            for (const v of adj[u]) {
                if (dist[v] === -1) {
                    dist[v] = dist[u] + 1;
                    q.push(v);
                }
            }
        }
        return { far, dist };
    }

    const a = bfs(0).far;
    const fromA = bfs(a);
    const fromB = bfs(fromA.far);
    const D = fromA.dist[fromA.far];

    let s = "";
    for (let i = 0; i < n; i++) {
        s += fromA.dist[i] === D || fromB.dist[i] === D ? "1" : "0";
    }
    return s;
}

console.log(findSpecialNodes(3, [[0, 1], [1, 2]]));
console.log(
    findSpecialNodes(7, [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [3, 5],
        [1, 6],
    ]),
);
console.log(findSpecialNodes(2, [[0, 1]]));
