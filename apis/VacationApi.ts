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


import * as runtime from '../runtime';
import type {
  CreatePermissionRequest,
  Permission,
  PermissionResponse,
} from '../models';
import {
    CreatePermissionRequestFromJSON,
    CreatePermissionRequestToJSON,
    PermissionFromJSON,
    PermissionToJSON,
    PermissionResponseFromJSON,
    PermissionResponseToJSON,
} from '../models';

export interface ApiVacationMakeVacationRequestPostRequest {
    createPermissionRequest?: CreatePermissionRequest;
}

/**
 * 
 */
export class VacationApi extends runtime.BaseAPI {

    /**
     */
    async apiVacationGetVacationRequestsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PermissionResponse>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Vacation/GetVacationRequests`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PermissionResponseFromJSON));
    }

    /**
     */
    async apiVacationGetVacationRequestsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PermissionResponse>> {
        const response = await this.apiVacationGetVacationRequestsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async apiVacationMakeVacationRequestPostRaw(requestParameters: ApiVacationMakeVacationRequestPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Permission>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Vacation/MakeVacationRequest`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreatePermissionRequestToJSON(requestParameters.createPermissionRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PermissionFromJSON(jsonValue));
    }

    /**
     */
    async apiVacationMakeVacationRequestPost(requestParameters: ApiVacationMakeVacationRequestPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Permission> {
        const response = await this.apiVacationMakeVacationRequestPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
