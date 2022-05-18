// Given two intervals: [a, b], [c, d]. Write a function that returns true if they overlap.

// [1, 7], [8, 10] => true


17   3,4


function findoverlap(arr1, arr2){
let x1 = arr1[0]
let x2 = arr1[1]
let y1 = arr2[0]
let y2 = arr2[1]


  return x1<=y2 && y1<=x2

  }

// Given n strings with equal length m, check whether there is at least 1 pair of strings that differ in exactly one character.





















function findPartialMatch(input: Array<string>): boolean {
Let m = input[0].length


if(input.length< 2){
    return;
}

    a: for(let i = 0; i< input.length-1; i++) {   
       let str1 = input[i];  
        k: for(let k = i+1; k < input.length-1; k++) {
              let str2 = input[k];
    let diff = 0;
          b: for(let j = 0; j< m; j++) {
              if(str1[j] == str2[j]){
                   continue;
              } else {
                   diff++;
                  	}
  if(diff>1) {
	    	break b;
	  }

  }

if(diff ==1) {
  	  return true;
	}
}
return false;      
}


findPartialMatch(['abc', 'cde', 'afc']) = true // won't work
findPartialMatch(['abc', 'abc', 'cde']) = false

// dictionary: 'bc', 'ac', 'ab' => O(n*m*m)

O(n*n*m)
