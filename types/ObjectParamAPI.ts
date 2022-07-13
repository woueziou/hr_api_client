import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CountryResponse } from '../models/CountryResponse';
import { CreatePermissionRequest } from '../models/CreatePermissionRequest';
import { CreateTicketRequest } from '../models/CreateTicketRequest';
import { Credential } from '../models/Credential';
import { LoginModel } from '../models/LoginModel';
import { OrganizationResponse } from '../models/OrganizationResponse';
import { Permission } from '../models/Permission';
import { PermissionHistory } from '../models/PermissionHistory';
import { PermissionResponse } from '../models/PermissionResponse';
import { PermissionType } from '../models/PermissionType';
import { PermissionTypeResponse } from '../models/PermissionTypeResponse';
import { PostionResponse } from '../models/PostionResponse';
import { RegisterModel } from '../models/RegisterModel';
import { Request } from '../models/Request';
import { RequestValidator } from '../models/RequestValidator';
import { StationResponse } from '../models/StationResponse';
import { TicketResponse } from '../models/TicketResponse';
import { Tokens } from '../models/Tokens';
import { User } from '../models/User';
import { UserResponse } from '../models/UserResponse';
import { ValidationHanldeRequest } from '../models/ValidationHanldeRequest';

import { ObservableAuthenticationApi } from "./ObservableAPI";
import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";

export interface AuthenticationApiApiAuthenticationLoginUserPostRequest {
    /**
     * 
     * @type LoginModel
     * @memberof AuthenticationApiapiAuthenticationLoginUserPost
     */
    loginModel?: LoginModel
}

export interface AuthenticationApiApiAuthenticationRegisterUserPostRequest {
    /**
     * 
     * @type RegisterModel
     * @memberof AuthenticationApiapiAuthenticationRegisterUserPost
     */
    registerModel?: RegisterModel
}

export interface AuthenticationApiApiAuthenticationWhoAmIGetRequest {
}

export class ObjectAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationApiRequestFactory, responseProcessor?: AuthenticationApiResponseProcessor) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiAuthenticationLoginUserPost(param: AuthenticationApiApiAuthenticationLoginUserPostRequest = {}, options?: Configuration): Promise<Tokens> {
        return this.api.apiAuthenticationLoginUserPost(param.loginModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiAuthenticationRegisterUserPost(param: AuthenticationApiApiAuthenticationRegisterUserPostRequest = {}, options?: Configuration): Promise<UserResponse> {
        return this.api.apiAuthenticationRegisterUserPost(param.registerModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiAuthenticationWhoAmIGet(param: AuthenticationApiApiAuthenticationWhoAmIGetRequest = {}, options?: Configuration): Promise<UserResponse> {
        return this.api.apiAuthenticationWhoAmIGet( options).toPromise();
    }

}

import { ObservableParamsApi } from "./ObservableAPI";
import { ParamsApiRequestFactory, ParamsApiResponseProcessor} from "../apis/ParamsApi";

export interface ParamsApiApiParamsGetCountriesGetRequest {
}

export interface ParamsApiApiParamsGetOrganizationsGetRequest {
}

export interface ParamsApiApiParamsGetPermissionTypeListGetRequest {
}

export interface ParamsApiApiParamsGetPositionsGetRequest {
}

export interface ParamsApiApiParamsGetStationsGetRequest {
}

export class ObjectParamsApi {
    private api: ObservableParamsApi

    public constructor(configuration: Configuration, requestFactory?: ParamsApiRequestFactory, responseProcessor?: ParamsApiResponseProcessor) {
        this.api = new ObservableParamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiParamsGetCountriesGet(param: ParamsApiApiParamsGetCountriesGetRequest = {}, options?: Configuration): Promise<Array<CountryResponse>> {
        return this.api.apiParamsGetCountriesGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiParamsGetOrganizationsGet(param: ParamsApiApiParamsGetOrganizationsGetRequest = {}, options?: Configuration): Promise<Array<OrganizationResponse>> {
        return this.api.apiParamsGetOrganizationsGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiParamsGetPermissionTypeListGet(param: ParamsApiApiParamsGetPermissionTypeListGetRequest = {}, options?: Configuration): Promise<Array<PermissionTypeResponse>> {
        return this.api.apiParamsGetPermissionTypeListGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiParamsGetPositionsGet(param: ParamsApiApiParamsGetPositionsGetRequest = {}, options?: Configuration): Promise<Array<PostionResponse>> {
        return this.api.apiParamsGetPositionsGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiParamsGetStationsGet(param: ParamsApiApiParamsGetStationsGetRequest = {}, options?: Configuration): Promise<Array<StationResponse>> {
        return this.api.apiParamsGetStationsGet( options).toPromise();
    }

}

import { ObservableRequestApi } from "./ObservableAPI";
import { RequestApiRequestFactory, RequestApiResponseProcessor} from "../apis/RequestApi";

export interface RequestApiApiRequestHandleValidationPostRequest {
    /**
     * 
     * @type ValidationHanldeRequest
     * @memberof RequestApiapiRequestHandleValidationPost
     */
    validationHanldeRequest?: ValidationHanldeRequest
}

export class ObjectRequestApi {
    private api: ObservableRequestApi

    public constructor(configuration: Configuration, requestFactory?: RequestApiRequestFactory, responseProcessor?: RequestApiResponseProcessor) {
        this.api = new ObservableRequestApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiRequestHandleValidationPost(param: RequestApiApiRequestHandleValidationPostRequest = {}, options?: Configuration): Promise<any> {
        return this.api.apiRequestHandleValidationPost(param.validationHanldeRequest,  options).toPromise();
    }

}

import { ObservableTicketApi } from "./ObservableAPI";
import { TicketApiRequestFactory, TicketApiResponseProcessor} from "../apis/TicketApi";

export interface TicketApiApiTicketCreateTicketRequestPostRequest {
    /**
     * 
     * @type CreateTicketRequest
     * @memberof TicketApiapiTicketCreateTicketRequestPost
     */
    createTicketRequest?: CreateTicketRequest
}

export class ObjectTicketApi {
    private api: ObservableTicketApi

    public constructor(configuration: Configuration, requestFactory?: TicketApiRequestFactory, responseProcessor?: TicketApiResponseProcessor) {
        this.api = new ObservableTicketApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiTicketCreateTicketRequestPost(param: TicketApiApiTicketCreateTicketRequestPostRequest = {}, options?: Configuration): Promise<TicketResponse> {
        return this.api.apiTicketCreateTicketRequestPost(param.createTicketRequest,  options).toPromise();
    }

}

import { ObservableVacationApi } from "./ObservableAPI";
import { VacationApiRequestFactory, VacationApiResponseProcessor} from "../apis/VacationApi";

export interface VacationApiApiVacationGetVacationRequestsGetRequest {
}

export interface VacationApiApiVacationMakeVacationRequestPostRequest {
    /**
     * 
     * @type CreatePermissionRequest
     * @memberof VacationApiapiVacationMakeVacationRequestPost
     */
    createPermissionRequest?: CreatePermissionRequest
}

export class ObjectVacationApi {
    private api: ObservableVacationApi

    public constructor(configuration: Configuration, requestFactory?: VacationApiRequestFactory, responseProcessor?: VacationApiResponseProcessor) {
        this.api = new ObservableVacationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiVacationGetVacationRequestsGet(param: VacationApiApiVacationGetVacationRequestsGetRequest = {}, options?: Configuration): Promise<Array<PermissionResponse>> {
        return this.api.apiVacationGetVacationRequestsGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiVacationMakeVacationRequestPost(param: VacationApiApiVacationMakeVacationRequestPostRequest = {}, options?: Configuration): Promise<Permission> {
        return this.api.apiVacationMakeVacationRequestPost(param.createPermissionRequest,  options).toPromise();
    }

}
