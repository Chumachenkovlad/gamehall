import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GamesListModule } from '@gh/common';

import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    GamesListModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}
