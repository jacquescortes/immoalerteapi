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
    instance = new SpecificationApiBackendImmoAlertefr.Alerte();
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

  describe('Alerte', function() {
    it('should create an instance of Alerte', function() {
      // uncomment below and update the code to test Alerte
      //var instane = new SpecificationApiBackendImmoAlertefr.Alerte();
      //expect(instance).to.be.a(SpecificationApiBackendImmoAlertefr.Alerte);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new SpecificationApiBackendImmoAlertefr.Alerte();
      //expect(instance).to.be();
    });

    it('should have the property idUser (base name: "idUser")', function() {
      // uncomment below and update the code to test the property idUser
      //var instane = new SpecificationApiBackendImmoAlertefr.Alerte();
      //expect(instance).to.be();
    });

    it('should have the property statutAbonnement (base name: "statutAbonnement")', function() {
      // uncomment below and update the code to test the property statutAbonnement
      //var instane = new SpecificationApiBackendImmoAlertefr.Alerte();
      //expect(instance).to.be();
    });

    it('should have the property statutAlerte (base name: "statutAlerte")', function() {
      // uncomment below and update the code to test the property statutAlerte
      //var instane = new SpecificationApiBackendImmoAlertefr.Alerte();
      //expect(instance).to.be();
    });

    it('should have the property frequence (base name: "frequence")', function() {
      // uncomment below and update the code to test the property frequence
      //var instane = new SpecificationApiBackendImmoAlertefr.Alerte();
      //expect(instance).to.be();
    });

    it('should have the property lbc (base name: "lbc")', function() {
      // uncomment below and update the code to test the property lbc
      //var instane = new SpecificationApiBackendImmoAlertefr.Alerte();
      //expect(instance).to.be();
    });

    it('should have the property pap (base name: "pap")', function() {
      // uncomment below and update the code to test the property pap
      //var instane = new SpecificationApiBackendImmoAlertefr.Alerte();
      //expect(instance).to.be();
    });

    it('should have the property log (base name: "log")', function() {
      // uncomment below and update the code to test the property log
      //var instane = new SpecificationApiBackendImmoAlertefr.Alerte();
      //expect(instance).to.be();
    });

    it('should have the property slg (base name: "slg")', function() {
      // uncomment below and update the code to test the property slg
      //var instane = new SpecificationApiBackendImmoAlertefr.Alerte();
      //expect(instance).to.be();
    });

    it('should have the property stats (base name: "stats")', function() {
      // uncomment below and update the code to test the property stats
      //var instane = new SpecificationApiBackendImmoAlertefr.Alerte();
      //expect(instance).to.be();
    });

  });

}));
