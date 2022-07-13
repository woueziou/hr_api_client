# .AuthenticationApi

All URIs are relative to *https://localhost:7266*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAuthenticationLoginUserPost**](AuthenticationApi.md#apiAuthenticationLoginUserPost) | **POST** /api/Authentication/LoginUser | 
[**apiAuthenticationRegisterUserPost**](AuthenticationApi.md#apiAuthenticationRegisterUserPost) | **POST** /api/Authentication/RegisterUser | 
[**apiAuthenticationWhoAmIGet**](AuthenticationApi.md#apiAuthenticationWhoAmIGet) | **GET** /api/Authentication/WhoAmI | 


# **apiAuthenticationLoginUserPost**
> Tokens apiAuthenticationLoginUserPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthenticationApi(configuration);

let body:.AuthenticationApiApiAuthenticationLoginUserPostRequest = {
  // LoginModel (optional)
  loginModel: {
    userName: "userName_example",
    password: "password_example",
  },
};

apiInstance.apiAuthenticationLoginUserPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginModel** | **LoginModel**|  |


### Return type

**Tokens**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiAuthenticationRegisterUserPost**
> UserResponse apiAuthenticationRegisterUserPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthenticationApi(configuration);

let body:.AuthenticationApiApiAuthenticationRegisterUserPostRequest = {
  // RegisterModel (optional)
  registerModel: {
    firstName: "firstName_example",
    lastName: "lastName_example",
    matriculeNo: "matriculeNo_example",
    email: "email_example",
    positionId: "positionId_example",
    organizationId: "organizationId_example",
  },
};

apiInstance.apiAuthenticationRegisterUserPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registerModel** | **RegisterModel**|  |


### Return type

**UserResponse**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiAuthenticationWhoAmIGet**
> UserResponse apiAuthenticationWhoAmIGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthenticationApi(configuration);

let body:any = {};

apiInstance.apiAuthenticationWhoAmIGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UserResponse**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


