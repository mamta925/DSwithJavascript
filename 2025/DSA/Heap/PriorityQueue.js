class Patient {
    constructor(name, priority) {
      this.name = name;
      this.priority = priority;
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.patientQueue = [];
    }
  
    enqueue(name, priority) {
      const newPatient = new Patient(name, priority);
      this.patientQueue.push(newPatient);
      this.bubbleUp();
      return this.patientQueue;
    }
  
    bubbleUp() {
      let index = this.patientQueue.length - 1;
      const element = this.patientQueue[index];
  
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.patientQueue[parentIndex];
  
        if (element.priority <= parent.priority) break;
  
        [this.patientQueue[parentIndex], this.patientQueue[index]] =
          [this.patientQueue[index], this.patientQueue[parentIndex]];
  
        index = parentIndex;
      }
    }
  
    dequeue() {
      const max = this.patientQueue[0];
      const end = this.patientQueue.pop();
  
      if (this.patientQueue.length === 0) return max;
  
      this.patientQueue[0] = end;
      this.sinkDown();
      return max;
    }
  
    sinkDown() {
      let index = 0;
      const length = this.patientQueue.length;
      const element = this.patientQueue[0];
  
      while (true) {
        let leftIdx = 2 * index + 1;
        let rightIdx = 2 * index + 2;
        let left, right;
        let swap = null;
  
        if (leftIdx < length) {
          left = this.patientQueue[leftIdx];
          if (left.priority > element.priority) {
            swap = leftIdx;
          }
        }
  
        if (rightIdx < length) {
          right = this.patientQueue[rightIdx];
          if (
            (swap === null && right.priority > element.priority) ||
            (swap !== null && right.priority > left.priority)
          ) {
            swap = rightIdx;
          }
        }
  
        if (swap === null) break;
  
        [this.patientQueue[index], this.patientQueue[swap]] =
          [this.patientQueue[swap], this.patientQueue[index]];
        index = swap;
      }
    }
  }
  const triageQueue = new PriorityQueue();

triageQueue.enqueue("Common Cold", 1);
triageQueue.enqueue("Heart Attack", 98);
triageQueue.enqueue("Fracture", 59);
triageQueue.enqueue("Migraine", 34);
triageQueue.enqueue("Viral Infection", 10);
triageQueue.enqueue("Kidney Infection", 50);
triageQueue.enqueue("Head Explosion", 100);

console.log("Next critical patient:", triageQueue.dequeue()); // Head Explosion
console.log("Next critical patient:", triageQueue.dequeue()); // Heart Attack