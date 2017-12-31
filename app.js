var path = require('path');
const express = require('express');
const app = express();
const yelpAPI = require(path.resolve( __dirname, 'yelp-api.js'));

app.get('/', (req, res) => {


	res.send('Hello World!')
})

var clientId = 'WUlV_fzLxqFJwEKe39OPyA';
var clientSecret = 'MtFw4L5bngt3JKY7o3LAx4jYUpZow32yZkkg06KckGzWUMlfrptEbNxTmiP8GPCj';
var yelp = new yelpAPI(clientId, clientSecret);

yelp.connect().then(function (res) {
    console.log(res);

    yelp.get('businesses/search', [{
    	location: '22206'
    }]);


}, rej => {
  console.log(rej);
});


app.listen(3000, () => {})