import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { CategoriesService } from './categories.service';
import { Category } from './category';

@Injectable()
export class CategoriesResolver implements Resolve<Category[]> {
  constructor(private readonly categoriesService: CategoriesService) {}

  resolve(): Observable<any> | Promise<any> | any {
    return this.categoriesService.getCategories();
  }
}
