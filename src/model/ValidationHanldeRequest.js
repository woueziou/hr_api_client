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
 * The ValidationHanldeRequest model module.
 * @module model/ValidationHanldeRequest
 * @version 1.0.0
 */
class ValidationHanldeRequest {
    /**
     * Constructs a new <code>ValidationHanldeRequest</code>.
     * @alias module:model/ValidationHanldeRequest
     */
    constructor() { 
        
        ValidationHanldeRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValidationHanldeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidationHanldeRequest} obj Optional instance to populate.
     * @return {module:model/ValidationHanldeRequest} The populated <code>ValidationHanldeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidationHanldeRequest();

            if (data.hasOwnProperty('documentId')) {
                obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
            }
            if (data.hasOwnProperty('validatorId')) {
                obj['validatorId'] = ApiClient.convertToType(data['validatorId'], 'String');
            }
            if (data.hasOwnProperty('hasGivenAuthorization')) {
                obj['hasGivenAuthorization'] = ApiClient.convertToType(data['hasGivenAuthorization'], 'Boolean');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} documentId
 */
ValidationHanldeRequest.prototype['documentId'] = undefined;

/**
 * @member {String} validatorId
 */
ValidationHanldeRequest.prototype['validatorId'] = undefined;

/**
 * @member {Boolean} hasGivenAuthorization
 */
ValidationHanldeRequest.prototype['hasGivenAuthorization'] = undefined;

/**
 * @member {String} comment
 */
ValidationHanldeRequest.prototype['comment'] = undefined;






export default ValidationHanldeRequest;

