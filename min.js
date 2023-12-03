// There are n players. They have to collect m points. All the players and coins are in 1-D space i.e on 
// a number line. The initial location of all the players is given as the array players 
// where player[i denotes the location of the ith player. The location of all the points is given 
//     as another array point where pointlil denotes the location of the ith point. In one second a player can 
//     either move 1 step left or 1 step right or not move at all. A point is considered collected if any of the n 
//     players had visited the point's location. The players can move simultaneously and independently of each other every second.
//     The task is to find the minimum time (in seconds) required to collect all the points if players act optimally.


function getNodeToRemove(g_nodes, gFrom, gTo, malware) {
    const graph = {};

    // Create an adjacency list representation of the graph
    for (let i = 0; i < gFrom.length; i++) {
        if (!graph[gFrom[i]]) {
            graph[gFrom[i]] = [];
        }
        if (!graph[gTo[i]]) {
            graph[gTo[i]] = [];
        }
        graph[gFrom[i]].push(gTo[i]);
        graph[gTo[i]].push(gFrom[i]);
    }

    function dfs(node, infectedNodes) {
        infectedNodes.add(node);
        if (graph[node] && Array.isArray(graph[node])) {  // Check if graph[node] is an array
            for (const neighbor of graph[node]) {
                if (!infectedNodes.has(neighbor) && malware[neighbor - 1] === 1) {
                    dfs(neighbor, infectedNodes);
                }
            }
        }
    }

    let minInfected = Infinity;
    let optimalNodeToRemove = -1;

    // Iterate through each node and check the impact of removing it
    for (let i = 1; i <= g_nodes; i++) {
        if (malware[i - 1] === 1) {
            const infectedNodes = new Set();
            dfs(i, infectedNodes);
            
            let totalInfected = 0;
            for (let j = 0; j < malware.length; j++) {
                if (malware[j] === 1 || infectedNodes.has(j + 1)) {
                    totalInfected++;
                }
            }

            if (totalInfected < minInfected) {
                minInfected = totalInfected;
                optimalNodeToRemove = i;
            }
        }
    }

    return optimalNodeToRemove;
}

// Example usage
const g_nodes = 9;
const gFrom = [1, 2, 4, 6, 7];
const gTo = [2, 3, 5, 7, 8];
const malware = [0, 0, 1, 0, 1, 0, 0, 0, 0];

const result = getNodeToRemove(g_nodes, gFrom, gTo, malware);
console.log(result); 

// Example usage
const g_nodes = 9;
const gFrom = [1, 2, 4, 6, 7];
const gTo = [2, 3, 5, 7, 8];
const malware = [0, 0, 1, 0, 1, 0, 0, 0, 0];

const result = getNodeToRemove(g_nodes, gFrom, gTo, malware);
console.log(result); 