var request = require('request');

var yelpAPI = class yelpAPI {

	constructor (clientId, clientSecret, apiVersion = "v3") {
		this.clientId = clientId;
		this.clientSecret = clientSecret;
		this.baseUrl = 'https://api.yelp.com/';
		this.apiVersion = apiVersion;
	}

	connect() {
		
		var formData = {
			grant_type: 'client_credentials',
			client_id: this.clientId,
			client_secret: this.clientSecret
		  };

		var self = this;

		return new Promise(function (fulfill, reject) {
			request.post({
					url: self.baseUrl + 'oauth2/token', 
					formData: formData
				}, function optionalCallback(err, httpResponse, body) {
				  if (err) {
				    return reject(err);
				}

				  var data = JSON.parse(body);
				  
				  if (!data.access_token) {
				  	return reject(data);
				  }
				  self.access_token = data.access_token;
				  fulfill('Connection successful.');
			});
		});

	}

	get(endPoint, params = []) {

		var urlParams = this.stringifyParams(params);

		var requestUrl = this.baseUrl + this.apiVersion + '/' + endPoint + urlParams;

		request.get(requestUrl, {
		  headers: {
		    'Authorization': 'Bearer ' + this.access_token
		  }
		}, function optionalCallback(err, httpResponse, body) {
			if (err) {
				console.log(err);
			}

			console.log(body);
		});

	}

	stringifyParams(params) {

		var urlParams = '?';
		
		params.forEach(function(param) {
			Object.keys(param).forEach(function (key) {
				urlParams += '&' + key + '=' + param[key];
			});
		});

		return urlParams;

	}

}

module.exports = yelpAPI;