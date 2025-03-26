function stringifyNumbers(obj){
   let newObj = {}
    for(const key in obj){
        
        if(typeof obj[key] === 'object'&& !Array.isArray(obj[key])){
            newObj[key] = stringifyNumbers(obj[key])
        } else  if(typeof obj[key] === 'number'){
                newObj[key] = obj[key].toString()
            } else {
                newObj[key] = obj[key]
            }
    }
    return newObj
}
let objs = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(stringifyNumbers(objs))

