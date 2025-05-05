//explain UI authentication

const List = [
  "Rosie_claw", "Rosie_sensors", "Dustie_case", "Optimus_sensors", "Rust_sensors",
  "Rosie_case", "Rust_case", "Optimus_speaker", "Rosie_wheels", "Dustie_case",
  "Dustie_arms", "Rust_claw", "Dustie_case", "Dustie_speaker", "Optimus_case",
  "Optimus_wheels", "Optimus_wheels", "Rust_legs", "Optimus_sensors"
];

const availableParts = new Set(["sensors", "case", "speaker", "wheels"]);

// Step 1: Group required parts per robot
const robotParts = {};

for (const entry of List) {
  const [robot, part] = entry.split("_");
  if (!robotParts[robot]) {
    robotParts[robot] = new Set();
  }
  robotParts[robot].add(part);
}

// Step 2: Filter robots where all parts are available
const buildableRobots = [];

for (const robot in robotParts) {
  const parts = robotParts[robot];
  const canBuild = [...parts].every(part => availableParts.has(part));
  if (canBuild) {
    buildableRobots.push(robot);
  }
}

console.log(buildableRobots);



function findAllEndLocations(paths) {
  const graph = {};
  const destinations = new Set();
  const allNodes = new Set();

  // Build graph and track destinations
  for (const [from, to] of paths) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
    destinations.add(to);
    allNodes.add(from);
    allNodes.add(to);
  }

  // Start nodes = nodes that never appear as destination
  const startNodes = [...allNodes].filter(node => !destinations.has(node));

  // DFS to find all end nodes for a given start
  const getEndings = (start) => {
    const result = new Set();

    const dfs = (node) => {
      if (!graph[node]) {
        result.add(node); // It's a leaf
        return;
      }
      for (const next of graph[node]) {
        dfs(next);
      }
    };

    dfs(start);
    return [...result];
  };

  // Build result
  const output = {};
  for (const start of startNodes) {
    output[start] = getEndings(start);
  }

  return output;
}

// Sample input
const paths = [
  ["B", "K"],
  ["C", "K"],
  ["E", "L"],
  ["F", "G"],
  ["J", "M"],
  ["E", "F"],
  ["C", "G"],
  ["A", "B"],
  ["A", "C"],
  ["G", "H"],
  ["G", "I"]
];

console.log(findAllEndLocations(paths));

function justifyText(sentences, exactLen) {
  const words = sentences.flatMap(sentence => sentence.split(' '));
  const result = [];
  let i = 0;

  while (i < words.length) {
    let lineWords = [];
    let lineLength = 0;

    // First, pack as many words as possible within the limit
    while (i < words.length) {
      const word = words[i];
      const extraDashes = lineWords.length; // number of hyphens needed so far

      if (lineLength + word.length + extraDashes <= exactLen) {
        lineWords.push(word);
        lineLength += word.length;
        i++;
      } else {
        break;
      }
    }

    if (i === words.length || lineWords.length === 1) {
      // Last line or only one word → no justification needed
      result.push(lineWords.join('-'));
    } else {
      const totalDashes = exactLen - lineLength;
      const slots = lineWords.length - 1;
      const dashPerSlot = Math.floor(totalDashes / slots);
      let extra = totalDashes % slots;

      let line = '';
      for (let j = 0; j < lineWords.length; j++) {
        line += lineWords[j];
        if (j < slots) {
          // Add the base number of dashes plus one if there's extra
          line += '-'.repeat(dashPerSlot + (extra > 0 ? 1 : 0));
          if (extra > 0) extra--;
        }
      }

      result.push(line);
    }
  }

  return result;
}


// Example usage:
const input = [
  "The day began as still as the",
  "night abruptly lighted with",
  "brilliant flame"
];
const exactLen = 24;

console.log(justifyText(input, exactLen));


function findFinalPositions(startPosition, lastNumber, teleporters, maxValue) {
  const teleportMap = new Map();

  // Parse teleporters into a map
  for (const pair of teleporters) {
    const [from, to] = pair.split(',').map(Number);
    teleportMap.set(from, to);
  }

  const finalPositions = new Set();

  // Try all dice values from 1 to maxValue
  for (let roll = 1; roll <= maxValue; roll++) {
    let position = startPosition + roll;

    // Clamp to lastNumber
    if (position > lastNumber) {
      position = lastNumber;
    }

    // Follow teleporters if any (can be chained)
    const visited = new Set();
    while (teleportMap.has(position)) {
      if (visited.has(position)) break; // avoid cycles
      visited.add(position);
      position = teleportMap.get(position);
    }

    finalPositions.add(position);
  }

  return Array.from(finalPositions).sort((a, b) => a - b);
}

// Example usage:
const startPosition = 2;
const lastNumber = 10;
const teleporters = ["3,1", "5,10", "8,2"];
const maxValue = 6;

console.log(findFinalPositions(startPosition, lastNumber, teleporters, maxValue));


function find_good_endings(good_endings, bad_endings, choices) {
  const graph = new Map();
  const choiceSet = new Set();

  // Build graph: initialize choice-based edges
  for (const [page, opt1, opt2] of choices) {
    graph.set(page, [opt1, opt2]);
    choiceSet.add(page);
  }

  const visited = new Set();
  const queue = [1];
  const goodSet = new Set(good_endings);
  const badSet = new Set(bad_endings);
  const foundGoodEndings = new Set();

  while (queue.length > 0) {
    const page = queue.pop();
    if (visited.has(page)) continue;
    visited.add(page);

    if (goodSet.has(page)) {
      foundGoodEndings.add(page);
      continue; // Stop here, it's an ending
    }

    if (badSet.has(page)) {
      continue; // Stop here, it's a bad ending
    }

    if (graph.has(page)) {
      // It's a choice page
      for (const next of graph.get(page)) {
        if (!visited.has(next)) queue.push(next);
      }
    } else {
      // Normal flow → next page
      queue.push(page + 1);
    }
  }

  return Array.from(foundGoodEndings).sort((a, b) => a - b);
}

const good_endings = [10, 15, 25, 34];
const bad_endings = [21, 30, 40];

const choices1 = [[3, 16, 24]];
console.log(find_good_endings(good_endings, bad_endings, choices1)); // [25]

const choices2 = [[3, 16, 20]];
console.log(find_good_endings(good_endings, bad_endings, choices2)); // []

const choices3 = [[3, 16, 19], [20, 2, 17]];
console.log(find_good_endings(good_endings, bad_endings, choices3)); // []

const choices4 = [[3, 2, 19], [20, 21, 34]];
// console.log(find_good_endings(good_endings, bad_endings, choices4)); // [34]


function longestSongChain(songs, startSong) {
  // Preprocess: map from first word to all songs starting with it
  const firstWordMap = new Map();

  for (const song of songs) {
    const firstWord = song.split(" ")[0];
    if (!firstWordMap.has(firstWord)) {
      firstWordMap.set(firstWord, []);
    }
    firstWordMap.get(firstWord).push(song);
  }

  let maxChain = [];

  // BFS: each state is [currentSong, chainSoFar, visitedSet]
  const queue = [[startSong, [startSong], new Set([startSong])]];

  while (queue.length > 0) {
    const [current, chain, visited] = queue.shift();

    const words = current.split(" ");
    const lastWord = words[words.length - 1];

    const nextSongs = firstWordMap.get(lastWord) || [];
    let extended = false;

    for (const next of nextSongs) {
      if (!visited.has(next)) {
        extended = true;
        const newVisited = new Set(visited);
        newVisited.add(next);
        queue.push([next, [...chain, next], newVisited]);
      }
    }

    if (!extended && chain.length > maxChain.length) {
      maxChain = chain;
    }
  }

  return maxChain;
}


const songs1 = [
  "Silent Running",
  "Running to Stand Still",
  "Still Loving You",
  "You Belong With Me",
  "Still and You"
];

console.log(longestSongChain(songs1, "Silent Running"));


function canReachLastNumber(start, lastNumber, maxDie, teleporters) {
  const teleportMap = {};
  for (const t of teleporters) {
    const [from, to] = t.split(',').map(Number);
    teleportMap[from] = to;
  }

  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === lastNumber) return true;
    if (visited.has(current)) continue;

    visited.add(current);

    for (let roll = 1; roll <= maxDie; roll++) {
      let next = current + roll;
      if (next > lastNumber) next = lastNumber;

      if (teleportMap[next] !== undefined) {
        next = teleportMap[next];
      }

      if (!visited.has(next)) {
        queue.push(next);
      }
    }
  }

  return false;
}
