module.exports = function spotify(urlParam) {

var request = require('request');

var headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer BQBrRwBHnhsdCt9hu3h-deg_12_-XmFlgKym1eiTLT3uI66MkJTiPvdnYc7X7LP1d8cT9CUeY8WHjzzIKDpKqxTNOF_18BIVTkPAHLNNnCRbHdQfVSJlGORDlzQ-44zpoFP8kr6mnVfCzh8NA7BJhAUc29H3sCAhGyCcymNDRwU7D9aLhphYXXkwqMlFqXzfYuS5QDiGw58HpyrCfcpBcoynba0-LZ4_EO05QM5adRcl5xFEeAApFW1NclZzN44zMs-Zn8HoB_dsoo9QCElQ4rX2b8PGzJW8_U-gc0ttWjIqFXeXDaQJ9PehV085t5K8QA'
};

var options = {
  url : urlParam,
  headers: headers
};

let requestRecomm = new Promise((resolve, reject) => {
  request(options, function (error, response, body) {

      console.log('BODY ',body);

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
