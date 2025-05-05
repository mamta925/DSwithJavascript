function rec(stack, elemnt) {
    if(stack.length === 0) {
        return;
    }

    const top = stack.pop()
    rec(stack);
    insertBottom(stack, top);


}
function insertBottom(stack, element){
  if(stack.length === 0) {
    stack.push(element);
    return;
  }
  let top = stack.pop();
  insertBottom(stack, element);
  stack.push(top);
}


let s = [1,2,3,4,5]
rec(s);
console.log(s)