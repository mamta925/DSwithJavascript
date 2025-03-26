class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
    dequeue(){
        if(!this.first){
            return null
        } 
        var temp = this.first;
        if(this.first.next == null) {
           this.last = null
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
    enqueue(val){
         let newNode = new Node(val);
         if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
}