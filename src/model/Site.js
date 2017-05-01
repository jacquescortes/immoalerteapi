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
    define(['ApiClient', 'model/Stats'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Stats'));
  } else {
    // Browser globals (root is window)
    if (!root.SpecificationApiBackendImmoAlertefr) {
      root.SpecificationApiBackendImmoAlertefr = {};
    }
    root.SpecificationApiBackendImmoAlertefr.Site = factory(root.SpecificationApiBackendImmoAlertefr.ApiClient, root.SpecificationApiBackendImmoAlertefr.Stats);
  }
}(this, function(ApiClient, Stats) {
  'use strict';




  /**
   * The Site model module.
   * @module model/Site
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Site</code>.
   * @alias module:model/Site
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Site</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Site} obj Optional instance to populate.
   * @return {module:model/Site} The populated <code>Site</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('statut')) {
        obj['statut'] = ApiClient.convertToType(data['statut'], 'String');
      }
      if (data.hasOwnProperty('stats')) {
        obj['stats'] = Stats.constructFromObject(data['stats']);
      }
      if (data.hasOwnProperty('lastIds')) {
        obj['lastIds'] = ApiClient.convertToType(data['lastIds'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {module:model/Site.StatutEnum} statut
   */
  exports.prototype['statut'] = undefined;
  /**
   * @member {module:model/Stats} stats
   */
  exports.prototype['stats'] = undefined;
  /**
   * @member {Array.<String>} lastIds
   */
  exports.prototype['lastIds'] = undefined;


  /**
   * Allowed values for the <code>statut</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatutEnum = {
    /**
     * value: "run"
     * @const
     */
    "run": "run",
    /**
     * value: "stop"
     * @const
     */
    "stop": "stop",
    /**
     * value: "error"
     * @const
     */
    "error": "error"  };


  return exports;
}));

