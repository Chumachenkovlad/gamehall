import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { RESOLVERS, SERVICES } from './providers';

@NgModule({
  imports: [HttpClientModule],
  providers: [...SERVICES, ...RESOLVERS]
})
export class ApiModule {}
