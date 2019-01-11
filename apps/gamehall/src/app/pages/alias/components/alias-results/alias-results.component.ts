import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AliasCard } from '../../models/alias-card';

@Component({
  selector: 'gh-alias-results',
  templateUrl: './alias-results.component.html',
  styleUrls: ['./alias-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AliasResultsComponent {
  @Input() dataSource: AliasCard[] = [];
  displayedColumns = ['name', 'isGuessed'];
}
