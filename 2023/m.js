
// const fetch = require('node-fetch');
// async function weatherStation(keyword) {
//     const API_URL = `https://jsonmock.hackerrank.com/api/weather/search?name={keyword}`
//      let response = await fetch(API_URL);
//      let data = await response.json();
     
//      console.log(data)
//     }

//     weatherStation("all")

var options = {
    host: 'https://jsonmock.hackerrank.com',
    port: 80,
    path: '/api/weather',
    method: 'POST'
  };
  
  http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  }).end();