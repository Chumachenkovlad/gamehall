import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApiService } from '../base';
import { Category } from './category';

@Injectable()
export class CategoriesService extends BaseApiService {
  public getCategories(filter: any = {}): Observable<Category[]> {
    return this.api.get<Category[]>('/categories', filter);
  }
}
