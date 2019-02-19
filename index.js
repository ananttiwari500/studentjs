var met;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's the HTTP method?`, (met) => {
    //console.log(`Method is ${met}!`)
      
    if (met == 'GET'){
        var request = require("request");

        var url = "http://127.0.0.1:8000/work/";
        
        request({
            url: url,
            json: true
        }, function (error, response, body) {
        
            if (!error && response.statusCode === 200) {
                console.log(body) // Print the json response
            }
        })
        readline.close();

    }

  else  if(met == 'POST')
    {
        readline.question(`gimme data?`, (dat) => {
        var request = require("request");
        readline.close();

var options = { method: 'POST',
  url: 'http://127.0.0.1:8000/work/',
  headers: 
   { 'Content-Type': 'application/json' },
  body: JSON.parse(dat),
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
  
});


})
//readline.close();

}


else if(met == 'DELETE')

{
    readline.question(`Which Id?`, (id) => {
    var request = require("request");
    readline.close();

var options = { method: 'DELETE',
  url: 'http://127.0.0.1:8000/work/'+id+'/',
  headers: 
   { 
     'Content-Type': 'application/json' },
   json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
    
})

}


else if (met == 'PUT')
{
  readline.close();

    var request = require("request");

    var options = { method: 'PUT',
      url: 'http://127.0.0.1:8000/work/23/',
      headers: 
       { 
           'Content-Type': 'application/json' },
      body: { first_name: 'qwert', last_name: 'asdfg', number: 12345 },
      json: true };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });
    

}


else 
{
readline.close();
console.log("invalid method!");
}

  })





