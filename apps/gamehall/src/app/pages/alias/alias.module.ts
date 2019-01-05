import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  containers,
  PlaygroundComponent,
  ResultsComponent,
  SettingsComponent
} from './containers';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SettingsComponent
      },
      {
        path: 'play',
        component: PlaygroundComponent
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
