import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CoreLayoutModule } from '@gh/common';
import { CoreModule } from '@gh/core';
import { NxModule } from '@nrwl/nx';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: './pages/home/home.module#HomeModule'
        },
        {
          path: 'games',
          loadChildren: './pages/games/games.module#GamesModule'
        },
        {
          path: '**',
          loadChildren: './pages/not-found/not-found.module#NotFoundModule'
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    BrowserAnimationsModule,
    CoreModule.forRoot(environment),
    CoreLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
