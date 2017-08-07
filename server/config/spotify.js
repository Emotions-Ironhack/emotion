module.exports = function spotify(urlParam) {

var request = require('request');

var headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer BQAstTEebVopl6jl7Yfr4mRXwIb8BS9eO_ROzQ_86l6JTqi55h2kgtHZyMYOw6aqO8o2n-RLkG7rdlFjGRBXBvyBNktopE1sP3qD-eIf101al0WYTanmSxlhyZkVmPvEWbrxSTsZZwksjFbwgMvbHjxeRLR0Oak5NEYZmN-l1BC6N9WFj1cVrThQmra_IFaN4seZUcBhJDYrY0RhrCDg6jp2tnRAX38kFNDs7xODQKl15p_fd8pL07oZAL_0JP-6umASg9VW7gDsR5gQi_NJieESWmVby4NsI4xXq5BN7NSLRo5y1T3BdOvhrldIueSgpg'
};

var options = {
  url : urlParam,
  headers: headers
};

let requestRecomm = new Promise((resolve, reject) => {
  request(options, function (error, response, body) {

      // console.log('BODYY ',body);

      if (!error && response.statusCode == 200) {
        var obj = JSON.parse(body);
        resolve(obj);
      }else{
        reject( err => console.log('ERROR reject in request RECOMMENDATION promise: ', err));
      }
    });
});

// It is neccessary RETURN the resolve of the Promise
return requestRecomm.then(obj => {
    return obj;
});


};
