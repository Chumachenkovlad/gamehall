import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardsResolver, CategoriesResolver } from '@gh/api';
import { SharedModule } from '@gh/common';

import { containers, PlaygroundComponent, ResultsComponent, SettingsComponent } from './containers';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SettingsComponent,
        resolve: {
          categories: CategoriesResolver
        }
      },
      {
        path: 'play',
        component: PlaygroundComponent,
        resolve: {
          cards: CardsResolver
        }
      },
      {
        path: 'results',
        component: ResultsComponent
      }
    ])
  ],
  declarations: [...containers]
})
export class AliasModule {}
