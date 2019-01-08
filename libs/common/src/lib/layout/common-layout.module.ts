import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [LayoutModule, RouterModule, SharedModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class CoreLayoutModule {}
