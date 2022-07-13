import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";
export class ObservableAuthenticationApi {
    private requestFactory: AuthenticationApiRequestFactory;
    private responseProcessor: AuthenticationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationApiRequestFactory,
        responseProcessor?: AuthenticationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthenticationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthenticationApiResponseProcessor();
    }

    /**
     * @param loginModel 
     */
    public apiAuthenticationLoginUserPost(loginModel?: LoginModel, _options?: Configuration): Observable<Tokens> {
        const requestContextPromise = this.requestFactory.apiAuthenticationLoginUserPost(loginModel, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiAuthenticationLoginUserPost(rsp)));
            }));
    }

    /**
     * @param registerModel 
     */
    public apiAuthenticationRegisterUserPost(registerModel?: RegisterModel, _options?: Configuration): Observable<UserResponse> {
        const requestContextPromise = this.requestFactory.apiAuthenticationRegisterUserPost(registerModel, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiAuthenticationRegisterUserPost(rsp)));
            }));
    }

    /**
     */
    public apiAuthenticationWhoAmIGet(_options?: Configuration): Observable<UserResponse> {
        const requestContextPromise = this.requestFactory.apiAuthenticationWhoAmIGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiAuthenticationWhoAmIGet(rsp)));
            }));
    }

}

import { ParamsApiRequestFactory, ParamsApiResponseProcessor} from "../apis/ParamsApi";
export class ObservableParamsApi {
    private requestFactory: ParamsApiRequestFactory;
    private responseProcessor: ParamsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ParamsApiRequestFactory,
        responseProcessor?: ParamsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ParamsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ParamsApiResponseProcessor();
    }

    /**
     */
    public apiParamsGetCountriesGet(_options?: Configuration): Observable<Array<CountryResponse>> {
        const requestContextPromise = this.requestFactory.apiParamsGetCountriesGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiParamsGetCountriesGet(rsp)));
            }));
    }

    /**
     */
    public apiParamsGetOrganizationsGet(_options?: Configuration): Observable<Array<OrganizationResponse>> {
        const requestContextPromise = this.requestFactory.apiParamsGetOrganizationsGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiParamsGetOrganizationsGet(rsp)));
            }));
    }

    /**
     */
    public apiParamsGetPermissionTypeListGet(_options?: Configuration): Observable<Array<PermissionTypeResponse>> {
        const requestContextPromise = this.requestFactory.apiParamsGetPermissionTypeListGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiParamsGetPermissionTypeListGet(rsp)));
            }));
    }

    /**
     */
    public apiParamsGetPositionsGet(_options?: Configuration): Observable<Array<PostionResponse>> {
        const requestContextPromise = this.requestFactory.apiParamsGetPositionsGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiParamsGetPositionsGet(rsp)));
            }));
    }

    /**
     */
    public apiParamsGetStationsGet(_options?: Configuration): Observable<Array<StationResponse>> {
        const requestContextPromise = this.requestFactory.apiParamsGetStationsGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiParamsGetStationsGet(rsp)));
            }));
    }

}

import { RequestApiRequestFactory, RequestApiResponseProcessor} from "../apis/RequestApi";
export class ObservableRequestApi {
    private requestFactory: RequestApiRequestFactory;
    private responseProcessor: RequestApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RequestApiRequestFactory,
        responseProcessor?: RequestApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RequestApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RequestApiResponseProcessor();
    }

    /**
     * @param validationHanldeRequest 
     */
    public apiRequestHandleValidationPost(validationHanldeRequest?: ValidationHanldeRequest, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.apiRequestHandleValidationPost(validationHanldeRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiRequestHandleValidationPost(rsp)));
            }));
    }

}

import { TicketApiRequestFactory, TicketApiResponseProcessor} from "../apis/TicketApi";
export class ObservableTicketApi {
    private requestFactory: TicketApiRequestFactory;
    private responseProcessor: TicketApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TicketApiRequestFactory,
        responseProcessor?: TicketApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TicketApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TicketApiResponseProcessor();
    }

    /**
     * @param createTicketRequest 
     */
    public apiTicketCreateTicketRequestPost(createTicketRequest?: CreateTicketRequest, _options?: Configuration): Observable<TicketResponse> {
        const requestContextPromise = this.requestFactory.apiTicketCreateTicketRequestPost(createTicketRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiTicketCreateTicketRequestPost(rsp)));
            }));
    }

}

import { VacationApiRequestFactory, VacationApiResponseProcessor} from "../apis/VacationApi";
export class ObservableVacationApi {
    private requestFactory: VacationApiRequestFactory;
    private responseProcessor: VacationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VacationApiRequestFactory,
        responseProcessor?: VacationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VacationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VacationApiResponseProcessor();
    }

    /**
     */
    public apiVacationGetVacationRequestsGet(_options?: Configuration): Observable<Array<PermissionResponse>> {
        const requestContextPromise = this.requestFactory.apiVacationGetVacationRequestsGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiVacationGetVacationRequestsGet(rsp)));
            }));
    }

    /**
     * @param createPermissionRequest 
     */
    public apiVacationMakeVacationRequestPost(createPermissionRequest?: CreatePermissionRequest, _options?: Configuration): Observable<Permission> {
        const requestContextPromise = this.requestFactory.apiVacationMakeVacationRequestPost(createPermissionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiVacationMakeVacationRequestPost(rsp)));
            }));
    }

}
