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
    instance = new SpecificationApiBackendImmoAlertefr.UserCoordonnees();
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

  describe('UserCoordonnees', function() {
    it('should create an instance of UserCoordonnees', function() {
      // uncomment below and update the code to test UserCoordonnees
      //var instane = new SpecificationApiBackendImmoAlertefr.UserCoordonnees();
      //expect(instance).to.be.a(SpecificationApiBackendImmoAlertefr.UserCoordonnees);
    });

    it('should have the property civilite (base name: "civilite")', function() {
      // uncomment below and update the code to test the property civilite
      //var instane = new SpecificationApiBackendImmoAlertefr.UserCoordonnees();
      //expect(instance).to.be();
    });

    it('should have the property nom (base name: "nom")', function() {
      // uncomment below and update the code to test the property nom
      //var instane = new SpecificationApiBackendImmoAlertefr.UserCoordonnees();
      //expect(instance).to.be();
    });

    it('should have the property prenom (base name: "prenom")', function() {
      // uncomment below and update the code to test the property prenom
      //var instane = new SpecificationApiBackendImmoAlertefr.UserCoordonnees();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new SpecificationApiBackendImmoAlertefr.UserCoordonnees();
      //expect(instance).to.be();
    });

    it('should have the property numTel (base name: "numTel")', function() {
      // uncomment below and update the code to test the property numTel
      //var instane = new SpecificationApiBackendImmoAlertefr.UserCoordonnees();
      //expect(instance).to.be();
    });

  });

}));