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

import ApiClient from '../ApiClient';

/**
 * The StationResponse model module.
 * @module model/StationResponse
 * @version v1
 */
class StationResponse {
    /**
     * Constructs a new <code>StationResponse</code>.
     * @alias module:model/StationResponse
     */
    constructor() { 
        
        StationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StationResponse} obj Optional instance to populate.
     * @return {module:model/StationResponse} The populated <code>StationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StationResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('codeIata')) {
                obj['codeIata'] = ApiClient.convertToType(data['codeIata'], 'String');
            }
            if (data.hasOwnProperty('countryName')) {
                obj['countryName'] = ApiClient.convertToType(data['countryName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
StationResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
StationResponse.prototype['name'] = undefined;

/**
 * @member {Boolean} isActive
 */
StationResponse.prototype['isActive'] = undefined;

/**
 * @member {String} codeIata
 */
StationResponse.prototype['codeIata'] = undefined;

/**
 * @member {String} countryName
 */
StationResponse.prototype['countryName'] = undefined;






export default StationResponse;

