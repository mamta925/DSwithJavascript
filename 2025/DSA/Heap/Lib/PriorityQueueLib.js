import {
  MinPriorityQueue,
  MaxPriorityQueue
} from
  "@datastructures-js/priority-queue";
const arr = [10, 22, 4, 5, 21, 8, 9, 59];
const numbersMinQueue = new MinPriorityQueue();
const numbersMaxQueue = new MaxPriorityQueue();
  for (const num of arr) {
  numbersMinQueue.enqueue(num);
  numbersMaxQueue.enqueue(num);
}

console.log(numbersMinQueue.toArray());
console.log(numbersMaxQueue.toArray());

const bids = [
  { id: 1, value: 1000 },
  { id: 2, value: 20000 },
  { id: 3, value: 1000 },
  { id: 4, value: 1500 },
  { id: 5, value: 12000 },
  { id: 6, value: 4000 },
  { id: 7, value: 8000 }
];
const bidsHeapMin = new MinHeap();
const bidsHeapMax = new MaxHeap();
bids.forEach((bid) => bidsHeapMin.enqueue(bid));
bids.forEach((bid) => bidsHeapMax.enqueue(bid));

console.log(bidsHeapMin.toArray());
console.log(bidsHeapMax.toArray());