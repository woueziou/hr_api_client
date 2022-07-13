# .RequestApi

All URIs are relative to *https://localhost:7266*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiRequestHandleValidationPost**](RequestApi.md#apiRequestHandleValidationPost) | **POST** /api/Request/HandleValidation | 


# **apiRequestHandleValidationPost**
> any apiRequestHandleValidationPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RequestApi(configuration);

let body:.RequestApiApiRequestHandleValidationPostRequest = {
  // ValidationHanldeRequest (optional)
  validationHanldeRequest: {
    documentId: "documentId_example",
    validatorId: "validatorId_example",
    hasGivenAuthorization: true,
    comment: "comment_example",
  },
};

apiInstance.apiRequestHandleValidationPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validationHanldeRequest** | **ValidationHanldeRequest**|  |


### Return type

**any**

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


