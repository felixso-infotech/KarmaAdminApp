/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ActivityAggregate } from '../models/activity-aggregate';
import { CommittedActivityDTO } from '../models/committed-activity-dto';
import { RegisteredUserDTO } from '../models/registered-user-dto';
import { LoveDTO } from '../models/love-dto';

/**
 * Gateway Aggregate Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class GatewayAggregateCommandResourceService extends __BaseService {
  static readonly createActivityUsingPOSTPath = '/api/command/create-activity';
  static readonly createCommittedActivityUsingPOSTPath = '/api/command/create-committed-activity';
  static readonly createRegisteredUserUsingPOSTPath = '/api/command/create-registered-user';
  static readonly deleteRegisteredUserUsingDELETEPath = '/api/command/delete-registered-user/{id}';
  static readonly loveCommittedActivityUsingPOSTPath = '/api/command/love-committedactivity';
  static readonly updateActivityUsingPUTPath = '/api/command/update-activity';
  static readonly updateCommittedActivityUsingPUTPath = '/api/command/update-committed-activity';
  static readonly updateRegisteredUserUsingPUTPath = '/api/command/update-registered-user';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param activityAggregate activityAggregate
   * @return OK
   */
  createActivityUsingPOSTResponse(activityAggregate: ActivityAggregate): __Observable<__StrictHttpResponse<ActivityAggregate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = activityAggregate;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/create-activity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ActivityAggregate>;
      })
    );
  }
  /**
   * @param activityAggregate activityAggregate
   * @return OK
   */
  createActivityUsingPOST(activityAggregate: ActivityAggregate): __Observable<ActivityAggregate> {
    return this.createActivityUsingPOSTResponse(activityAggregate).pipe(
      __map(_r => _r.body as ActivityAggregate)
    );
  }

  /**
   * @param committedActivityDTO committedActivityDTO
   * @return OK
   */
  createCommittedActivityUsingPOSTResponse(committedActivityDTO: CommittedActivityDTO): __Observable<__StrictHttpResponse<CommittedActivityDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = committedActivityDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/create-committed-activity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommittedActivityDTO>;
      })
    );
  }
  /**
   * @param committedActivityDTO committedActivityDTO
   * @return OK
   */
  createCommittedActivityUsingPOST(committedActivityDTO: CommittedActivityDTO): __Observable<CommittedActivityDTO> {
    return this.createCommittedActivityUsingPOSTResponse(committedActivityDTO).pipe(
      __map(_r => _r.body as CommittedActivityDTO)
    );
  }

  /**
   * @param registeredUserDTO registeredUserDTO
   * @return OK
   */
  createRegisteredUserUsingPOSTResponse(registeredUserDTO: RegisteredUserDTO): __Observable<__StrictHttpResponse<RegisteredUserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = registeredUserDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/create-registered-user`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RegisteredUserDTO>;
      })
    );
  }
  /**
   * @param registeredUserDTO registeredUserDTO
   * @return OK
   */
  createRegisteredUserUsingPOST(registeredUserDTO: RegisteredUserDTO): __Observable<RegisteredUserDTO> {
    return this.createRegisteredUserUsingPOSTResponse(registeredUserDTO).pipe(
      __map(_r => _r.body as RegisteredUserDTO)
    );
  }

  /**
   * @param id id
   */
  deleteRegisteredUserUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/delete-registered-user/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deleteRegisteredUserUsingDELETE(id: number): __Observable<null> {
    return this.deleteRegisteredUserUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param loveDTO loveDTO
   * @return OK
   */
  loveCommittedActivityUsingPOSTResponse(loveDTO: LoveDTO): __Observable<__StrictHttpResponse<LoveDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = loveDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/love-committedactivity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LoveDTO>;
      })
    );
  }
  /**
   * @param loveDTO loveDTO
   * @return OK
   */
  loveCommittedActivityUsingPOST(loveDTO: LoveDTO): __Observable<LoveDTO> {
    return this.loveCommittedActivityUsingPOSTResponse(loveDTO).pipe(
      __map(_r => _r.body as LoveDTO)
    );
  }

  /**
   * @param activityAggregate activityAggregate
   * @return OK
   */
  updateActivityUsingPUTResponse(activityAggregate: ActivityAggregate): __Observable<__StrictHttpResponse<ActivityAggregate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = activityAggregate;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/update-activity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ActivityAggregate>;
      })
    );
  }
  /**
   * @param activityAggregate activityAggregate
   * @return OK
   */
  updateActivityUsingPUT(activityAggregate: ActivityAggregate): __Observable<ActivityAggregate> {
    return this.updateActivityUsingPUTResponse(activityAggregate).pipe(
      __map(_r => _r.body as ActivityAggregate)
    );
  }

  /**
   * @param committedActivityDTO committedActivityDTO
   * @return OK
   */
  updateCommittedActivityUsingPUTResponse(committedActivityDTO: CommittedActivityDTO): __Observable<__StrictHttpResponse<CommittedActivityDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = committedActivityDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/update-committed-activity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommittedActivityDTO>;
      })
    );
  }
  /**
   * @param committedActivityDTO committedActivityDTO
   * @return OK
   */
  updateCommittedActivityUsingPUT(committedActivityDTO: CommittedActivityDTO): __Observable<CommittedActivityDTO> {
    return this.updateCommittedActivityUsingPUTResponse(committedActivityDTO).pipe(
      __map(_r => _r.body as CommittedActivityDTO)
    );
  }

  /**
   * @param registeredUserDTO registeredUserDTO
   * @return OK
   */
  updateRegisteredUserUsingPUTResponse(registeredUserDTO: RegisteredUserDTO): __Observable<__StrictHttpResponse<RegisteredUserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = registeredUserDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/update-registered-user`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RegisteredUserDTO>;
      })
    );
  }
  /**
   * @param registeredUserDTO registeredUserDTO
   * @return OK
   */
  updateRegisteredUserUsingPUT(registeredUserDTO: RegisteredUserDTO): __Observable<RegisteredUserDTO> {
    return this.updateRegisteredUserUsingPUTResponse(registeredUserDTO).pipe(
      __map(_r => _r.body as RegisteredUserDTO)
    );
  }
}

module GatewayAggregateCommandResourceService {
}

export { GatewayAggregateCommandResourceService }
