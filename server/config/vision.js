module.exports = function(urlImage) {

  var request = require('request');

  var headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': 'e1db3facd5f9497d8da470ad49545477'
  };

  var options = {
    url: 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize',
    method: 'POST',
    body: "{'url': '"+urlImage+"' }",
    headers: headers,
  };

  request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var obj = JSON.parse(body);
        console.log(obj,'dsasda');
      }else{
        console.log('ERROR: ',error);
      }
    });
};