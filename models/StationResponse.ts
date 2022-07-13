/**
 * HR API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class StationResponse {
    'id'?: number;
    'name'?: string;
    'isActive'?: boolean;
    'codeIata'?: string;
    'countryName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "codeIata",
            "baseName": "codeIata",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryName",
            "baseName": "countryName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StationResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
