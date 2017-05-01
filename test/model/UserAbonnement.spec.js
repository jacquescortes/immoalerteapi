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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SpecificationApiBackendImmoAlertefr);
  }
}(this, function(expect, SpecificationApiBackendImmoAlertefr) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SpecificationApiBackendImmoAlertefr.UserAbonnement();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UserAbonnement', function() {
    it('should create an instance of UserAbonnement', function() {
      // uncomment below and update the code to test UserAbonnement
      //var instane = new SpecificationApiBackendImmoAlertefr.UserAbonnement();
      //expect(instance).to.be.a(SpecificationApiBackendImmoAlertefr.UserAbonnement);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new SpecificationApiBackendImmoAlertefr.UserAbonnement();
      //expect(instance).to.be();
    });

    it('should have the property statutAbonnement (base name: "statutAbonnement")', function() {
      // uncomment below and update the code to test the property statutAbonnement
      //var instane = new SpecificationApiBackendImmoAlertefr.UserAbonnement();
      //expect(instance).to.be();
    });

  });

}));