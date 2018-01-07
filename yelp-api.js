/*jshint esversion: 6 */ 

var request = require('request');

var yelpAPI = class yelpAPI {

	constructor (apiKey, apiVersion = "v3") {
		this.apiKey = apiKey;
		this.baseUrl = 'https://api.yelp.com/';
		this.apiVersion = apiVersion;
	}

	query(endPoint, params = []) {

		var urlParams = this.stringifyParams(params);

		var requestUrl = this.baseUrl + this.apiVersion + '/' + endPoint + urlParams;

		return new Promise((resolve, reject) => {

			request.get(requestUrl, {
			  headers: {
			    'Authorization': 'Bearer ' + this.apiKey
			  }
			}, function optionalCallback(err, httpResponse, body) {
				if (err) {
					reject(err);
				}

				resolve(body);
			});

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

};

module.exports = yelpAPI;