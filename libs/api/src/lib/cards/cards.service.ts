import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApiService, BaseResponse } from '../base';
import { Card } from './card';

@Injectable()
export class CardsService extends BaseApiService {
  public getCards(filter: any = {}): Observable<BaseResponse<Card[]>> {
    return this.api.get<BaseResponse<Card[]>>('/cards', filter);
  }
}
