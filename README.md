# hr_api

HrApi - JavaScript client for hr_api
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v1
- Package version: v1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install hr_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your hr_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var HrApi = require('hr_api');

var defaultClient = HrApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

var api = new HrApi.AuthenticationApi()
var opts = {
  'loginModel': new HrApi.LoginModel() // {LoginModel} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.apiAuthenticationLoginUserPost(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost:7266*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*HrApi.AuthenticationApi* | [**apiAuthenticationLoginUserPost**](docs/AuthenticationApi.md#apiAuthenticationLoginUserPost) | **POST** /api/Authentication/LoginUser | 
*HrApi.AuthenticationApi* | [**apiAuthenticationRegisterUserPost**](docs/AuthenticationApi.md#apiAuthenticationRegisterUserPost) | **POST** /api/Authentication/RegisterUser | 
*HrApi.AuthenticationApi* | [**apiAuthenticationWhoAmIGet**](docs/AuthenticationApi.md#apiAuthenticationWhoAmIGet) | **GET** /api/Authentication/WhoAmI | 
*HrApi.ParamsApi* | [**apiParamsGetCountriesGet**](docs/ParamsApi.md#apiParamsGetCountriesGet) | **GET** /api/Params/GetCountries | 
*HrApi.ParamsApi* | [**apiParamsGetOrganizationsGet**](docs/ParamsApi.md#apiParamsGetOrganizationsGet) | **GET** /api/Params/GetOrganizations | 
*HrApi.ParamsApi* | [**apiParamsGetPermissionTypeListGet**](docs/ParamsApi.md#apiParamsGetPermissionTypeListGet) | **GET** /api/Params/GetPermissionTypeList | 
*HrApi.ParamsApi* | [**apiParamsGetPositionsGet**](docs/ParamsApi.md#apiParamsGetPositionsGet) | **GET** /api/Params/GetPositions | 
*HrApi.ParamsApi* | [**apiParamsGetStationsGet**](docs/ParamsApi.md#apiParamsGetStationsGet) | **GET** /api/Params/GetStations | 
*HrApi.RequestApi* | [**apiRequestHandleValidationPost**](docs/RequestApi.md#apiRequestHandleValidationPost) | **POST** /api/Request/HandleValidation | 
*HrApi.TicketApi* | [**apiTicketCreateTicketRequestPost**](docs/TicketApi.md#apiTicketCreateTicketRequestPost) | **POST** /api/Ticket/CreateTicketRequest | 
*HrApi.VacationApi* | [**apiVacationGetVacationRequestsGet**](docs/VacationApi.md#apiVacationGetVacationRequestsGet) | **GET** /api/Vacation/GetVacationRequests | 
*HrApi.VacationApi* | [**apiVacationMakeVacationRequestPost**](docs/VacationApi.md#apiVacationMakeVacationRequestPost) | **POST** /api/Vacation/MakeVacationRequest | 


## Documentation for Models

 - [HrApi.CountryResponse](docs/CountryResponse.md)
 - [HrApi.CreatePermissionRequest](docs/CreatePermissionRequest.md)
 - [HrApi.CreateTicketRequest](docs/CreateTicketRequest.md)
 - [HrApi.Credential](docs/Credential.md)
 - [HrApi.LoginModel](docs/LoginModel.md)
 - [HrApi.OrganizationResponse](docs/OrganizationResponse.md)
 - [HrApi.Permission](docs/Permission.md)
 - [HrApi.PermissionHistory](docs/PermissionHistory.md)
 - [HrApi.PermissionResponse](docs/PermissionResponse.md)
 - [HrApi.PermissionType](docs/PermissionType.md)
 - [HrApi.PermissionTypeResponse](docs/PermissionTypeResponse.md)
 - [HrApi.PostionResponse](docs/PostionResponse.md)
 - [HrApi.RegisterModel](docs/RegisterModel.md)
 - [HrApi.Request](docs/Request.md)
 - [HrApi.RequestValidator](docs/RequestValidator.md)
 - [HrApi.StationResponse](docs/StationResponse.md)
 - [HrApi.TicketResponse](docs/TicketResponse.md)
 - [HrApi.Tokens](docs/Tokens.md)
 - [HrApi.User](docs/User.md)
 - [HrApi.UserResponse](docs/UserResponse.md)
 - [HrApi.ValidationHanldeRequest](docs/ValidationHanldeRequest.md)


## Documentation for Authorization



### Bearer

- **Type**: Bearer authentication

