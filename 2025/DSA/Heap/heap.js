class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }

}

class MaxBinaryHeap{
    constructor(){
        this.values = []
    }
    insert(value){
        this.values.push(value);
     this.bubbleup();
        return this.values;

    }
    bubbleup(){
        let indx = this.values.length-1;
       let parent = Math.floor((indx-1)/2);
        while(parent>=0){
            if(this.values[parent]<this.values[indx]){
                [this.values[parent],this.values[indx] ] =  [this.values[indx], this.values[parent] ]
                indx = parent;
                parent = Math.floor((parent-1)/2);
            } else{
                return;
            }
        }

    }
    removeMax(){
        if (this.values.length === 0) return undefined;
        if (this.values.length === 1) return this.values.pop();

        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;

        let index = 0;
        const length = this.values.length;

        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            let largest = index;

            if (left < length && this.values[left] > this.values[largest]) {
            largest = left;
            }

            if (right < length && this.values[right] > this.values[largest]) {
            largest = right;
            }

            if (largest === index) break;

        
            [this.values[index], this.values[largest]] = [this.values[largest], this.values[index]];
            index = largest;
        }

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
console.log(heap)
console.log(heap.removeMax())