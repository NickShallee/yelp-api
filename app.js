var path = require('path');
const express = require('express');
const app = express();
const yelpAPI = require(path.resolve( __dirname, 'yelp-api.js'));

app.get('/', (req, res) => {


	res.send('Hello World!')
})

var apiKey = 'wT6UUhiqEtBgZ_WfbLcahIYJ5QsizB9TwjU1YzEWrthQ8y-81Spbh0E59rWfkXE5v0wEyF9ZK64n0YqgVXH9qyzzQRB8w9D1HGcymJROwrCiEG666xsa-7DptEFIWnYx';

var yelp = new yelpAPI(apiKey);

/*

businesses/search
businesses/search/phone
transactions/{transaction_type}/search
businesses/{id}
businesses/matches/best
businesses/matches/lookupbusinesses/{id}/reviews
autocomplete
events/{id}
events
events/featured

*/

yelp.query('businesses/search', [{ location: '22206' }])
.then(data => {
	console.log(data);
})
.catch(err => {
	console.log(err);
});


app.listen(3000, () => {})