/**
 * HR API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import LoginModel from '../model/LoginModel';
import RegisterModel from '../model/RegisterModel';
import Tokens from '../model/Tokens';
import UserResponse from '../model/UserResponse';

/**
* Authentication service.
* @module api/AuthenticationApi
* @version v1
*/
export default class AuthenticationApi {

    /**
    * Constructs a new AuthenticationApi. 
    * @alias module:api/AuthenticationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the apiAuthenticationLoginUserPost operation.
     * @callback module:api/AuthenticationApi~apiAuthenticationLoginUserPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tokens} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/LoginModel} opts.loginModel 
     * @param {module:api/AuthenticationApi~apiAuthenticationLoginUserPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tokens}
     */
    apiAuthenticationLoginUserPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['loginModel'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = Tokens;
      return this.apiClient.callApi(
        '/api/Authentication/LoginUser', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiAuthenticationRegisterUserPost operation.
     * @callback module:api/AuthenticationApi~apiAuthenticationRegisterUserPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/RegisterModel} opts.registerModel 
     * @param {module:api/AuthenticationApi~apiAuthenticationRegisterUserPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserResponse}
     */
    apiAuthenticationRegisterUserPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['registerModel'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = UserResponse;
      return this.apiClient.callApi(
        '/api/Authentication/RegisterUser', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiAuthenticationWhoAmIGet operation.
     * @callback module:api/AuthenticationApi~apiAuthenticationWhoAmIGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/AuthenticationApi~apiAuthenticationWhoAmIGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserResponse}
     */
    apiAuthenticationWhoAmIGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = UserResponse;
      return this.apiClient.callApi(
        '/api/Authentication/WhoAmI', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
