import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GamesListModule } from '@gh/common';

import { GamesComponent } from './containers/games/games.component';

@NgModule({
  imports: [
    GamesListModule,
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
