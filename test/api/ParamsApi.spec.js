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
    instance = new HrApi.ParamsApi();
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

  describe('ParamsApi', function() {
    describe('apiParamsGetCountriesGet', function() {
      it('should call apiParamsGetCountriesGet successfully', function(done) {
        //uncomment below and update the code to test apiParamsGetCountriesGet
        //instance.apiParamsGetCountriesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiParamsGetOrganizationsGet', function() {
      it('should call apiParamsGetOrganizationsGet successfully', function(done) {
        //uncomment below and update the code to test apiParamsGetOrganizationsGet
        //instance.apiParamsGetOrganizationsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiParamsGetPermissionTypeListGet', function() {
      it('should call apiParamsGetPermissionTypeListGet successfully', function(done) {
        //uncomment below and update the code to test apiParamsGetPermissionTypeListGet
        //instance.apiParamsGetPermissionTypeListGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiParamsGetPositionsGet', function() {
      it('should call apiParamsGetPositionsGet successfully', function(done) {
        //uncomment below and update the code to test apiParamsGetPositionsGet
        //instance.apiParamsGetPositionsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiParamsGetStationsGet', function() {
      it('should call apiParamsGetStationsGet successfully', function(done) {
        //uncomment below and update the code to test apiParamsGetStationsGet
        //instance.apiParamsGetStationsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
