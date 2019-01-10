import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DEFAULT_ALIAS_SETTINGS } from '../constants';
import { AliasSettings } from '../models/alias-settings';

@Injectable()
export class AliasSettingsService {
  private readonly subject = new BehaviorSubject<Partial<AliasSettings>>(
    DEFAULT_ALIAS_SETTINGS
  );

  get aliasSettings$() {
    return this.subject.asObservable();
  }

  setSettings(settings: Partial<AliasSettings>) {
    this.subject.next({ ...this.subject.value, ...settings });
  }

  resetSettings() {
    this.subject.next({ ...DEFAULT_ALIAS_SETTINGS, categoryId: null });
  }
}
