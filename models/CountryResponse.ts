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
 * @interface CountryResponse
 */
export interface CountryResponse {
    /**
     * 
     * @type {number}
     * @memberof CountryResponse
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof CountryResponse
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CountryResponse
     */
    code?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CountryResponse
     */
    index?: number;
}

/**
 * Check if a given object implements the CountryResponse interface.
 */
export function instanceOfCountryResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CountryResponseFromJSON(json: any): CountryResponse {
    return CountryResponseFromJSONTyped(json, false);
}

export function CountryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountryResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'index': !exists(json, 'index') ? undefined : json['index'],
    };
}

export function CountryResponseToJSON(value?: CountryResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'code': value.code,
        'index': value.index,
    };
}
