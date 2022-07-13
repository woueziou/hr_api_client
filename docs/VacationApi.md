# HrApi.VacationApi

All URIs are relative to *https://localhost:7266*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiVacationGetVacationRequestsGet**](VacationApi.md#apiVacationGetVacationRequestsGet) | **GET** /api/Vacation/GetVacationRequests | 
[**apiVacationMakeVacationRequestPost**](VacationApi.md#apiVacationMakeVacationRequestPost) | **POST** /api/Vacation/MakeVacationRequest | 



## apiVacationGetVacationRequestsGet

> [PermissionResponse] apiVacationGetVacationRequestsGet()



### Example

```javascript
import HrApi from 'hr_api';
let defaultClient = HrApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HrApi.VacationApi();
apiInstance.apiVacationGetVacationRequestsGet((error, data, response) => {
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

[**[PermissionResponse]**](PermissionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiVacationMakeVacationRequestPost

> Permission apiVacationMakeVacationRequestPost(opts)



### Example

```javascript
import HrApi from 'hr_api';
let defaultClient = HrApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HrApi.VacationApi();
let opts = {
  'createPermissionRequest': new HrApi.CreatePermissionRequest() // CreatePermissionRequest | 
};
apiInstance.apiVacationMakeVacationRequestPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPermissionRequest** | [**CreatePermissionRequest**](CreatePermissionRequest.md)|  | [optional] 

### Return type

[**Permission**](Permission.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

