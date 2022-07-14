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
 * The OrganizationResponse model module.
 * @module model/OrganizationResponse
 * @version 1.0.0
 */
class OrganizationResponse {
    /**
     * Constructs a new <code>OrganizationResponse</code>.
     * @alias module:model/OrganizationResponse
     */
    constructor() { 
        
        OrganizationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationResponse} obj Optional instance to populate.
     * @return {module:model/OrganizationResponse} The populated <code>OrganizationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('organizationtypeName')) {
                obj['organizationtypeName'] = ApiClient.convertToType(data['organizationtypeName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
OrganizationResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
OrganizationResponse.prototype['name'] = undefined;

/**
 * @member {String} code
 */
OrganizationResponse.prototype['code'] = undefined;

/**
 * @member {String} organizationtypeName
 */
OrganizationResponse.prototype['organizationtypeName'] = undefined;






export default OrganizationResponse;

