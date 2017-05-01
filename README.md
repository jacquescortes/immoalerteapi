# specification_api_backend_immo_alertefr

SpecificationApiBackendImmoAlertefr - JavaScript client for specification_api_backend_immo_alertefr
Specification API Backend ImmoAlerte.fr
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [http://www.elasticsolutions.fr](http://www.elasticsolutions.fr)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install specification_api_backend_immo_alertefr --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/specification_api_backend_immo_alertefr
then install it via:

```shell
    npm install YOUR_USERNAME/specification_api_backend_immo_alertefr --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SpecificationApiBackendImmoAlertefr = require('specification_api_backend_immo_alertefr');

var api = new SpecificationApiBackendImmoAlertefr.DefaultApi()

var alerte = new SpecificationApiBackendImmoAlertefr.Alerte(); // {Alerte} données de la alerte à créer


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alerteCreate(alerte, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.immoalerte.fr/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SpecificationApiBackendImmoAlertefr.DefaultApi* | [**alerteCreate**](docs/DefaultApi.md#alerteCreate) | **POST** /alerte | 
*SpecificationApiBackendImmoAlertefr.DefaultApi* | [**alerteDelete**](docs/DefaultApi.md#alerteDelete) | **DELETE** /alerte/{id} | 
*SpecificationApiBackendImmoAlertefr.DefaultApi* | [**alerteGet**](docs/DefaultApi.md#alerteGet) | **GET** /alerte/{id} | 
*SpecificationApiBackendImmoAlertefr.DefaultApi* | [**alerteList**](docs/DefaultApi.md#alerteList) | **GET** /alerte | 
*SpecificationApiBackendImmoAlertefr.DefaultApi* | [**alerteUpdate**](docs/DefaultApi.md#alerteUpdate) | **PUT** /alerte/{id} | 
*SpecificationApiBackendImmoAlertefr.DefaultApi* | [**userCreate**](docs/DefaultApi.md#userCreate) | **POST** /user | 
*SpecificationApiBackendImmoAlertefr.DefaultApi* | [**userDelete**](docs/DefaultApi.md#userDelete) | **DELETE** /user/{id} | 
*SpecificationApiBackendImmoAlertefr.DefaultApi* | [**userGet**](docs/DefaultApi.md#userGet) | **GET** /user/{id} | 
*SpecificationApiBackendImmoAlertefr.DefaultApi* | [**userList**](docs/DefaultApi.md#userList) | **GET** /user | 
*SpecificationApiBackendImmoAlertefr.DefaultApi* | [**userUpdate**](docs/DefaultApi.md#userUpdate) | **PUT** /user/{id} | 


## Documentation for Models

 - [SpecificationApiBackendImmoAlertefr.Alerte](docs/Alerte.md)
 - [SpecificationApiBackendImmoAlertefr.Site](docs/Site.md)
 - [SpecificationApiBackendImmoAlertefr.Stats](docs/Stats.md)
 - [SpecificationApiBackendImmoAlertefr.StatsGlobal](docs/StatsGlobal.md)
 - [SpecificationApiBackendImmoAlertefr.StatsLast](docs/StatsLast.md)
 - [SpecificationApiBackendImmoAlertefr.User](docs/User.md)
 - [SpecificationApiBackendImmoAlertefr.UserAbonnement](docs/UserAbonnement.md)
 - [SpecificationApiBackendImmoAlertefr.UserCoordonnees](docs/UserCoordonnees.md)


## Documentation for Authorization

 All endpoints do not require authorization.

