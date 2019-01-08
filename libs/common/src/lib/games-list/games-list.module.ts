import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { GamesListComponent } from './games-list/games-list.component';

@NgModule({
  imports: [SharedModule, RouterModule],
  declarations: [GamesListComponent],
  exports: [GamesListComponent]
})
export class GamesListModule {}
