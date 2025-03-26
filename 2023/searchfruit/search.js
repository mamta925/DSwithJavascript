// # DS with Javascript
// data structure with javascript
 /** Write a production-grade api which accepts a fruit name 
 * as a query param, and then searches for the fruit in a 
 * file of given path, in a database table/collection and a rest api.



The api should be called like - 
/word-count?word=orange



You can assume the file fruits.txt is in the same directory 
as the node js server running, which has one fruit defined per line.
But the file is pretty huge having millions of lines.



apple

orange

banana

Mango

apple



The rest api url is something like
 https://jsonkeeper.com/b/VLCX

Which again returns data in the format - 
[

    {

      fruitName: 'apple',

      quantity: 2

    },

    {

      fruitName: orange,

      quantity: 17

    }

]

 Let's assume a mongodb collection of millions of fruit entries 
 across warehouses daily where documents are like - 
 {

  fruitName: 'apple',

  pricePerQty: 5

  totalPrice: 25,

  addedOn: 1628240462 // timestamp

 },

  {

  fruitName: 'orange',

  pricePerQty: 10,

  totalPrice: 100,

  addedOn: 1628249462 // timestamp

 },

 {

  fruitName: 'orange',

  pricePerQty: 12,

  totalPrice: 144,

  addedOn: 1628269462 // timestamp

 }

The api should be called like - 
/word-count?word=orange



The api returns a status 200 with the count if found atleast 1 quantity.

Or returns 404 if no fruit is found.

*/




// reading file
let fs =  require(fs);
let readline = require('readline');
let rl = readline.createInterface({
    input: fs.createReadStream('file.js'),
    terminal: false
})
let fileCount = 0;
function countWord(line) {
    if(line === word ){
        return 1
    }
    return 0;

}
rl.on('line', (line)=>{
    fileCount+=  countWord(line)
})
r1.on('pause', ()=>{
    console.log('DOne')
})


//db 

let data  = db.fruits.aggregate(
  [
      {
          $group :{
              fruitName: word,
              countWord: :{
                  $div: {totalPrice,pricePerQty }
              }
          }
      }
  ]

)