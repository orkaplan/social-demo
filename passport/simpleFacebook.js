var request = require('request');
var baseUrl = "https://graph.facebook.com/";

exports.getLikes = function (userId, accessToken, callback) {
  userId = userId || 'me';

  return performRequest(userId + "/likes", {access_token: accessToken}, callback);
};

function performRequest(url, params, callback) {
  return request({
      method: 'GET',
      url:baseUrl + url,
      qs: params,
      json: true
    },
    function (err, res, body) {
      if (err) return callback(err);
      if (!res || res.statusCode != 200) return callback({message: "invalid status code" + (res && res.statusCode) , body: body});
      return callback(null, body);
    }
  );
}