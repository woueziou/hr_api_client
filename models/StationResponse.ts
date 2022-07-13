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
 * @interface StationResponse
 */
export interface StationResponse {
    /**
     * 
     * @type {number}
     * @memberof StationResponse
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof StationResponse
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof StationResponse
     */
    isActive?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof StationResponse
     */
    codeIata?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StationResponse
     */
    countryName?: string | null;
}

/**
 * Check if a given object implements the StationResponse interface.
 */
export function instanceOfStationResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StationResponseFromJSON(json: any): StationResponse {
    return StationResponseFromJSONTyped(json, false);
}

export function StationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'isActive': !exists(json, 'isActive') ? undefined : json['isActive'],
        'codeIata': !exists(json, 'codeIata') ? undefined : json['codeIata'],
        'countryName': !exists(json, 'countryName') ? undefined : json['countryName'],
    };
}

export function StationResponseToJSON(value?: StationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'isActive': value.isActive,
        'codeIata': value.codeIata,
        'countryName': value.countryName,
    };
}

