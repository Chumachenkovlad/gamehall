import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Card, CardsService } from '@gh/api';
import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

import { AliasSettingsService } from '../services';

@Injectable()
export class AliasCardsResolver implements Resolve<Card[]> {
  constructor(
    private readonly cardsService: CardsService,
    private readonly aliasSettingsService: AliasSettingsService
  ) {}

  resolve(): Observable<Card[]> {
    return this.aliasSettingsService.aliasSettings$.pipe(
      first(),
      switchMap(settings =>
        this.cardsService.getCards({
          'filter[categoryId]': settings.categoryId,
          limit: settings.limit
        })
      )
    );
  }
}
