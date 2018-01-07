# yelp-api
This package provides a programmatic JavaScript interface for the Yelp Fusion API.  The Yelp Fusion API Documentation can be viewed [here](https://www.yelp.com/developers/documentation/v3).

In order to use this package, you must first get a Yelp Fusion API Key.

### Installing
Simple use NPM to install the package.

```
npm install yelp-api --save
```

## Usage
The Yelp Fusion API has many API endpoints.  Below shows how to query each of them.  Reference links for each endpoint are also provided.

To query any of these endpoints, you must get your API Key from the Yelp Fusion Manage App page, located [here](https://www.yelp.com/developers/v3/manage_app).

### Search API
This endpoint returns up to 1000 businesses based on the provided search criteria.  More details [here](https://www.yelp.com/developers/documentation/v3/business_search).

```javascript
// Create a new yelpAPI object with your API key
let apiKey = 'YOUR_API_KEY';
let yelp = new yelpAPI(apiKey);

// Set any parameters, if applicable (see API documentation for allowed params)
let params = [{ location: '20008' }];

// Call the endpoint
yelp.query('businesses/search', params)
.then(data => {
  // Success
  console.log(data);
})
.catch(err => {
  // Failure
  console.log(err);
});

```

### Phone Search API
This endpoint returns a list of businesses based on the provided phone number.  More details [here](https://www.yelp.com/developers/documentation/v3/business_search_phone).

businesses/search/phone

### Transaction Search API
This endpoint returns a list of businesses which support certain transactions.  More details [here](https://www.yelp.com/developers/documentation/v3/transactions_search).

transactions/{transaction_type}/search

### Business API
This endpoint returns the detail information of a business.  More details [here](https://www.yelp.com/developers/documentation/v3/business).

businesses/{id}

## Business Match API
Thess endpoints let you match business data from other sources against our businesses based on some minimal information provided.  To enable this endpoint, you must first join the Yelp Developer Beta Program.  More details [here](https://www.yelp.com/developers/documentation/v3/business_match).

businesses/matches/best
businesses/matches/lookupbusinesses/{id}/reviews

### Reviews API
This endpoint returns up to three reviews of a business ordered by Yelp's default sort order.  More details [here](https://www.yelp.com/developers/documentation/v3/business_reviews).

/businesses/{id}/reviews

### Autocomplete API
This endpoint returns autocomplete suggestions for search keywords, businesses and categories, based on the input text.  More details [here](https://www.yelp.com/developers/documentation/v3/autocomplete).

autocomplete

### Event Lookup API
This endpoint returns the detailed information of a Yelp event.  To enable this endpoint, you must first join the Yelp Developer Beta Program.  More details [here](https://www.yelp.com/developers/documentation/v3/event).

events/{id}

### Event Search API
This endpoint returns events based on the provided search criteria.  To enable this endpoint, you must first join the Yelp Developer Beta Program.  More details [here](https://www.yelp.com/developers/documentation/v3/event_search).

events

### Featured Event API
This endpoint returns the featured event for a given location.  To enable this endpoint, you must first join the Yelp Developer Beta Program.  More details [here](https://www.yelp.com/developers/documentation/v3/featured_event).

events/featured

*/

yelp.query('businesses/search', [{ location: '22206' }])
.then(data => {
	console.log(data);
})
.catch(err => {
	con


## Contributing
I would very much appreciate your contributions to this project  Make any pull requests on the [GitHub repo](https://github.com/NickShallee/yelp-api).

## Authors
* **Nick Shallee** - [AureliaCasts](https://aureliacasts.com)

See also the list of [contributors](https://github.com/NickShallee/yelp-api/contributors) who participated in this project.

## License (MIT)
Copyright 2018 Nick Shallee

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
