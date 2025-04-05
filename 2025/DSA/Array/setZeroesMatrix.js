var setZeroes = function(matrix) {

    let column0 =1;

     for(let i=0;i< matrix.length; i++){
             for(let j=0;j< matrix[0].length; j++){
                if(matrix[i][j]== 0){
                    matrix[i][0] =0;

                    if(j!=0)
                       matrix[0][j] = 0;
                    else 
                     column0=0
                }
        
             }
     }
     for(let i=1;i< matrix.length; i++){
        for(let j=1;j< matrix[0].length; j++){
    
              
            if(matrix[i][0]==0|| matrix[0][j] ==0){
                matrix[i][j] = 0
            }
   

    }

    if(matrix[0][0]==0){
        for(let j=0;j< matrix[0].length;j++){
            matrix[0][j] = 0
        }
    }
    if(column0==0){
        for(let j=0;j< matrix.length;j++){
            matrix[j][0] = 0
        }
    }
}

    return matrix;
    
};

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))