import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PROVIDERS } from './providers';

@NgModule({
  imports: [CommonModule],
  providers: [...PROVIDERS]
})
export class ApiModule {}
