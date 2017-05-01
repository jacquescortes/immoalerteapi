# SpecificationApiBackendImmoAlertefr.DefaultApi

All URIs are relative to *https://api.immoalerte.fr/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alerteCreate**](DefaultApi.md#alerteCreate) | **POST** /alerte | 
[**alerteDelete**](DefaultApi.md#alerteDelete) | **DELETE** /alerte/{id} | 
[**alerteGet**](DefaultApi.md#alerteGet) | **GET** /alerte/{id} | 
[**alerteList**](DefaultApi.md#alerteList) | **GET** /alerte | 
[**alerteUpdate**](DefaultApi.md#alerteUpdate) | **PUT** /alerte/{id} | 
[**userCreate**](DefaultApi.md#userCreate) | **POST** /user | 
[**userDelete**](DefaultApi.md#userDelete) | **DELETE** /user/{id} | 
[**userGet**](DefaultApi.md#userGet) | **GET** /user/{id} | 
[**userList**](DefaultApi.md#userList) | **GET** /user | 
[**userUpdate**](DefaultApi.md#userUpdate) | **PUT** /user/{id} | 


<a name="alerteCreate"></a>
# **alerteCreate**
> Alerte alerteCreate(alerte)



Création d&#39;une alerte

### Example
```javascript
var SpecificationApiBackendImmoAlertefr = require('specification_api_backend_immo_alertefr');

var apiInstance = new SpecificationApiBackendImmoAlertefr.DefaultApi();

var alerte = new SpecificationApiBackendImmoAlertefr.Alerte(); // Alerte | données de la alerte à créer


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.alerteCreate(alerte, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alerte** | [**Alerte**](Alerte.md)| données de la alerte à créer | 

### Return type

[**Alerte**](Alerte.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alerteDelete"></a>
# **alerteDelete**
> alerteDelete(id)



Suppression d&#39;une alerte

### Example
```javascript
var SpecificationApiBackendImmoAlertefr = require('specification_api_backend_immo_alertefr');

var apiInstance = new SpecificationApiBackendImmoAlertefr.DefaultApi();

var id = "id_example"; // String | id alerte


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.alerteDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id alerte | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alerteGet"></a>
# **alerteGet**
> Alerte alerteGet(id)



Retourne une alerte

### Example
```javascript
var SpecificationApiBackendImmoAlertefr = require('specification_api_backend_immo_alertefr');

var apiInstance = new SpecificationApiBackendImmoAlertefr.DefaultApi();

var id = "id_example"; // String | id alerte


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.alerteGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id alerte | 

### Return type

[**Alerte**](Alerte.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alerteList"></a>
# **alerteList**
> [Alerte] alerteList()



Retourne la liste des alertes

### Example
```javascript
var SpecificationApiBackendImmoAlertefr = require('specification_api_backend_immo_alertefr');

var apiInstance = new SpecificationApiBackendImmoAlertefr.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.alerteList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Alerte]**](Alerte.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alerteUpdate"></a>
# **alerteUpdate**
> Alerte alerteUpdate(id, alerte)



Mise à jour d&#39;une alerte

### Example
```javascript
var SpecificationApiBackendImmoAlertefr = require('specification_api_backend_immo_alertefr');

var apiInstance = new SpecificationApiBackendImmoAlertefr.DefaultApi();

var id = "id_example"; // String | id alerte

var alerte = new SpecificationApiBackendImmoAlertefr.Alerte(); // Alerte | données de la alerte à mettre à jour


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.alerteUpdate(id, alerte, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id alerte | 
 **alerte** | [**Alerte**](Alerte.md)| données de la alerte à mettre à jour | 

### Return type

[**Alerte**](Alerte.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCreate"></a>
# **userCreate**
> User userCreate(user)



Création d&#39;un user

### Example
```javascript
var SpecificationApiBackendImmoAlertefr = require('specification_api_backend_immo_alertefr');

var apiInstance = new SpecificationApiBackendImmoAlertefr.DefaultApi();

var user = new SpecificationApiBackendImmoAlertefr.User(); // User | données du user à créer


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userCreate(user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| données du user à créer | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userDelete"></a>
# **userDelete**
> userDelete(id)



Suppression d&#39;un user

### Example
```javascript
var SpecificationApiBackendImmoAlertefr = require('specification_api_backend_immo_alertefr');

var apiInstance = new SpecificationApiBackendImmoAlertefr.DefaultApi();

var id = "id_example"; // String | id user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id user | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userGet"></a>
# **userGet**
> User userGet(id)



Retourne un user

### Example
```javascript
var SpecificationApiBackendImmoAlertefr = require('specification_api_backend_immo_alertefr');

var apiInstance = new SpecificationApiBackendImmoAlertefr.DefaultApi();

var id = "id_example"; // String | id user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id user | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userList"></a>
# **userList**
> [User] userList()



Retourne la liste des users

### Example
```javascript
var SpecificationApiBackendImmoAlertefr = require('specification_api_backend_immo_alertefr');

var apiInstance = new SpecificationApiBackendImmoAlertefr.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userUpdate"></a>
# **userUpdate**
> User userUpdate(id, user)



Mise à jour d&#39;un user

### Example
```javascript
var SpecificationApiBackendImmoAlertefr = require('specification_api_backend_immo_alertefr');

var apiInstance = new SpecificationApiBackendImmoAlertefr.DefaultApi();

var id = "id_example"; // String | id user

var user = new SpecificationApiBackendImmoAlertefr.User(); // User | données du user à mettre à jour


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userUpdate(id, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id user | 
 **user** | [**User**](User.md)| données du user à mettre à jour | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

