import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AliasGameStatuses } from '../../enums/alias-game-statuses';
import { AliasCard } from '../../models/alias-card';
import { AliasSettings } from '../../models/alias-settings';

@Component({
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaygroundComponent {
  readonly statuses = AliasGameStatuses;
  status = AliasGameStatuses.READY;
  selectedCardIndex = 0;
  cards: AliasCard[] = [];
  settings: AliasSettings;
  guessedCount = 0;
  secondsLeft: number;
  timeout: any;

  get selectedCard() {
    return this.cards[this.selectedCardIndex];
  }

  constructor(private readonly route: ActivatedRoute) {
    this.cards = this.route.snapshot.data.cards as AliasCard[];
  }

  guessCard(isGuessed: boolean) {
    this.selectedCard.isGuessed = isGuessed;

    if (this.selectedCardIndex < this.cards.length - 1) {
      this.selectedCardIndex++;
    } else {
      this.finishGame();
    }
  }

  initGame() {
    this.status = AliasGameStatuses.PLAYING;
    this.timeout = setTimeout(() => {
      if (--this.secondsLeft <= 0) {
        this.finishGame();
      }
    }, 1000);
  }

  finishGame() {
    clearInterval(this.timeout);
    this.status = AliasGameStatuses.FINISHED;
  }
}
