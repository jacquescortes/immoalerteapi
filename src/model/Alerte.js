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
    define(['ApiClient', 'model/Site', 'model/Stats'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Site'), require('./Stats'));
  } else {
    // Browser globals (root is window)
    if (!root.SpecificationApiBackendImmoAlertefr) {
      root.SpecificationApiBackendImmoAlertefr = {};
    }
    root.SpecificationApiBackendImmoAlertefr.Alerte = factory(root.SpecificationApiBackendImmoAlertefr.ApiClient, root.SpecificationApiBackendImmoAlertefr.Site, root.SpecificationApiBackendImmoAlertefr.Stats);
  }
}(this, function(ApiClient, Site, Stats) {
  'use strict';




  /**
   * The Alerte model module.
   * @module model/Alerte
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Alerte</code>.
   * @alias module:model/Alerte
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Alerte</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Alerte} obj Optional instance to populate.
   * @return {module:model/Alerte} The populated <code>Alerte</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('idUser')) {
        obj['idUser'] = ApiClient.convertToType(data['idUser'], 'String');
      }
      if (data.hasOwnProperty('statutAbonnement')) {
        obj['statutAbonnement'] = ApiClient.convertToType(data['statutAbonnement'], 'String');
      }
      if (data.hasOwnProperty('statutAlerte')) {
        obj['statutAlerte'] = ApiClient.convertToType(data['statutAlerte'], 'String');
      }
      if (data.hasOwnProperty('frequence')) {
        obj['frequence'] = ApiClient.convertToType(data['frequence'], 'String');
      }
      if (data.hasOwnProperty('lbc')) {
        obj['lbc'] = Site.constructFromObject(data['lbc']);
      }
      if (data.hasOwnProperty('pap')) {
        obj['pap'] = Site.constructFromObject(data['pap']);
      }
      if (data.hasOwnProperty('log')) {
        obj['log'] = Site.constructFromObject(data['log']);
      }
      if (data.hasOwnProperty('slg')) {
        obj['slg'] = Site.constructFromObject(data['slg']);
      }
      if (data.hasOwnProperty('stats')) {
        obj['stats'] = Stats.constructFromObject(data['stats']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} idUser
   */
  exports.prototype['idUser'] = undefined;
  /**
   * @member {module:model/Alerte.StatutAbonnementEnum} statutAbonnement
   */
  exports.prototype['statutAbonnement'] = undefined;
  /**
   * @member {module:model/Alerte.StatutAlerteEnum} statutAlerte
   */
  exports.prototype['statutAlerte'] = undefined;
  /**
   * @member {module:model/Alerte.FrequenceEnum} frequence
   */
  exports.prototype['frequence'] = undefined;
  /**
   * @member {module:model/Site} lbc
   */
  exports.prototype['lbc'] = undefined;
  /**
   * @member {module:model/Site} pap
   */
  exports.prototype['pap'] = undefined;
  /**
   * @member {module:model/Site} log
   */
  exports.prototype['log'] = undefined;
  /**
   * @member {module:model/Site} slg
   */
  exports.prototype['slg'] = undefined;
  /**
   * @member {module:model/Stats} stats
   */
  exports.prototype['stats'] = undefined;


  /**
   * Allowed values for the <code>statutAbonnement</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatutAbonnementEnum = {
    /**
     * value: "run"
     * @const
     */
    "run": "run",
    /**
     * value: "stop"
     * @const
     */
    "stop": "stop"  };

  /**
   * Allowed values for the <code>statutAlerte</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatutAlerteEnum = {
    /**
     * value: "run"
     * @const
     */
    "run": "run",
    /**
     * value: "stop"
     * @const
     */
    "stop": "stop"  };

  /**
   * Allowed values for the <code>frequence</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FrequenceEnum = {
    /**
     * value: "1"
     * @const
     */
    "1": "1",
    /**
     * value: "10"
     * @const
     */
    "10": "10",
    /**
     * value: "60"
     * @const
     */
    "60": "60",
    /**
     * value: "1440"
     * @const
     */
    "1440": "1440"  };


  return exports;
}));


