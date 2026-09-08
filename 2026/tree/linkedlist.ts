class ListNode {
    value: unknown;
    next: ListNode | null;

    constructor(val: unknown) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedlist {
    length: number;
    tail: ListNode |null;
    head: ListNode |null;
    constructor(){
        this.length = 0;
        this.tail = null;
        this.head = null;

    }

    push(value: unknown){
        let newNode = new ListNode(value)
        if (this.tail === null) {
            this.head = newNode;
            this.tail =  this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
   
        this.length++;

        return this;

    }
}