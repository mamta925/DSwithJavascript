
class Node {
    constructor(value){
        this.value = value;
        this.next = null
        this.prev = null
    }
}

class QueueLinkedList {
  
    constructor() {
      this.length = 0;
      this.first = null;
      this.last = null;
    }
  
    enqueue(value){
        let newNode = new Node(value);
       if(!this.length){
        this.first = newNode;
        } else {
            newNode.next=this.last;
            this.last.prev = newNode;
        }
        this.last = newNode;
        this.length++;
    }

    dequeue(){
      if (!this.length) return undefined;
      const firstItem = this.first.value
      this.first = this.first.prev;
      this.first && (this.first.next= null);
      this.length--;
      console.log([firstItem], " processed")
      return firstItem
    }
    printQueue() {
        let current = this.first;
        const history = [];
        while (current) {
          history.push(current.value);
          current = current.prev;
        }
        console.log("queue History:", history); // first to last
      }
  
  }
  
  const historyLinkedList = new QueueLinkedList ();
  historyLinkedList.enqueue("I am first")
  historyLinkedList.enqueue("I am 2")
  historyLinkedList.enqueue("I am 3")

  historyLinkedList.printQueue()
  historyLinkedList.dequeue()
  historyLinkedList.printQueue()
  historyLinkedList.dequeue()
  historyLinkedList.printQueue()
  historyLinkedList.dequeue()
  historyLinkedList.printQueue()
  historyLinkedList.dequeue()
  historyLinkedList.printQueue()