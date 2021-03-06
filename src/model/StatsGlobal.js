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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SpecificationApiBackendImmoAlertefr) {
      root.SpecificationApiBackendImmoAlertefr = {};
    }
    root.SpecificationApiBackendImmoAlertefr.StatsGlobal = factory(root.SpecificationApiBackendImmoAlertefr.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StatsGlobal model module.
   * @module model/StatsGlobal
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>StatsGlobal</code>.
   * @alias module:model/StatsGlobal
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>StatsGlobal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatsGlobal} obj Optional instance to populate.
   * @return {module:model/StatsGlobal} The populated <code>StatsGlobal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('nbNotifs')) {
        obj['nbNotifs'] = ApiClient.convertToType(data['nbNotifs'], 'Number');
      }
      if (data.hasOwnProperty('nbAds')) {
        obj['nbAds'] = ApiClient.convertToType(data['nbAds'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} nbNotifs
   */
  exports.prototype['nbNotifs'] = undefined;
  /**
   * @member {Number} nbAds
   */
  exports.prototype['nbAds'] = undefined;



  return exports;
}));


