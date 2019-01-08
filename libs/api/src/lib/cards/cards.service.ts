import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApiService } from '../base';
import { Card } from './card';

@Injectable()
export class CardsService extends BaseApiService {
  public getCards(filter: any = {}): Observable<Card[]> {
    return this.api.get<Card[]>('/cards', filter);
  }
}
