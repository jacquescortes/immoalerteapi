/**
 * Specification API Backend ImmoAlerte.fr
 * Specification API Backend ImmoAlerte.fr
 *
 * OpenAPI spec version: 1.0.0
 * Contact: Jacques.cortes@elasticsolutions.fr
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Alerte', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Alerte'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.SpecificationApiBackendImmoAlertefr) {
      root.SpecificationApiBackendImmoAlertefr = {};
    }
    root.SpecificationApiBackendImmoAlertefr.DefaultApi = factory(root.SpecificationApiBackendImmoAlertefr.ApiClient, root.SpecificationApiBackendImmoAlertefr.Alerte, root.SpecificationApiBackendImmoAlertefr.User);
  }
}(this, function(ApiClient, Alerte, User) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alerteCreate operation.
     * @callback module:api/DefaultApi~alerteCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Alerte} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Création d&#39;une alerte
     * @param {module:model/Alerte} alerte données de la alerte à créer
     * @param {module:api/DefaultApi~alerteCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Alerte}
     */
    this.alerteCreate = function(alerte, callback) {
      var postBody = alerte;

      // verify the required parameter 'alerte' is set
      if (alerte == undefined || alerte == null) {
        throw new Error("Missing the required parameter 'alerte' when calling alerteCreate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Alerte;

      return this.apiClient.callApi(
        '/alerte', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alerteDelete operation.
     * @callback module:api/DefaultApi~alerteDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Suppression d&#39;une alerte
     * @param {String} id id alerte
     * @param {module:api/DefaultApi~alerteDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.alerteDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling alerteDelete");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/alerte/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alerteGet operation.
     * @callback module:api/DefaultApi~alerteGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Alerte} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retourne une alerte
     * @param {String} id id alerte
     * @param {module:api/DefaultApi~alerteGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Alerte}
     */
    this.alerteGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling alerteGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Alerte;

      return this.apiClient.callApi(
        '/alerte/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alerteList operation.
     * @callback module:api/DefaultApi~alerteListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Alerte>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retourne la liste des alertes
     * @param {module:api/DefaultApi~alerteListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Alerte>}
     */
    this.alerteList = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Alerte];

      return this.apiClient.callApi(
        '/alerte', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alerteUpdate operation.
     * @callback module:api/DefaultApi~alerteUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Alerte} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mise à jour d&#39;une alerte
     * @param {String} id id alerte
     * @param {module:model/Alerte} alerte données de la alerte à mettre à jour
     * @param {module:api/DefaultApi~alerteUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Alerte}
     */
    this.alerteUpdate = function(id, alerte, callback) {
      var postBody = alerte;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling alerteUpdate");
      }

      // verify the required parameter 'alerte' is set
      if (alerte == undefined || alerte == null) {
        throw new Error("Missing the required parameter 'alerte' when calling alerteUpdate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Alerte;

      return this.apiClient.callApi(
        '/alerte/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userCreate operation.
     * @callback module:api/DefaultApi~userCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Création d&#39;un user
     * @param {module:model/User} user données du user à créer
     * @param {module:api/DefaultApi~userCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.userCreate = function(user, callback) {
      var postBody = user;

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling userCreate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/user', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userDelete operation.
     * @callback module:api/DefaultApi~userDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Suppression d&#39;un user
     * @param {String} id id user
     * @param {module:api/DefaultApi~userDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.userDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling userDelete");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userGet operation.
     * @callback module:api/DefaultApi~userGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retourne un user
     * @param {String} id id user
     * @param {module:api/DefaultApi~userGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.userGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling userGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/user/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userList operation.
     * @callback module:api/DefaultApi~userListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retourne la liste des users
     * @param {module:api/DefaultApi~userListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */
    this.userList = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [User];

      return this.apiClient.callApi(
        '/user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userUpdate operation.
     * @callback module:api/DefaultApi~userUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mise à jour d&#39;un user
     * @param {String} id id user
     * @param {module:model/User} user données du user à mettre à jour
     * @param {module:api/DefaultApi~userUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.userUpdate = function(id, user, callback) {
      var postBody = user;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling userUpdate");
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling userUpdate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/user/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
