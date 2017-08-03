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

  let requestEmotion = new Promise((resolve, reject) => {
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var obj = JSON.parse(body);
          resolve(obj);
        }else{
          reject( err => console.log('ERROR reject in requestEmotion promise: ', err));
          console.log('ERROR: ',error);
        }
      });
  });

  // It is neccessary RETURN the resolve of the Promise
  return requestEmotion.then(obj => {
      return obj;
  });

};
