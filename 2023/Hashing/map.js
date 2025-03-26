
const map1 = new Map();
map1.set('a',1);
map1.set('l', 2)
map1.set('c', 5)

for(let [a, b] of map1){
    console.log(a, b)
}