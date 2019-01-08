import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Card } from './card';
import { CardsService } from './cards.service';

@Injectable()
export class CardsResolver implements Resolve<Card[]> {
  constructor(private readonly cardsService: CardsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Card[]> {
    const { categoryId, limit } = route.queryParams;
    return this.cardsService.getCards({
      'filter[categoryId]': categoryId,
      limit
    });
  }
}
