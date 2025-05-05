function minimumEffortPath(heights: number[][]): number {
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Directions to move right, down, left, and up
    const m = heights.length;
    const n = heights[0].length;


    const result = Array.from({ length: m }, () => Array(n).fill(Infinity));
    result[0][0] = 0;


    const pq = new PriorityQueue1();
    pq.enqueue([0, [0, 0]]); 

    while (pq.length()) {
        const [currentDiff, [x, y]] = pq.extractMin(); 

  
        if (x === m - 1 && y === n - 1) {
            return currentDiff;
        }

  
        for (const [dx, dy] of dir) {
            const newX = x + dx;
            const newY = y + dy;

      
            if (newX >= 0 && newY >= 0 && newX < m && newY < n) {
   
                const absDiff = Math.abs(heights[x][y] - heights[newX][newY]);
  
                const newEffort = Math.max(currentDiff, absDiff);

           
                if (result[newX][newY] > newEffort) {
                    result[newX][newY] = newEffort;
                    pq.enqueue([newEffort, [newX, newY]]);
                }
            }
        }
    }

    return -1; 
}

class PriorityQueue1 {
    private queue: [number, [number, number]][]; 

    constructor() {
        this.queue = [];
    }

 
    enqueue(item: [number, [number, number]]) {
        this.queue.push(item);
        this._heapifyUp();
    }

   
    extractMin(): [number, [number, number]] {
        if (this.queue.length === 1) return this.queue.pop()!;
        const min = this.queue[0];
        this.queue[0] = this.queue.pop()!;
        this._heapifyDown();
        return min;
    }


    length(): number {
        return this.queue.length;
    }

   
    private _heapifyUp() {
        let index = this.queue.length - 1;
        const item = this.queue[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.queue[parentIndex][0] <= item[0]) break;
            this.queue[index] = this.queue[parentIndex];
            index = parentIndex;
        }
        this.queue[index] = item;
    }


    private _heapifyDown() {
        let index = 0;
        const length = this.queue.length;
        const item = this.queue[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this.queue[leftChildIndex][0] < this.queue[smallest][0]) {
                smallest = leftChildIndex;
            }

            if (rightChildIndex < length && this.queue[rightChildIndex][0] < this.queue[smallest][0]) {
                smallest = rightChildIndex;
            }

            if (smallest === index) break;

            this.queue[index] = this.queue[smallest];
            this.queue[smallest] = item;
            index = smallest;
        }
    }
}


console.log( minimumEffortPath( [[1,2,2],[3,8,2],[5,3,5]]))
console.log( minimumEffortPath(  [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]))
console.log( minimumEffortPath( [[1,2,3],[3,8,4],[5,3,5]]))