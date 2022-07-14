/**
 * HR API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HrApi);
  }
}(this, function(expect, HrApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HrApi.ValidationHanldeRequest();
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

  describe('ValidationHanldeRequest', function() {
    it('should create an instance of ValidationHanldeRequest', function() {
      // uncomment below and update the code to test ValidationHanldeRequest
      //var instance = new HrApi.ValidationHanldeRequest();
      //expect(instance).to.be.a(HrApi.ValidationHanldeRequest);
    });

    it('should have the property documentId (base name: "documentId")', function() {
      // uncomment below and update the code to test the property documentId
      //var instance = new HrApi.ValidationHanldeRequest();
      //expect(instance).to.be();
    });

    it('should have the property validatorId (base name: "validatorId")', function() {
      // uncomment below and update the code to test the property validatorId
      //var instance = new HrApi.ValidationHanldeRequest();
      //expect(instance).to.be();
    });

    it('should have the property hasGivenAuthorization (base name: "hasGivenAuthorization")', function() {
      // uncomment below and update the code to test the property hasGivenAuthorization
      //var instance = new HrApi.ValidationHanldeRequest();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new HrApi.ValidationHanldeRequest();
      //expect(instance).to.be();
    });

  });

}));