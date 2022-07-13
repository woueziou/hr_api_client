# .VacationApi

All URIs are relative to *https://localhost:7266*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiVacationGetVacationRequestsGet**](VacationApi.md#apiVacationGetVacationRequestsGet) | **GET** /api/Vacation/GetVacationRequests | 
[**apiVacationMakeVacationRequestPost**](VacationApi.md#apiVacationMakeVacationRequestPost) | **POST** /api/Vacation/MakeVacationRequest | 


# **apiVacationGetVacationRequestsGet**
> Array<PermissionResponse> apiVacationGetVacationRequestsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VacationApi(configuration);

let body:any = {};

apiInstance.apiVacationGetVacationRequestsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<PermissionResponse>**

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

# **apiVacationMakeVacationRequestPost**
> Permission apiVacationMakeVacationRequestPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VacationApi(configuration);

let body:.VacationApiApiVacationMakeVacationRequestPostRequest = {
  // CreatePermissionRequest (optional)
  createPermissionRequest: {
    dateStart: new Date('1970-01-01T00:00:00.00Z'),
    dateReturn: new Date('1970-01-01T00:00:00.00Z'),
    backupUserId: "backupUserId_example",
    permissionTypeId: 1,
    additionalComments: "additionalComments_example",
  },
};

apiInstance.apiVacationMakeVacationRequestPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPermissionRequest** | **CreatePermissionRequest**|  |


### Return type

**Permission**

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


