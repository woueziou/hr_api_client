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
 * @interface Tokens
 */
export interface Tokens {
    /**
     * 
     * @type {string}
     * @memberof Tokens
     */
    token?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Tokens
     */
    refreshToken?: string | null;
}

/**
 * Check if a given object implements the Tokens interface.
 */
export function instanceOfTokens(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TokensFromJSON(json: any): Tokens {
    return TokensFromJSONTyped(json, false);
}

export function TokensFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tokens {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'token') ? undefined : json['token'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function TokensToJSON(value?: Tokens | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': value.token,
        'refreshToken': value.refreshToken,
    };
}
