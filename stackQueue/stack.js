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
    pop(){
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
    push(value){
        let newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            newNode.next = temp;
            this.first = newNode;
        }
        return ++this.size;
    }
}