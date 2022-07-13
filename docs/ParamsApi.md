# HrApi.ParamsApi

All URIs are relative to *https://localhost:7266*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiParamsGetCountriesGet**](ParamsApi.md#apiParamsGetCountriesGet) | **GET** /api/Params/GetCountries | 
[**apiParamsGetOrganizationsGet**](ParamsApi.md#apiParamsGetOrganizationsGet) | **GET** /api/Params/GetOrganizations | 
[**apiParamsGetPermissionTypeListGet**](ParamsApi.md#apiParamsGetPermissionTypeListGet) | **GET** /api/Params/GetPermissionTypeList | 
[**apiParamsGetPositionsGet**](ParamsApi.md#apiParamsGetPositionsGet) | **GET** /api/Params/GetPositions | 
[**apiParamsGetStationsGet**](ParamsApi.md#apiParamsGetStationsGet) | **GET** /api/Params/GetStations | 



## apiParamsGetCountriesGet

> [CountryResponse] apiParamsGetCountriesGet()



### Example

```javascript
import HrApi from 'hr_api';
let defaultClient = HrApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HrApi.ParamsApi();
apiInstance.apiParamsGetCountriesGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[CountryResponse]**](CountryResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiParamsGetOrganizationsGet

> [OrganizationResponse] apiParamsGetOrganizationsGet()



### Example

```javascript
import HrApi from 'hr_api';
let defaultClient = HrApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HrApi.ParamsApi();
apiInstance.apiParamsGetOrganizationsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[OrganizationResponse]**](OrganizationResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiParamsGetPermissionTypeListGet

> [PermissionTypeResponse] apiParamsGetPermissionTypeListGet()



### Example

```javascript
import HrApi from 'hr_api';
let defaultClient = HrApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HrApi.ParamsApi();
apiInstance.apiParamsGetPermissionTypeListGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[PermissionTypeResponse]**](PermissionTypeResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiParamsGetPositionsGet

> [PostionResponse] apiParamsGetPositionsGet()



### Example

```javascript
import HrApi from 'hr_api';
let defaultClient = HrApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HrApi.ParamsApi();
apiInstance.apiParamsGetPositionsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[PostionResponse]**](PostionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiParamsGetStationsGet

> [StationResponse] apiParamsGetStationsGet()



### Example

```javascript
import HrApi from 'hr_api';
let defaultClient = HrApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HrApi.ParamsApi();
apiInstance.apiParamsGetStationsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[StationResponse]**](StationResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

