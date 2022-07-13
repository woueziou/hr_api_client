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
/**
 * 
 * @export
 * @interface RegisterModel
 */
export interface RegisterModel {
    /**
     * 
     * @type {string}
     * @memberof RegisterModel
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterModel
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterModel
     */
    matriculeNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegisterModel
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterModel
     */
    positionId: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterModel
     */
    organizationId: string;
}

/**
 * Check if a given object implements the RegisterModel interface.
 */
export function instanceOfRegisterModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "lastName" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "positionId" in value;
    isInstance = isInstance && "organizationId" in value;

    return isInstance;
}

export function RegisterModelFromJSON(json: any): RegisterModel {
    return RegisterModelFromJSONTyped(json, false);
}

export function RegisterModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': json['firstName'],
        'lastName': json['lastName'],
        'matriculeNo': !exists(json, 'matriculeNo') ? undefined : json['matriculeNo'],
        'email': json['email'],
        'positionId': json['positionId'],
        'organizationId': json['organizationId'],
    };
}

export function RegisterModelToJSON(value?: RegisterModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'lastName': value.lastName,
        'matriculeNo': value.matriculeNo,
        'email': value.email,
        'positionId': value.positionId,
        'organizationId': value.organizationId,
    };
}

