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
    instance = new HrApi.CreatePermissionRequest();
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

  describe('CreatePermissionRequest', function() {
    it('should create an instance of CreatePermissionRequest', function() {
      // uncomment below and update the code to test CreatePermissionRequest
      //var instance = new HrApi.CreatePermissionRequest();
      //expect(instance).to.be.a(HrApi.CreatePermissionRequest);
    });

    it('should have the property dateStart (base name: "dateStart")', function() {
      // uncomment below and update the code to test the property dateStart
      //var instance = new HrApi.CreatePermissionRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateReturn (base name: "dateReturn")', function() {
      // uncomment below and update the code to test the property dateReturn
      //var instance = new HrApi.CreatePermissionRequest();
      //expect(instance).to.be();
    });

    it('should have the property backupUserId (base name: "backupUserId")', function() {
      // uncomment below and update the code to test the property backupUserId
      //var instance = new HrApi.CreatePermissionRequest();
      //expect(instance).to.be();
    });

    it('should have the property permissionTypeId (base name: "permissionTypeId")', function() {
      // uncomment below and update the code to test the property permissionTypeId
      //var instance = new HrApi.CreatePermissionRequest();
      //expect(instance).to.be();
    });

    it('should have the property additionalComments (base name: "additionalComments")', function() {
      // uncomment below and update the code to test the property additionalComments
      //var instance = new HrApi.CreatePermissionRequest();
      //expect(instance).to.be();
    });

  });

}));
