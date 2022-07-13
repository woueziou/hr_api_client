# .ParamsApi

All URIs are relative to *https://localhost:7266*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiParamsGetCountriesGet**](ParamsApi.md#apiParamsGetCountriesGet) | **GET** /api/Params/GetCountries | 
[**apiParamsGetOrganizationsGet**](ParamsApi.md#apiParamsGetOrganizationsGet) | **GET** /api/Params/GetOrganizations | 
[**apiParamsGetPermissionTypeListGet**](ParamsApi.md#apiParamsGetPermissionTypeListGet) | **GET** /api/Params/GetPermissionTypeList | 
[**apiParamsGetPositionsGet**](ParamsApi.md#apiParamsGetPositionsGet) | **GET** /api/Params/GetPositions | 
[**apiParamsGetStationsGet**](ParamsApi.md#apiParamsGetStationsGet) | **GET** /api/Params/GetStations | 


# **apiParamsGetCountriesGet**
> Array<CountryResponse> apiParamsGetCountriesGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ParamsApi(configuration);

let body:any = {};

apiInstance.apiParamsGetCountriesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<CountryResponse>**

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

# **apiParamsGetOrganizationsGet**
> Array<OrganizationResponse> apiParamsGetOrganizationsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ParamsApi(configuration);

let body:any = {};

apiInstance.apiParamsGetOrganizationsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<OrganizationResponse>**

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

# **apiParamsGetPermissionTypeListGet**
> Array<PermissionTypeResponse> apiParamsGetPermissionTypeListGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ParamsApi(configuration);

let body:any = {};

apiInstance.apiParamsGetPermissionTypeListGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<PermissionTypeResponse>**

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

# **apiParamsGetPositionsGet**
> Array<PostionResponse> apiParamsGetPositionsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ParamsApi(configuration);

let body:any = {};

apiInstance.apiParamsGetPositionsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<PostionResponse>**

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

# **apiParamsGetStationsGet**
> Array<StationResponse> apiParamsGetStationsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ParamsApi(configuration);

let body:any = {};

apiInstance.apiParamsGetStationsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<StationResponse>**

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


