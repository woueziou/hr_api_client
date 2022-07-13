/* tslint:disable */
/* eslint-disable */
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
 */

import { exists, mapValues } from '../runtime';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface Credential
 */
export interface Credential {
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    username?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    password?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Credential
     */
    isActive?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    userId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    type?: string | null;
    /**
     * 
     * @type {User}
     * @memberof Credential
     */
    user?: User;
}

/**
 * Check if a given object implements the Credential interface.
 */
export function instanceOfCredential(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CredentialFromJSON(json: any): Credential {
    return CredentialFromJSONTyped(json, false);
}

export function CredentialFromJSONTyped(json: any, ignoreDiscriminator: boolean): Credential {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'isActive': !exists(json, 'isActive') ? undefined : json['isActive'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'user': !exists(json, 'user') ? undefined : UserFromJSON(json['user']),
    };
}

export function CredentialToJSON(value?: Credential | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'username': value.username,
        'password': value.password,
        'isActive': value.isActive,
        'userId': value.userId,
        'type': value.type,
        'user': UserToJSON(value.user),
    };
}

