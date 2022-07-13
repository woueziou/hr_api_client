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

import ApiClient from '../ApiClient';

/**
 * The LoginModel model module.
 * @module model/LoginModel
 * @version 1.0.0
 */
class LoginModel {
    /**
     * Constructs a new <code>LoginModel</code>.
     * @alias module:model/LoginModel
     * @param userName {String} 
     * @param password {String} 
     */
    constructor(userName, password) { 
        
        LoginModel.initialize(this, userName, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userName, password) { 
        obj['userName'] = userName;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>LoginModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoginModel} obj Optional instance to populate.
     * @return {module:model/LoginModel} The populated <code>LoginModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginModel();

            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} userName
 */
LoginModel.prototype['userName'] = undefined;

/**
 * @member {String} password
 */
LoginModel.prototype['password'] = undefined;






export default LoginModel;

