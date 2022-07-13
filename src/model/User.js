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
import Credential from './Credential';
import Permission from './Permission';
import PermissionHistory from './PermissionHistory';
import RequestValidator from './RequestValidator';

/**
 * The User model module.
 * @module model/User
 * @version 1.0.0
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * @alias module:model/User
     */
    constructor() { 
        
        User.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('matriculeNo')) {
                obj['matriculeNo'] = ApiClient.convertToType(data['matriculeNo'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('credentials')) {
                obj['credentials'] = ApiClient.convertToType(data['credentials'], [Credential]);
            }
            if (data.hasOwnProperty('permissionHistories')) {
                obj['permissionHistories'] = ApiClient.convertToType(data['permissionHistories'], [PermissionHistory]);
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], [Permission]);
            }
            if (data.hasOwnProperty('requestValidators')) {
                obj['requestValidators'] = ApiClient.convertToType(data['requestValidators'], [RequestValidator]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
User.prototype['id'] = undefined;

/**
 * @member {String} firstName
 */
User.prototype['firstName'] = undefined;

/**
 * @member {String} lastName
 */
User.prototype['lastName'] = undefined;

/**
 * @member {String} matriculeNo
 */
User.prototype['matriculeNo'] = undefined;

/**
 * @member {String} email
 */
User.prototype['email'] = undefined;

/**
 * @member {String} scope
 */
User.prototype['scope'] = undefined;

/**
 * @member {Array.<module:model/Credential>} credentials
 */
User.prototype['credentials'] = undefined;

/**
 * @member {Array.<module:model/PermissionHistory>} permissionHistories
 */
User.prototype['permissionHistories'] = undefined;

/**
 * @member {Array.<module:model/Permission>} permissions
 */
User.prototype['permissions'] = undefined;

/**
 * @member {Array.<module:model/RequestValidator>} requestValidators
 */
User.prototype['requestValidators'] = undefined;






export default User;
