import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest
} from '@angular/common/http/testing';
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';

import { Environment } from '@mwl/core';

import { BaseResponse } from '../models';
import { ApiService } from './api.service';

const environmentStub = {
  apiHost: 'testHost'
};

// tslint:disable-next-line:no-big-function
describe('ApiService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApiService,
        {
          provide: Environment,
          useValue: environmentStub
        }
      ]
    })
  );

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  describe('fetch()', () => {
    it('fetch() should make request with correct url and method', fakeAsync(() => {
      const http = TestBed.get(HttpTestingController);
      const service: ApiService = TestBed.get(ApiService);

      const res: BaseResponse<1> = { data: 1 };

      service.fetch('/test').subscribe(data => expect(data).toEqual(1));

      const req = http.expectOne(`${environmentStub.apiHost}/test`);
      expect(req.request.method).toBe('GET');
      req.flush(res);
      tick();
    }));

    it('request should have correct httpParams', fakeAsync(() => {
      const http = TestBed.get(HttpTestingController);
      const service: ApiService = TestBed.get(ApiService);

      const res: BaseResponse<1> = { data: 1 };
      const query = { test: 'test', super: 'super' };

      service.fetch('/test', query).subscribe();

      const req = http.expectOne(`${environmentStub.apiHost}/test?test=test&super=super`);
      req.flush(res);
      tick();
    }));

    it('fetch() should return correct error', fakeAsync(() => {
      const http: HttpTestingController = TestBed.get(HttpTestingController);
      const service: ApiService = TestBed.get(ApiService);

      service.fetch('/test').subscribe(() => null, err => expect(err.error.error).toEqual('test'));

      const req: TestRequest = http.expectOne(`${environmentStub.apiHost}/test`);

      req.error(
        new ErrorEvent('', {
          error: 'test'
        })
      );
      tick();
    }));
  });

  describe('post()', () => {
    const body = { testBody: 'test' };

    it('post() should make request with correct url and method', fakeAsync(() => {
      const http = TestBed.get(HttpTestingController);
      const service: ApiService = TestBed.get(ApiService);

      const res: BaseResponse<1> = { data: 1 };

      service.post('/test', body).subscribe(data => expect(data).toEqual(1));

      const req = http.expectOne(`${environmentStub.apiHost}/test`);
      expect(req.request.method).toBe('POST');
      req.flush(res);
      tick();
    }));

    it('post() should make request with correct body', fakeAsync(() => {
      const http = TestBed.get(HttpTestingController);
      const service: ApiService = TestBed.get(ApiService);

      const res: BaseResponse<1> = { data: 1 };

      service.post('/test', body).subscribe();

      const req = http.expectOne(`${environmentStub.apiHost}/test`);
      expect(req.request.body).toEqual(body);
      req.flush(res);
      tick();
    }));

    it('post() should return correct error', fakeAsync(() => {
      const http: HttpTestingController = TestBed.get(HttpTestingController);
      const service: ApiService = TestBed.get(ApiService);

      service
        .post('/test', body)
        .subscribe(() => null, err => expect(err.error.error).toEqual('test'));

      const req: TestRequest = http.expectOne(`${environmentStub.apiHost}/test`);

      req.error(
        new ErrorEvent('', {
          error: 'test'
        })
      );
      tick();
    }));
  });
  describe('patch()', () => {
    const body = { testBody: 'test' };

    it('should make request with correct url and method', fakeAsync(() => {
      const http = TestBed.get(HttpTestingController);
      const service: ApiService = TestBed.get(ApiService);

      const res: BaseResponse<1> = { data: 1 };

      service.patch('/test', body).subscribe(data => expect(data).toEqual(1));

      const req = http.expectOne(`${environmentStub.apiHost}/test`);
      expect(req.request.method).toBe('PATCH');
      req.flush(res);
      tick();
    }));

    it('should make request with correct body', fakeAsync(() => {
      const http = TestBed.get(HttpTestingController);
      const service: ApiService = TestBed.get(ApiService);

      const res: BaseResponse<1> = { data: 1 };

      service.patch('/test', body).subscribe();

      const req = http.expectOne(`${environmentStub.apiHost}/test`);
      expect(req.request.body).toEqual(body);
      req.flush(res);
      tick();
    }));

    it('should return correct error', fakeAsync(() => {
      const http: HttpTestingController = TestBed.get(HttpTestingController);
      const service: ApiService = TestBed.get(ApiService);

      service
        .patch('/test', body)
        .subscribe(() => null, err => expect(err.error.error).toEqual('test'));

      const req: TestRequest = http.expectOne(`${environmentStub.apiHost}/test`);

      req.error(
        new ErrorEvent('', {
          error: 'test'
        })
      );
      tick();
    }));
  });

  describe('put()', () => {
    const body = { testBody: 'test' };

    it('should make request with correct url and method', fakeAsync(() => {
      const http = TestBed.get(HttpTestingController);
      const service: ApiService = TestBed.get(ApiService);

      const res: BaseResponse<1> = { data: 1 };

      service.put('/test', body).subscribe(data => expect(data).toEqual(1));

      const req = http.expectOne(`${environmentStub.apiHost}/test`);
      expect(req.request.method).toBe('PUT');
      req.flush(res);
      tick();
    }));

    it('should make request with correct body', fakeAsync(() => {
      const http = TestBed.get(HttpTestingController);
      const service: ApiService = TestBed.get(ApiService);

      const res: BaseResponse<1> = { data: 1 };

      service.put('/test', body).subscribe();

      const req = http.expectOne(`${environmentStub.apiHost}/test`);
      expect(req.request.body).toEqual(body);
      req.flush(res);
      tick();
    }));

    it('should return correct error', fakeAsync(() => {
      const http: HttpTestingController = TestBed.get(HttpTestingController);
      const service: ApiService = TestBed.get(ApiService);

      service
        .put('/test', body)
        .subscribe(() => null, err => expect(err.error.error).toEqual('test'));

      const req: TestRequest = http.expectOne(`${environmentStub.apiHost}/test`);

      req.error(
        new ErrorEvent('', {
          error: 'test'
        })
      );
      tick();
    }));
  });

  describe('delete()', () => {
    const body = { testBody: 'test' };

    it('should make delete request with correct url and method', fakeAsync(() => {
      const http = TestBed.get(HttpTestingController);
      const service: ApiService = TestBed.get(ApiService);

      service.delete('/test', body).subscribe();

      const req = http.expectOne(`${environmentStub.apiHost}/test`);
      expect(req.request.method).toBe('DELETE');
      expect(req.request.body).toEqual(body);
      req.flush({});
      tick();
    }));
  });
});
