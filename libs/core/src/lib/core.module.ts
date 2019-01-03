import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { Environment } from './environment';
import { HammerConfig } from './hammer.config';

@NgModule({
  imports: [CommonModule]
})
export class CoreModule {
  public static forRoot(
    environment: Environment
  ): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: Environment, useValue: environment },
        {
          provide: HAMMER_GESTURE_CONFIG,
          useClass: HammerConfig
        }
      ]
    };
  }
}
