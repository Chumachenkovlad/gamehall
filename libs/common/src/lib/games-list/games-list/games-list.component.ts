import { ChangeDetectionStrategy, Component } from '@angular/core';

import { games } from '../games';

@Component({
  selector: 'gh-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesListComponent {
  public readonly games = games;
}
