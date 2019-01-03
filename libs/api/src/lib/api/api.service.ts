import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '@gh/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseResponse } from '../base/base-response';

@Injectable()
export abstract class ApiService {
  readonly apiUrl: string;
  constructor(
    private readonly http: HttpClient,
    private readonly environment: Environment
  ) {
    this.apiUrl = this.environment.apiUrl;
  }

  public get<T>(path: string, query?: any): Observable<T> {
    return this.http
      .get<BaseResponse<T>>(`${this.apiUrl}${path}`, {
        params: new HttpParams({
          fromObject: query
        })
      })
      .pipe(map(res => res.rows));
  }

  public post<T>(path: string, body: any): Observable<T> {
    return this.http
      .post<BaseResponse<T>>(`${this.apiUrl}${path}`, body)
      .pipe(map(res => res.rows));
  }

  public patch<T>(path: string, body: any): Observable<T> {
    return this.http
      .patch<BaseResponse<T>>(`${this.apiUrl}${path}`, body)
      .pipe(map(res => res.rows));
  }

  public put<T>(path: string, body: any): Observable<T> {
    return this.http
      .put<BaseResponse<T>>(`${this.apiUrl}${path}`, body)
      .pipe(map(res => res.rows));
  }

  public delete<T>(path: string, body: any): Observable<T> {
    return this.http
      .request<BaseResponse<T>>('DELETE', `${this.environment.apiUrl}${path}`, {
        body
      })
      .pipe(map(res => res.rows));
  }
}
