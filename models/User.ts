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
import type { Credential } from './Credential';
import {
    CredentialFromJSON,
    CredentialFromJSONTyped,
    CredentialToJSON,
} from './Credential';
import type { Permission } from './Permission';
import {
    PermissionFromJSON,
    PermissionFromJSONTyped,
    PermissionToJSON,
} from './Permission';
import type { PermissionHistory } from './PermissionHistory';
import {
    PermissionHistoryFromJSON,
    PermissionHistoryFromJSONTyped,
    PermissionHistoryToJSON,
} from './PermissionHistory';
import type { RequestValidator } from './RequestValidator';
import {
    RequestValidatorFromJSON,
    RequestValidatorFromJSONTyped,
    RequestValidatorToJSON,
} from './RequestValidator';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    lastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    matriculeNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    scope?: string | null;
    /**
     * 
     * @type {Array<Credential>}
     * @memberof User
     */
    credentials?: Array<Credential> | null;
    /**
     * 
     * @type {Array<PermissionHistory>}
     * @memberof User
     */
    permissionHistories?: Array<PermissionHistory> | null;
    /**
     * 
     * @type {Array<Permission>}
     * @memberof User
     */
    permissions?: Array<Permission> | null;
    /**
     * 
     * @type {Array<RequestValidator>}
     * @memberof User
     */
    requestValidators?: Array<RequestValidator> | null;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'matriculeNo': !exists(json, 'matriculeNo') ? undefined : json['matriculeNo'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'credentials': !exists(json, 'credentials') ? undefined : (json['credentials'] === null ? null : (json['credentials'] as Array<any>).map(CredentialFromJSON)),
        'permissionHistories': !exists(json, 'permissionHistories') ? undefined : (json['permissionHistories'] === null ? null : (json['permissionHistories'] as Array<any>).map(PermissionHistoryFromJSON)),
        'permissions': !exists(json, 'permissions') ? undefined : (json['permissions'] === null ? null : (json['permissions'] as Array<any>).map(PermissionFromJSON)),
        'requestValidators': !exists(json, 'requestValidators') ? undefined : (json['requestValidators'] === null ? null : (json['requestValidators'] as Array<any>).map(RequestValidatorFromJSON)),
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'matriculeNo': value.matriculeNo,
        'email': value.email,
        'scope': value.scope,
        'credentials': value.credentials === undefined ? undefined : (value.credentials === null ? null : (value.credentials as Array<any>).map(CredentialToJSON)),
        'permissionHistories': value.permissionHistories === undefined ? undefined : (value.permissionHistories === null ? null : (value.permissionHistories as Array<any>).map(PermissionHistoryToJSON)),
        'permissions': value.permissions === undefined ? undefined : (value.permissions === null ? null : (value.permissions as Array<any>).map(PermissionToJSON)),
        'requestValidators': value.requestValidators === undefined ? undefined : (value.requestValidators === null ? null : (value.requestValidators as Array<any>).map(RequestValidatorToJSON)),
    };
}

