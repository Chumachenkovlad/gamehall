import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApiService, BaseResponse } from '../base';
import { Category } from './category';

@Injectable()
export class CategoriesService extends BaseApiService {
  public getCategories(filter: any = {}): Observable<BaseResponse<Category[]>> {
    return this.api.get<BaseResponse<Category[]>>('/categories', filter);
  }
}
