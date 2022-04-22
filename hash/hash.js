class HashTable{
    constructor(size = 53){
        this.keyMap = new Array(size)
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
          let char = key[i];
          let value = char.charCodeAt(0) - 96
          total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value){
        let index = this._hash(key);
        if( this.keyMap[index]) {
            this.keyMap[index][key] = value
        } else {
            this.keyMap[index] = {[key]: value}
        }
    }
    keys(){
        let keysArr = [];
        for(let i =0; i< this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(const key in this.keyMap[i]) {
                    keysArr.push(key)
                }
            }
        }
        return keysArr;
    }
    values(){
          let valuesArr = [];
          for(let i =0; i< this.keyMap.length;i++){
              if(this.keyMap[i]){
                  for(const key in this.keyMap[i]) {
                    valuesArr.push(this.keyMap[i][key])
                  }
              }
          }
          return valuesArr;
    }
    get(key){
        let index = this._hash(key);
        if( this.keyMap[index]) {
           return this.keyMap[index][key]
        } 
        return null;
    }
}

let ht = new HashTable();
ht.set("hello","goodbye")
ht.set("pink","goodbye")
ht.set("cyan","goodbye")
ht.set("purple","goodbye")
ht.get("hello")
console.log(ht.keys())
console.log(ht.values())