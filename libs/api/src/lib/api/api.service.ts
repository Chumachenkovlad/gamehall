import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CoreModule } from '../core.module';
import { BaseResponse } from '../models';

@Injectable({
  providedIn: CoreModule
})
export abstract class ApiService {
  constructor(private readonly http: HttpClient) {}

  public fetch<T>(path: string, query?: any): Observable<T> {
    return this.http
      .get<BaseResponse<T>>(`${this.environment.apiHost}${path}`, {
        params: new HttpParams({
          fromObject: query
        })
      })
      .pipe(map(res => res.data));
  }

  // tslint:disable-next-line:no-any
  public post<T>(path: string, body: any): Observable<T> {
    return this.http
      .post<BaseResponse<T>>(`${this.environment.apiHost}${path}`, body)
      .pipe(map(res => res.data));
  }

  // tslint:disable-next-line:no-any
  public patch<T>(path: string, body: any): Observable<T> {
    return this.http
      .patch<BaseResponse<T>>(`${this.environment.apiHost}${path}`, body)
      .pipe(map(res => res.data));
  }

  // tslint:disable-next-line:no-any
  public put<T>(path: string, body: any): Observable<T> {
    return this.http
      .put<BaseResponse<T>>(`${this.environment.apiHost}${path}`, body)
      .pipe(map(res => res.data));
  }

  // tslint:disable-next-line:no-any
  public delete<T>(path: string, body: any): Observable<T> {
    return this.http
      .request<BaseResponse<T>>(
        'DELETE',
        `${this.environment.apiHost}${path}`,
        {
          body
        }
      )
      .pipe(map(res => res.data));
  }
}
