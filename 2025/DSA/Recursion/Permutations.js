function permute(arr, res,map={}, path=[]){

    if(path.length === arr.length){
      res.push([...path])
      return;

    }
    for(let i =0; i<arr.length; i++){

        if(map[arr[i]]) continue;
        map[arr[i]] = true;
        permute(arr, res, map, [...path, arr[i]] )
        map[arr[i]] = false;
    }

}

const result = []
permute([1,2,3],result)

console.log(result)