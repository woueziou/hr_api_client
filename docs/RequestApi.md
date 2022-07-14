# HrApi.RequestApi

All URIs are relative to *https://localhost:7266*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiRequestHandleValidationPost**](RequestApi.md#apiRequestHandleValidationPost) | **POST** /api/Request/HandleValidation | 



## apiRequestHandleValidationPost

> Object apiRequestHandleValidationPost(opts)



### Example

```javascript
import HrApi from 'hr_api';
let defaultClient = HrApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HrApi.RequestApi();
let opts = {
  'validationHanldeRequest': new HrApi.ValidationHanldeRequest() // ValidationHanldeRequest | 
};
apiInstance.apiRequestHandleValidationPost(opts, (error, data, response) => {
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
 **validationHanldeRequest** | [**ValidationHanldeRequest**](ValidationHanldeRequest.md)|  | [optional] 

### Return type

**Object**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

