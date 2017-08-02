var request = require('request');

var headers = {
  'Content-Type': 'application/json',
  'Ocp-Apim-Subscription-Key': 'e1db3facd5f9497d8da470ad49545477'
};

var options = {
  url: 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize',
  method: 'POST',
  body: '{"url": "https://s-media-cache-ak0.pinimg.com/736x/47/40/e9/4740e949882597d198d1b6bd93a80ffb--cara-develinge-perfect-model.jpg"}',
  headers: headers,
};

function callback(error, response, body) {

  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}

request(options, callback);
