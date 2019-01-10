import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesResolver } from '@gh/api';
import { SharedModule } from '@gh/common';

import { COMPONENTS } from './components';
import { CONTAINERS, PlaygroundComponent, SettingsComponent } from './containers';
import { RESOLVERS } from './resolvers';
import { AliasCardsResolver } from './resolvers/alias-cards.resolver';
import { SERVICES } from './services';

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
          cards: AliasCardsResolver
        }
      }
    ])
  ],
  declarations: [...CONTAINERS, ...COMPONENTS],
  providers: [...SERVICES, ...RESOLVERS]
})
export class AliasModule {}
