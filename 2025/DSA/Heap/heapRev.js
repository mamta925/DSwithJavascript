
class MaxBinaryHeap {
    constructor(){
        this.values = []
    }

    bubbleUp(){
        let lastIndex = this.values.length-1;
        let parentIndex = Math.floor((lastIndex-1)/2);

        while(parentIndex>=0 && this.values[lastIndex]>this.values[parentIndex]) {
         
         [this.values[lastIndex],this.values[parentIndex]] =      [this.values[parentIndex], this.values[lastIndex]]
          lastIndex = parentIndex;
         parentIndex = Math.floor((lastIndex-1)/2);
        }

    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp()
    }

    sinkDown(){
        let idx = 0;

        const length = this.values.length;

           while (true) {
                let left = 2*idx+1;
                let right = 2*idx+2;
                let largest = idx;

                if(left<length &&  this.values[left] > this.values[largest]){
                    largest = left
                }
                if(right<length &&  this.values[right] > this.values[largest]){
                    largest = right;
                }

            if (largest === idx) break;

        
            [this.values[idx], this.values[largest]] = [this.values[largest], this.values[idx]];
            idx = largest;


           }


    }
    removeMax(){
        if (this.values.length === 0) return undefined;
        if (this.values.length === 1) return this.values.pop();
        let max = this.values[0];
        this.values[0] = this.values.pop();
        this.sinkDown()

    return {max, value: this.values};

    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(123);
heap.insert(11);
heap.insert(12);
heap.insert(15);
heap.insert(10);
console.log(heap)
console.log(heap.removeMax())