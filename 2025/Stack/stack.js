/**
 * Browser history
 * can be implemented by arrays and linked list
 */

class Stack {
  
  constructor(){
    this.stack = [];
    this.top = -1;
  }

  undo(){
    if (this.top > 0) {
        this.top--;
        return this.stack[this.top];
      }
      return null; 
  }

  redo(){
    if (this.top < this.stack.length - 1) {
        this.top++;
        return this.stack[this.top];
      }
      return null; 
   }
 

  push(value){
    this.top = this.top +1;
    this.stack[this.top] = value
    return this.top;
  }
  peek(){
    if (this.top === -1) return undefined;
    return this.stack[this.top]
  }
  pop(){
    if (this.top === -1) return undefined;
    const lastItem = this.stack[this.top];
    delete this.stack[this.top];
    this.top--;
    return lastItem
  }
  printHistory() {
    console.log("Current History:", this.stack.slice(0, this.top + 1));
    console.log("Current Page:", this.stack[this.top]);
  }

}

const history = new Stack();

history.push("Home");
history.push("About");
history.push("Contact");

history.printHistory(); 

console.log("Undo:", history.undo()); 
console.log("Undo:", history.undo()); 

console.log("Redo:", history.redo()); 

history.push("Careers");
history.printHistory(); 


/**
 * Browser history
 * can be implemented by arrays and linked list
 */


class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class StackLinkedList {
  
    constructor(){
      this.length = 0;
      this.top = null;
    }
  
    push(value){
        const newNode = new Node(value)
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
      return this.top;
    }

    peek(){
      if (this.top === null) return undefined;
      return this.top.value;
    }
    isEmpty() {
        return this.length === 0;
      }
    pop(){
      if (this.top === null) return undefined;
      const lastItem = this.peek()
      this.top = this.top.next;
      this.length--;
      return lastItem
    }
    printHistory() {
        let current = this.top;
        const history = [];
        while (current) {
          history.push(current.value);
          current = current.next;
        }
        console.log("Stack History:", history.reverse()); // top to bottom
        console.log("Current Page:", this.peek());
      }
  
  }
  
  const historyLinkedList = new StackLinkedList();