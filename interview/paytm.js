// Ip base
// Region base
// Specific user id

// /user/details

// Api :{
//      [User_id]: {count : 0},

// [region]: {count : 0},

// [ipaddress]: {count : 0},

// }



// USER



// id
// api
// isBlocked
// Created_at  updated _at    



// Location



// id
// api
// Created_at
// Lat     long  updated _at  




// IP



// id
// api
// updated _at    
// IP Created_at  




// Api log

// id
// api
// type
// created_at


















// Config {
//    ratelimitOnRequest : 20;
//    Time: 20 mins
// }

// Cronjobs {
//     reset(config.Time){
//      Update db  count to zero, isblocked
    
// }
// }


//  Post /restrict/type= IP/REGION?USER         data {}



// app.use((req, res, next)=> {


//     getApiCount();
     
// Checklimit

// if(exceded){
//    Return 
// }
// Else  {
// updateCount()
// next()



// })



