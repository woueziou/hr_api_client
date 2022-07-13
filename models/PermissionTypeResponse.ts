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
 * @interface PermissionTypeResponse
 */
export interface PermissionTypeResponse {
    /**
     * 
     * @type {number}
     * @memberof PermissionTypeResponse
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof PermissionTypeResponse
     */
    name?: string | null;
}

/**
 * Check if a given object implements the PermissionTypeResponse interface.
 */
export function instanceOfPermissionTypeResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PermissionTypeResponseFromJSON(json: any): PermissionTypeResponse {
    return PermissionTypeResponseFromJSONTyped(json, false);
}

export function PermissionTypeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermissionTypeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function PermissionTypeResponseToJSON(value?: PermissionTypeResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}
