class Node {
    constructor(value){
        this.next = null;
        this.value = value;
    }
}

class LinkedList {

    constructor(value){
        this.head =  new Node(value);
        this.tail=  this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);

        this.tail.next=newNode;
        this.tail = newNode;
        this.length++;


    }
    prepend(value){
       let newNode = new Node(value);
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
            newNode.next= traversealPointer.next;
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
    
        return result;
      }

}

const linkedList =  new LinkedList(10);
linkedList.append(20)
linkedList.append(50)
linkedList.prepend(120)
linkedList.insert(180, 3)
linkedList.insert(280, 2)

linkedList.append(80)
linkedList.append(2)
linkedList.insert(2180, 9)
console.log(linkedList.traverse())
linkedList.delete(9)
console.log(linkedList.traverse())
