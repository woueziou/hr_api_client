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
 * The Tokens model module.
 * @module model/Tokens
 * @version 1.0.0
 */
class Tokens {
    /**
     * Constructs a new <code>Tokens</code>.
     * @alias module:model/Tokens
     */
    constructor() { 
        
        Tokens.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Tokens</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tokens} obj Optional instance to populate.
     * @return {module:model/Tokens} The populated <code>Tokens</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Tokens();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('refreshToken')) {
                obj['refreshToken'] = ApiClient.convertToType(data['refreshToken'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} token
 */
Tokens.prototype['token'] = undefined;

/**
 * @member {String} refreshToken
 */
Tokens.prototype['refreshToken'] = undefined;






export default Tokens;

