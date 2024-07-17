/*
     * * * *
     * * * *
     * * * *
     * * * *
 */

function pattern1(n) {
    for(let i = 0; i< n; i++){
        console.log("* ".repeat(n));
    }
}

pattern1(4)

/*
     *
     * *
     * * *
     * * * *
     * * * * *
 */

function pattern2(n) {
    for(let i = 0; i< n; i++){
        console.log("* ".repeat(i+1));
    }
}

pattern2(5)


/*
     1
     1 2
     1 2 3 4
     1 2 3 4 5
 */

/*
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
*/
function pattern3(n) {
    let pattern = "";
    for(let i = 0; i< n; i++){
        for (let j = 0; j <= i; j++) {
            pattern += j+1 + " ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}

pattern3(5)

/*
    1
    2 2
    3 3 3
    4 4 4 4
    5 5 5 5 5
*/
function pattern4(n) {
    let pattern = "";
    for(let i = 0; i< n; i++){
        for (let j = 0; j <= i; j++) {
            pattern += i+1 + " ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}

pattern4(5)


/*
    * * * * *
    * * * *
    * * *
    * *
    *
*/
function pattern5(n) {
    let pattern = "";
    for(let i = 0; i< n; i++){
        for (let j = n; j > i; j--) {
            pattern += "* ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}

pattern5(5)

/*
    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1
*/
function pattern6(n) {
    let pattern = "";
    for(let i = n; i>0; i--){
        for (let j = 0; j<i; j++) {
            pattern += j+1 +" ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}

pattern6(5)

/*
                 *
              *  *  *
           *  *  *  *  *
        *  *  *  *  *  *  *
     *  *  *  *  *  *  *  *  *
*/
function pattern7(n) {
    let pattern = "";
    for(let i = 0; i<n; i++){
        for (let j = 0; j<n-i-1; j++) {
            pattern += "   ";
        }
        for (let j = 0; j<2*i+1; j++) {
            pattern += " * ";
        }
        for (let j = 0; j<n-i-1; j++) {
            pattern += "   ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}

pattern7(5)


/*
     *  *  *  *  *  *  *  *  *
        *  *  *  *  *  *  *
           *  *  *  *  *
              *  *  *
                 *
*/
function pattern8(n) {
    let pattern = "";
    for(let i = n-1; i>=0; i--){
        for (let j = 0; j<n-i-1; j++) {
            pattern += "   ";
        }
        for (let j = 0; j<2*i+1; j++) {
            pattern += " * ";
        }
        for (let j = 0; j<n-i-1; j++) {
            pattern += "   ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}

pattern8(5)

/*
             *
          *  *  *
       *  *  *  *  *
    *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *
    *  *  *  *  *  *  *
       *  *  *  *  *
          *  *  *
             *
 */

function pattern9(n) {
    pattern7(n);
    pattern8(n)
}

pattern9(5)

/*
    *
    * *
    * * *
    * * * *
    * * * * *
    * * * * *
    * * * *
    * * *
    * *
    *
 */

function pattern10(n) {
    pattern2(n);
    pattern5(n)
}

pattern10(5)

/*
    *
    * *
    * * *
    * * * *
    * * * * *
    * * * *
    * * *
    * *
    *
 */

function pattern10_0(n) {
    let k = n;
    for(let i=0; i<=2*n-1; i++){
              let stars = i;
              if(i>=n){
                  stars = k--
              }

            console.log("*".repeat(stars))

    }
}

pattern10_0(5)

/*
    1
    0 1
    1 0 1
    0 1 0 1
    1 0 1 0 1
*/
function pattern11(n) {
    let pattern = "";
    let start = 1;
    for(let i = 0; i< n; i++){

        if(i%2 === 0) start = 1;
        else start = 0;


        for (let j = 0; j <= i; j++) {
            pattern += start + " ";
            start = 1-start;
        }
        pattern += "\n";
    }
    console.log(pattern);
}

pattern11(5)

/*
       1
      21
     321
    4321
*/
function pattern12_0(n) {
    let pattern = "";
    for(let i = 1; i<=n; i++){
        let k = i;
        for (let j =n; j>=1; j--) {
            if(j> i)
            pattern +=  " ";
            else
                pattern += k--  ;
        }
        pattern += "\n";
    }
    console.log(pattern);
}

pattern12_0(4)


function pattern12(n) {
    let pattern = "";
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            pattern += j;
        }

        for(let j=1;j<=n*2-i*2;j++){
            pattern += " ";
        }


        for(let j=i;j>=1;j--){
            pattern += j;
        }
        pattern += "\n";

    }
    console.log(pattern)
}

pattern12(4)

function pattern13(n){
    let count = 1
    let pattern = "";
    for(let i=0;i< n; i++){
        for(let j=0;j<=i; j++){
            pattern += count++ ;
        }
        pattern += "\n";
    }
    console.log(pattern)
}

pattern13(5)

function pattern14(n){
    let char = "A"
    let pattern = "";
    for(let i=0;i< n; i++){
        for(let j=0;j<=i; j++){
            pattern += char ;
            char = String.fromCharCode(char.charCodeAt(0)+1)
        }
        char = "A"
        pattern += "\n";
    }
    console.log(pattern)
}

pattern14(5)

function pattern15(n){
    let char = "A"
    let pattern = "";
    for(let i=0;i< n; i++){
        for(let j=0;j<=n-i-1; j++){
            pattern += char ;
            char = String.fromCharCode(char.charCodeAt(0)+1)
        }
        char = "A"
        pattern += "\n";
    }
    console.log(pattern)
}

pattern15(5)


function pattern16(n){
    let char = "A"
    let pattern = "";
    for(let i=0;i< n; i++){
        for(let j=0;j<=i; j++){
            pattern += char ;
        }
        char = String.fromCharCode(char.charCodeAt(0)+1)
        pattern += "\n";
    }
    console.log(pattern)
}

pattern16(5)

function pattern17(n){
    let pattern = "";
    let char = "A"
    for(let i=0; i<n;i++){
        for(let j=0; j<n-i;j++){
            pattern+=" ";
        }
        for(let j=n-i; j<=n+i;j++){
            if(j<=n){
                pattern+= char;
                char = String.fromCharCode(char.charCodeAt(0)+1)
            } else {
                if(j===n+1) {
                    char = String.fromCharCode(char.charCodeAt(0)-1)
                }
                char = String.fromCharCode(char.charCodeAt(0)-1)
                pattern+= char;
            }
        }
        char = "A"
        pattern += "\n";
    }
    console.log(pattern)
}
pattern17(4)