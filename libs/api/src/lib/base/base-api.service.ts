import { Injectable } from '@angular/core';

import { ApiService } from '../api/api.service';

@Injectable()
export abstract class BaseApiService {
  constructor(protected api: ApiService) {}
}
