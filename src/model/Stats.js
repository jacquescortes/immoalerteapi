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
    define(['ApiClient', 'model/StatsGlobal', 'model/StatsLast'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StatsGlobal'), require('./StatsLast'));
  } else {
    // Browser globals (root is window)
    if (!root.SpecificationApiBackendImmoAlertefr) {
      root.SpecificationApiBackendImmoAlertefr = {};
    }
    root.SpecificationApiBackendImmoAlertefr.Stats = factory(root.SpecificationApiBackendImmoAlertefr.ApiClient, root.SpecificationApiBackendImmoAlertefr.StatsGlobal, root.SpecificationApiBackendImmoAlertefr.StatsLast);
  }
}(this, function(ApiClient, StatsGlobal, StatsLast) {
  'use strict';




  /**
   * The Stats model module.
   * @module model/Stats
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Stats</code>.
   * @alias module:model/Stats
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Stats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Stats} obj Optional instance to populate.
   * @return {module:model/Stats} The populated <code>Stats</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('global')) {
        obj['global'] = StatsGlobal.constructFromObject(data['global']);
      }
      if (data.hasOwnProperty('last')) {
        obj['last'] = StatsLast.constructFromObject(data['last']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/StatsGlobal} global
   */
  exports.prototype['global'] = undefined;
  /**
   * @member {module:model/StatsLast} last
   */
  exports.prototype['last'] = undefined;



  return exports;
}));

