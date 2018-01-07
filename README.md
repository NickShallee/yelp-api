# yelp-api
[![npm version](https://badge.fury.io/js/yelp-api.svg)](https://badge.fury.io/js/yelp-api)
[![Build Status](https://travis-ci.org/NickShallee/yelp-api.svg?branch=master)](https://travis-ci.org/NickShallee/yelp-api)
[![Dependency Status](https://david-dm.org/NickShallee/yelp-api.svg)](https://david-dm.org/NickShallee/yelp-api)
[![devDependency Status](https://david-dm.org/NickShallee/yelp-api/dev-status.svg)](https://david-dm.org/NickShallee/yelp-api#info=devDependencies)

This package provides a programmatic JavaScript interface for the Yelp Fusion API.  The Yelp Fusion API Documentation can be viewed [here](https://www.yelp.com/developers/documentation/v3).

In order to use this package, you must first get a Yelp Fusion API Key.

### Installing
Simply use npm to install the package.

```
npm install yelp-api --save
```

## Usage
The Yelp Fusion API has many API endpoints.  Below shows how to query each of them.  Reference links for each endpoint are also provided.

To query any of these endpoints, you must get your API Key from the Yelp Fusion Manage App page, located [here](https://www.yelp.com/developers/v3/manage_app).

### Search API
This endpoint returns up to 1000 businesses based on the provided search criteria.  More details [here](https://www.yelp.com/developers/documentation/v3/business_search).

```javascript
let yelpAPI = require('yelp-api');

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

```javascript
let yelpAPI = require('yelp-api');

// Create a new yelpAPI object with your API key
let apiKey = 'YOUR_API_KEY';
let yelp = new yelpAPI(apiKey);

// Set any parameters, if applicable (see API documentation for allowed params)
let params = [{ phone: '+14159083801' }];

// Call the endpoint
yelp.query('businesses/search/phone', params)
.then(data => {
  // Success
  console.log(data);
})
.catch(err => {
  // Failure
  console.log(err);
});
```

### Transaction Search API
This endpoint returns a list of businesses which support certain transactions.  More details [here](https://www.yelp.com/developers/documentation/v3/transactions_search).

```javascript
let yelpAPI = require('yelp-api');

// Create a new yelpAPI object with your API key
let apiKey = 'YOUR_API_KEY';
let yelp = new yelpAPI(apiKey);

// Set any parameters, if applicable (see API documentation for allowed params)
let transactionType = 'delivery';
let params = [{ location: '20002' }];

// Call the endpoint
yelp.query(`transactions/${transactionType}/search`, params)
.then(data => {
  // Success
  console.log(data);
})
.catch(err => {
  // Failure
  console.log(err);
});
```

### Business API
This endpoint returns the detail information of a business.  More details [here](https://www.yelp.com/developers/documentation/v3/business).

```javascript
let yelpAPI = require('yelp-api');

// Create a new yelpAPI object with your API key
let apiKey = 'YOUR_API_KEY';
let yelp = new yelpAPI(apiKey);

// Set any parameters, if applicable (see API documentation for allowed params)
let businessId = 'four-barrel-coffee-san-francisco';
let params = [{ locale: 'en_US' }];

// Call the endpoint
yelp.query(`businesses/${businessId}`, params)
.then(data => {
  // Success
  console.log(data);
})
.catch(err => {
  // Failure
  console.log(err);
});
```

### Business Match API
Thess endpoints let you match business data from other sources against our businesses based on some minimal information provided.  To enable this endpoint, you must first join the Yelp Developer Beta Program.  More details [here](https://www.yelp.com/developers/documentation/v3/business_match).

#### Best Match
```javascript
let yelpAPI = require('yelp-api');

// Create a new yelpAPI object with your API key
let apiKey = 'YOUR_API_KEY';
let yelp = new yelpAPI(apiKey);

// Set any parameters, if applicable (see API documentation for allowed params)
let params = [
  { name: 'Four Barrel Coffee' }, 
  { city: 'San Francisco' }, 
  { state: 'CA' },
  { country: 'US' }
];

// Call the endpoint
yelp.query('businesses/matches/best', params)
.then(data => {
  // Success
  console.log(data);
})
.catch(err => {
  // Failure
  console.log(err);
});
```

#### Lookup
```javascript
let yelpAPI = require('yelp-api');

// Create a new yelpAPI object with your API key
let apiKey = 'YOUR_API_KEY';
let yelp = new yelpAPI(apiKey);

// Set any parameters, if applicable (see API documentation for allowed params)
let params = [
  { name: 'Four Barrel Coffee' }, 
  { city: 'San Francisco' }, 
  { state: 'CA' },
  { country: 'US' }
];

// Call the endpoint
yelp.query('businesses/matches/lookup', params)
.then(data => {
  // Success
  console.log(data);
})
.catch(err => {
  // Failure
  console.log(err);
});
```

### Reviews API
This endpoint returns up to three reviews of a business ordered by Yelp's default sort order.  More details [here](https://www.yelp.com/developers/documentation/v3/business_reviews).

```javascript
let yelpAPI = require('yelp-api');

// Create a new yelpAPI object with your API key
let apiKey = 'YOUR_API_KEY';
let yelp = new yelpAPI(apiKey);

// Set any parameters, if applicable (see API documentation for allowed params)
let params = [{ locale: 'en_US' }];
let businessId = 'four-barrel-coffee-san-francisco';

// Call the endpoint
yelp.query(`businesses/${businessId}/reviews`, params)
.then(data => {
  // Success
  console.log(data);
})
.catch(err => {
  // Failure
  console.log(err);
});
```

### Autocomplete API
This endpoint returns autocomplete suggestions for search keywords, businesses and categories, based on the input text.  More details [here](https://www.yelp.com/developers/documentation/v3/autocomplete).

```javascript
let yelpAPI = require('yelp-api');

// Create a new yelpAPI object with your API key
let apiKey = 'YOUR_API_KEY';
let yelp = new yelpAPI(apiKey);

// Set any parameters, if applicable (see API documentation for allowed params)
let params = [{ text: 'Panuccis Pizza' }];

// Call the endpoint
yelp.query('autocomplete', params)
.then(data => {
  // Success
  console.log(data);
})
.catch(err => {
  // Failure
  console.log(err);
});
```

### Event Lookup API
This endpoint returns the detailed information of a Yelp event.  To enable this endpoint, you must first join the Yelp Developer Beta Program.  More details [here](https://www.yelp.com/developers/documentation/v3/event).

```javascript
let yelpAPI = require('yelp-api');

// Create a new yelpAPI object with your API key
let apiKey = 'YOUR_API_KEY';
let yelp = new yelpAPI(apiKey);

// Set any parameters, if applicable (see API documentation for allowed params)
let params = [{ locale: 'en_US' }];
let eventId = 'oakland-saucy-oakland-restaurant-pop-up';

// Call the endpoint
yelp.query(`events/${eventId}`, params)
.then(data => {
  // Success
  console.log(data);
})
.catch(err => {
  // Failure
  console.log(err);
});
```

### Event Search API
This endpoint returns events based on the provided search criteria.  To enable this endpoint, you must first join the Yelp Developer Beta Program.  More details [here](https://www.yelp.com/developers/documentation/v3/event_search).

```javascript
let yelpAPI = require('yelp-api');

// Create a new yelpAPI object with your API key
let apiKey = 'YOUR_API_KEY';
let yelp = new yelpAPI(apiKey);

// Set any parameters, if applicable (see API documentation for allowed params)
let params = [{ locale: 'en_US' }];

// Call the endpoint
yelp.query('events', params)
.then(data => {
  // Success
  console.log(data);
})
.catch(err => {
  // Failure
  console.log(err);
});
```

### Featured Event API
This endpoint returns the featured event for a given location.  To enable this endpoint, you must first join the Yelp Developer Beta Program.  More details [here](https://www.yelp.com/developers/documentation/v3/featured_event).

```javascript
let yelpAPI = require('yelp-api');

// Create a new yelpAPI object with your API key
let apiKey = 'YOUR_API_KEY';
let yelp = new yelpAPI(apiKey);

// Set any parameters, if applicable (see API documentation for allowed params)
let params = [{ location: '20002' }];

// Call the endpoint
yelp.query('events/featured', params)
.then(data => {
  // Success
  console.log(data);
})
.catch(err => {
  // Failure
  console.log(err);
});
```

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
