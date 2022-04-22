class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  extractMax(){
      const max = this.values[0];
      const end = this.values.pop();
      if(!this.values.length) return max;
      this.values[0] = end;
      this.sinkDown()
      return max

  }
  sinkDown() {
    let index = 0;
    let length = this.values.length;
    const element = this.values[0];
    while(true){
        let leftChildIndx = 2*index +1;
        let rightChildIndx = 2*index +2;
        let leftChild, rightChild, swap=null;
        if(leftChildIndx< length) {
            leftChild = this.values[leftChildIndx]
            if(leftChild>element){
                swap = leftChildIndx
            }
        }
        if(rightChildIndx< length) {
            rightChild = this.values[rightChildIndx];
            if(rightChild > element ){
                if(swap!=null){
                    if(rightChild> leftChild){
                        swap = rightChildIndx
                    }
                } else {
                    swap = rightChildIndx
                }
            }
        }
        if(swap === null) break;
        this.values[index]= this.values[swap];
        this.values[swap] = element;
        index =  swap;
    }
  }
  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[parentIndex] < element) {
        this.values[index] = this.values[parentIndex];
        this.values[parentIndex] = element;
        index = parentIndex;
      } else {
        break;
      }
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55)
