import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { AliasCard } from '../../models/alias-card';

@Component({
  selector: 'gh-alias-card',
  templateUrl: './alias-card.component.html',
  styleUrls: ['./alias-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AliasCardComponent {
  @Input() card: AliasCard;
  @Output() cardGuessed = new EventEmitter<boolean>(true);
}
