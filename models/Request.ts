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
import type { RequestValidator } from './RequestValidator';
import {
    RequestValidatorFromJSON,
    RequestValidatorFromJSONTyped,
    RequestValidatorToJSON,
} from './RequestValidator';

/**
 * 
 * @export
 * @interface Request
 */
export interface Request {
    /**
     * 
     * @type {string}
     * @memberof Request
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Request
     */
    documentId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Request
     */
    isApproved?: boolean;
    /**
     * 
     * @type {Array<RequestValidator>}
     * @memberof Request
     */
    requestValidators?: Array<RequestValidator> | null;
}

/**
 * Check if a given object implements the Request interface.
 */
export function instanceOfRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RequestFromJSON(json: any): Request {
    return RequestFromJSONTyped(json, false);
}

export function RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): Request {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'isApproved': !exists(json, 'isApproved') ? undefined : json['isApproved'],
        'requestValidators': !exists(json, 'requestValidators') ? undefined : (json['requestValidators'] === null ? null : (json['requestValidators'] as Array<any>).map(RequestValidatorFromJSON)),
    };
}

export function RequestToJSON(value?: Request | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'documentId': value.documentId,
        'isApproved': value.isApproved,
        'requestValidators': value.requestValidators === undefined ? undefined : (value.requestValidators === null ? null : (value.requestValidators as Array<any>).map(RequestValidatorToJSON)),
    };
}
