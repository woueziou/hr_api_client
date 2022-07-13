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
import { ObservableAuthenticationApi } from './ObservableAPI';

import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";
export class PromiseAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationApiRequestFactory,
        responseProcessor?: AuthenticationApiResponseProcessor
    ) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param loginModel 
     */
    public apiAuthenticationLoginUserPost(loginModel?: LoginModel, _options?: Configuration): Promise<Tokens> {
        const result = this.api.apiAuthenticationLoginUserPost(loginModel, _options);
        return result.toPromise();
    }

    /**
     * @param registerModel 
     */
    public apiAuthenticationRegisterUserPost(registerModel?: RegisterModel, _options?: Configuration): Promise<UserResponse> {
        const result = this.api.apiAuthenticationRegisterUserPost(registerModel, _options);
        return result.toPromise();
    }

    /**
     */
    public apiAuthenticationWhoAmIGet(_options?: Configuration): Promise<UserResponse> {
        const result = this.api.apiAuthenticationWhoAmIGet(_options);
        return result.toPromise();
    }


}



import { ObservableParamsApi } from './ObservableAPI';

import { ParamsApiRequestFactory, ParamsApiResponseProcessor} from "../apis/ParamsApi";
export class PromiseParamsApi {
    private api: ObservableParamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ParamsApiRequestFactory,
        responseProcessor?: ParamsApiResponseProcessor
    ) {
        this.api = new ObservableParamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public apiParamsGetCountriesGet(_options?: Configuration): Promise<Array<CountryResponse>> {
        const result = this.api.apiParamsGetCountriesGet(_options);
        return result.toPromise();
    }

    /**
     */
    public apiParamsGetOrganizationsGet(_options?: Configuration): Promise<Array<OrganizationResponse>> {
        const result = this.api.apiParamsGetOrganizationsGet(_options);
        return result.toPromise();
    }

    /**
     */
    public apiParamsGetPermissionTypeListGet(_options?: Configuration): Promise<Array<PermissionTypeResponse>> {
        const result = this.api.apiParamsGetPermissionTypeListGet(_options);
        return result.toPromise();
    }

    /**
     */
    public apiParamsGetPositionsGet(_options?: Configuration): Promise<Array<PostionResponse>> {
        const result = this.api.apiParamsGetPositionsGet(_options);
        return result.toPromise();
    }

    /**
     */
    public apiParamsGetStationsGet(_options?: Configuration): Promise<Array<StationResponse>> {
        const result = this.api.apiParamsGetStationsGet(_options);
        return result.toPromise();
    }


}



import { ObservableRequestApi } from './ObservableAPI';

import { RequestApiRequestFactory, RequestApiResponseProcessor} from "../apis/RequestApi";
export class PromiseRequestApi {
    private api: ObservableRequestApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RequestApiRequestFactory,
        responseProcessor?: RequestApiResponseProcessor
    ) {
        this.api = new ObservableRequestApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param validationHanldeRequest 
     */
    public apiRequestHandleValidationPost(validationHanldeRequest?: ValidationHanldeRequest, _options?: Configuration): Promise<any> {
        const result = this.api.apiRequestHandleValidationPost(validationHanldeRequest, _options);
        return result.toPromise();
    }


}



import { ObservableTicketApi } from './ObservableAPI';

import { TicketApiRequestFactory, TicketApiResponseProcessor} from "../apis/TicketApi";
export class PromiseTicketApi {
    private api: ObservableTicketApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TicketApiRequestFactory,
        responseProcessor?: TicketApiResponseProcessor
    ) {
        this.api = new ObservableTicketApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param createTicketRequest 
     */
    public apiTicketCreateTicketRequestPost(createTicketRequest?: CreateTicketRequest, _options?: Configuration): Promise<TicketResponse> {
        const result = this.api.apiTicketCreateTicketRequestPost(createTicketRequest, _options);
        return result.toPromise();
    }


}



import { ObservableVacationApi } from './ObservableAPI';

import { VacationApiRequestFactory, VacationApiResponseProcessor} from "../apis/VacationApi";
export class PromiseVacationApi {
    private api: ObservableVacationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VacationApiRequestFactory,
        responseProcessor?: VacationApiResponseProcessor
    ) {
        this.api = new ObservableVacationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public apiVacationGetVacationRequestsGet(_options?: Configuration): Promise<Array<PermissionResponse>> {
        const result = this.api.apiVacationGetVacationRequestsGet(_options);
        return result.toPromise();
    }

    /**
     * @param createPermissionRequest 
     */
    public apiVacationMakeVacationRequestPost(createPermissionRequest?: CreatePermissionRequest, _options?: Configuration): Promise<Permission> {
        const result = this.api.apiVacationMakeVacationRequestPost(createPermissionRequest, _options);
        return result.toPromise();
    }


}



