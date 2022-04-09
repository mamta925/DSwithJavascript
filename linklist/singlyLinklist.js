class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinklist {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    let removedElement = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return removedElement;
  }
  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(position) {
    let i = 0;
    if (position >= this.length || position < 0) {
      return null;
    }
    let current = this.head;
    while (i != position) {
      current = current.next;
      i++;
    }
    return current;
  }
  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }
  insert(index, value){
    if (position > this.length || position < 0) {
        return false;
      }
      else if(index == 0){
         return this.unShift(value)
      }
      else if(index == this.length){
       return this.push(value)
    } else {
        let pre = this.get(index-1);
        let newNode= new Node(value)
        let next = prev.next;
        pre.next = newNode
        newNode.next = next;
        this.length++;
        return this;
    }
 
  }
  remove(index, value){
    if (position >= this.length || position < 0) {
        return false;
      }
      else if(index == 0){
         return this.shift(value)
      }
      else if(index == this.length-1){
       return this.pop(value)
    } else {
        let pre = this.get(index-1);
        let removed = pre.next
        let next = removed.next;
        pre.next = next
        this.length--;
        return removed;
    }
 
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let pre = this.head;
    let current = this.head;
    while (current.next != null) {
      pre = current;
      current = current.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }
  reverse(){

    if(!this.head) return null;
    let pre = null;
    let curr = this.head;
    let next;
    this.head = this.tail;
    this.tail = curr;
    while(curr!=null) {
        next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next
    }
   
    return this
  }
  print(){
      var arr = [];
      var curr = this.head
      while(curr){
          arr.push(curr.val);
          curr = curr.next;
      }
      console.log(arr)
  }
}

let list = new SinglyLinklist();
list.push("Hi");
list.push("Hi1");
list.push("Hi2");
list.push("Hi3");
list.push("Hi4");
list.push("Hi5");
let lisst = list.reverse()
list.print(lisst);
