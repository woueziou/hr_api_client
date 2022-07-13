# .TicketApi

All URIs are relative to *https://localhost:7266*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiTicketCreateTicketRequestPost**](TicketApi.md#apiTicketCreateTicketRequestPost) | **POST** /api/Ticket/CreateTicketRequest | 


# **apiTicketCreateTicketRequestPost**
> TicketResponse apiTicketCreateTicketRequestPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TicketApi(configuration);

let body:.TicketApiApiTicketCreateTicketRequestPostRequest = {
  // CreateTicketRequest (optional)
  createTicketRequest: {
    ticketTypeId: 1,
    benefitId: "benefitId_example",
    carrierId: 1,
    dateDeparture: new Date('1970-01-01T00:00:00.00Z'),
    originStation: 1,
    destinationStation: 1,
    dateDesired: new Date('1970-01-01T00:00:00.00Z'),
    additionalComments: "additionalComments_example",
  },
};

apiInstance.apiTicketCreateTicketRequestPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTicketRequest** | **CreateTicketRequest**|  |


### Return type

**TicketResponse**

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


