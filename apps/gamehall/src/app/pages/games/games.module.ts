import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GamesComponent } from './containers/games/games.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GamesComponent
      },
      {
        path: 'alias',
        loadChildren: '../alias/alias.module#AliasModule'
      }
    ])
  ],
  declarations: [GamesComponent]
})
export class GamesModule {}
