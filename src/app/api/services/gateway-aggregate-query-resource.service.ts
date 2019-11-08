/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ActivityDTO } from '../models/activity-dto';
import { CommittedActivityAggregate } from '../models/committed-activity-aggregate';
import { DimensionDTO } from '../models/dimension-dto';
import { RegisteredUserAggregate } from '../models/registered-user-aggregate';

/**
 * Gateway Aggregate Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class GatewayAggregateQueryResourceService extends __BaseService {
  static readonly getAllActivitiesUsingGETPath = '/api/query/activities';
  static readonly getAllCommittedActivitiesByStatusUsingGETPath = '/api/query/committed-activities/{status}';
  static readonly getAllDimensionsUsingGETPath = '/api/query/dimensions';
  static readonly getAllEnumProofTypesUsingGETPath = '/api/query/enums/proof-type';
  static readonly getAllEnumStatusUsingGETPath = '/api/query/enums/status';
  static readonly getAllEnumTypesUsingGETPath = '/api/query/enums/type';
  static readonly getRegisteredUserByUserIdUsingGETPath = '/api/query/registered-user/{userId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllActivitiesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<ActivityDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/activities`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ActivityDTO>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllActivitiesUsingGET(): __Observable<Array<ActivityDTO>> {
    return this.getAllActivitiesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<ActivityDTO>)
    );
  }

  /**
   * @param status status
   * @return OK
   */
  getAllCommittedActivitiesByStatusUsingGETResponse(status: string): __Observable<__StrictHttpResponse<Array<CommittedActivityAggregate>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/committed-activities/${status}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommittedActivityAggregate>>;
      })
    );
  }
  /**
   * @param status status
   * @return OK
   */
  getAllCommittedActivitiesByStatusUsingGET(status: string): __Observable<Array<CommittedActivityAggregate>> {
    return this.getAllCommittedActivitiesByStatusUsingGETResponse(status).pipe(
      __map(_r => _r.body as Array<CommittedActivityAggregate>)
    );
  }

  /**
   * @return OK
   */
  getAllDimensionsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<DimensionDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/dimensions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DimensionDTO>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllDimensionsUsingGET(): __Observable<Array<DimensionDTO>> {
    return this.getAllDimensionsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<DimensionDTO>)
    );
  }

  /**
   * @return OK
   */
  getAllEnumProofTypesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/enums/proof-type`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllEnumProofTypesUsingGET(): __Observable<Array<string>> {
    return this.getAllEnumProofTypesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @return OK
   */
  getAllEnumStatusUsingGETResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/enums/status`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllEnumStatusUsingGET(): __Observable<Array<string>> {
    return this.getAllEnumStatusUsingGETResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @return OK
   */
  getAllEnumTypesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/enums/type`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllEnumTypesUsingGET(): __Observable<Array<string>> {
    return this.getAllEnumTypesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @param userId userId
   * @return OK
   */
  getRegisteredUserByUserIdUsingGETResponse(userId: string): __Observable<__StrictHttpResponse<RegisteredUserAggregate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/registered-user/${userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RegisteredUserAggregate>;
      })
    );
  }
  /**
   * @param userId userId
   * @return OK
   */
  getRegisteredUserByUserIdUsingGET(userId: string): __Observable<RegisteredUserAggregate> {
    return this.getRegisteredUserByUserIdUsingGETResponse(userId).pipe(
      __map(_r => _r.body as RegisteredUserAggregate)
    );
  }
}

module GatewayAggregateQueryResourceService {
}

export { GatewayAggregateQueryResourceService }
