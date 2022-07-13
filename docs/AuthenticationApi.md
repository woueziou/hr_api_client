# HrApi.AuthenticationApi

All URIs are relative to *https://localhost:7266*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAuthenticationLoginUserPost**](AuthenticationApi.md#apiAuthenticationLoginUserPost) | **POST** /api/Authentication/LoginUser | 
[**apiAuthenticationRegisterUserPost**](AuthenticationApi.md#apiAuthenticationRegisterUserPost) | **POST** /api/Authentication/RegisterUser | 
[**apiAuthenticationWhoAmIGet**](AuthenticationApi.md#apiAuthenticationWhoAmIGet) | **GET** /api/Authentication/WhoAmI | 



## apiAuthenticationLoginUserPost

> Tokens apiAuthenticationLoginUserPost(opts)



### Example

```javascript
import HrApi from 'hr_api';
let defaultClient = HrApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HrApi.AuthenticationApi();
let opts = {
  'loginModel': new HrApi.LoginModel() // LoginModel | 
};
apiInstance.apiAuthenticationLoginUserPost(opts, (error, data, response) => {
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
 **loginModel** | [**LoginModel**](LoginModel.md)|  | [optional] 

### Return type

[**Tokens**](Tokens.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## apiAuthenticationRegisterUserPost

> UserResponse apiAuthenticationRegisterUserPost(opts)



### Example

```javascript
import HrApi from 'hr_api';
let defaultClient = HrApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HrApi.AuthenticationApi();
let opts = {
  'registerModel': new HrApi.RegisterModel() // RegisterModel | 
};
apiInstance.apiAuthenticationRegisterUserPost(opts, (error, data, response) => {
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
 **registerModel** | [**RegisterModel**](RegisterModel.md)|  | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## apiAuthenticationWhoAmIGet

> UserResponse apiAuthenticationWhoAmIGet()



### Example

```javascript
import HrApi from 'hr_api';
let defaultClient = HrApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HrApi.AuthenticationApi();
apiInstance.apiAuthenticationWhoAmIGet((error, data, response) => {
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

[**UserResponse**](UserResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

