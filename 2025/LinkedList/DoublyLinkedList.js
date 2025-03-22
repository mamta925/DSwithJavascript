class Node {
    constructor(value){
        this.next = null;
        this.value = value;
        this.prev = null;
    }
}

class DoublyLinkedList {

    constructor(value){
        this.head =  new Node(value);
        this.tail=  this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);

        newNode.prev=this.tail;
        this.tail.next=newNode;
        this.tail = newNode;
        this.length++;


    }
    prepend(value){
       let newNode = new Node(value);
       this.head.prev = newNode;
       newNode.next = this.head;
       this.head = newNode;
       this.length++;

    }
    insert(value, index){

        if(index > this.length){
            this.append(value)
        } else if(index==1){
            this.prepend(value)
        } else {

            let traversealPointer = this.head;
            let count = 1
            while(count!=index-1){
                traversealPointer = traversealPointer.next;
                count++;
            }
            const newNode = new Node(value);
            newNode.prev= traversealPointer;
            newNode.next= traversealPointer.next;
            traversealPointer.next.prev=newNode;
            traversealPointer.next = newNode;

        }
   
    }
    update(index, value) {
        const node = this._getNode(index);
        if (node) node.value = value;
      }

      _getNode(index) {
        if (index < 0 || index >= this.length) return null;
    
        let current = this.head;
        for (let i = 0; i < index; i++) {
          current = current.next;
        }
    
        return current;
      }
    
    delete(index){
        if(index<1 && !this.length && index> this.length ){
            return undefined; 
        } else {

            if(index===1){
                //remove head
                const deletedValue = this.head.value;
                if(this.length===1){
                    this.head = null;
                    this.tail = null;
                } else {
                    this.head = this.head.next
                }
             return deletedValue;

            }
            let traversealPointer = this.head;
            let count = 1
            while(count!=index-1){
                traversealPointer = traversealPointer.next;
                count++;
            }
            
            traversealPointer.next = traversealPointer.next.next;
            if(this.length === index){
                this.tail = traversealPointer;
            }
            this.length--;
             
        }
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
    
        let current = this.head;
        for (let i = 0; i < index; i++) {
          current = current.next;
        }
    
        return current.value;
      }
    traverse() {
        const result = [];
        let current = this.head;
    
        while (current !== null) {
          result.push(current.value);
          current = current.next;
        }
    
        return console.log(result);
      }

}

const doublyLinkedList =  new DoublyLinkedList(10);
doublyLinkedList.append(20)
doublyLinkedList.append(50)
doublyLinkedList.prepend(120)
doublyLinkedList.insert(180, 3)
doublyLinkedList.insert(280, 2)

doublyLinkedList.append(80)
doublyLinkedList.append(2)
doublyLinkedList.insert(2180, 9)
console.log(doublyLinkedList.traverse())
doublyLinkedList.delete(9)
console.log(doublyLinkedList.traverse())
