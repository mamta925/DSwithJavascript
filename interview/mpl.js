// // There is an array of integers
// // 
// // // const target = 11

// // // You need to find any two numbers whose sum is = target.

// // // – code below


// // // Let map = {}


// // function getTargetNumbers(arr, targetNumberSum){
// //     let map = {}
// //    for(let value of arr){
// //         let diff = targetNumberSum - value;
// //         if(map[diff]){
// //             return [diff, map[diff]]
// //         }
// //         map[diff] = value;
        
// //    }
// //    return 'not found'
// // }
// // const array = [1,2,4,3,6,3,5,-1,-10,3];
// // console.log(getTargetNumbers(array, 11))

// let root;

// class Node {
//     constructor(value){
//         this.data = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// let firstPath = []
// let secondPath = []

// function getPath(current,value, path){

//     if(current == null) return false;
//     path.push(root.value)
//     if(root.data ==value) {
//         return path;
//     }
//     if(current.left!= null ){
//         return getPath(current.left, value, path)
//     }
//     if(root.right!= null ){
//         return getPath(current.right, value, path)
//     }
//     path.pop();
//     return path;
// }

// function tree(array, left, right){
//     if(right<=left){
//         return null
//     }
//     let mid = Math.floor((left+right)/2)
//     root = new Node(array[mid])
//     root.left = tree(array, left, mid-1 );
//     root.right = tree(array, mid+1, right )
//     return root;

// }

// let arr = [1,2,5,6,7,8,0]
// tree(arr, 0, arr.length)


async function name() {
    return new Promise((resolve, reject)=>{resolve(5)});

}

(async()=>{
    let value = await name();
    console.log(value)
})();
