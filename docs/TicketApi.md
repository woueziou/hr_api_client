# HrApi.TicketApi

All URIs are relative to *https://localhost:7266*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiTicketCreateTicketRequestPost**](TicketApi.md#apiTicketCreateTicketRequestPost) | **POST** /api/Ticket/CreateTicketRequest | 



## apiTicketCreateTicketRequestPost

> TicketResponse apiTicketCreateTicketRequestPost(opts)



### Example

```javascript
import HrApi from 'hr_api';
let defaultClient = HrApi.ApiClient.instance;
// Configure Bearer access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HrApi.TicketApi();
let opts = {
  'createTicketRequest': new HrApi.CreateTicketRequest() // CreateTicketRequest | 
};
apiInstance.apiTicketCreateTicketRequestPost(opts, (error, data, response) => {
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
 **createTicketRequest** | [**CreateTicketRequest**](CreateTicketRequest.md)|  | [optional] 

### Return type

[**TicketResponse**](TicketResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

