class HashTable {
    constructor(size=53){
        this.data = new Array(size);
        this.size = 0;
    }
    _hash(key) {
      let hash = 0;
      let prime = 31;
      for(let i =0;i < Math.min(key.length, 100); i++){
        let value = keys[i].charAt(0)-96;
        hash   = (hash*prime +value)%this.data.length;
      }
      return hash;
      }

      keys(){
        const keysArray = []
        for(let i=0;i<this.data.length; i++){
            let currentBucket = this.data[i];
            if(currentBucket){
                for(let i=0;i<currentBucket.length; i++){

                       keysArray.push(currentBucket[i][0]) 
                }
            }

        }
        return keysArray;
      }

      set(key, value){
        const index = this._hash(key);
        if (!this.data[index]) this.data[index] = [];
        //update existing
        //then insert
        const bucket = this.data[index];
        for (let pair of bucket) {
          if (pair[0] === key) {
            pair[1] = value; // update existing
            return;
          }
        }
    
        bucket.push([key, value]);
        this.size++;
        
      }
      get(key){
        const index = this._hash(key);
        let currentBucket = this.data[index]

        if(currentBucket ){
            for (let [k, v] of currentBucket) {
                if (k === key) return v;
              }
            
        }
        return undefined
      }
      has(key) {
        return this.get(key) !== undefined;
      }
    

}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 10000);
myHashTable.set('Mango', 10000);
console.log(myHashTable.get('grapes'))
console.log(myHashTable.keys())