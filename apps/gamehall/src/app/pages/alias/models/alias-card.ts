import { Card } from '@gh/api';

export interface AliasCard extends Card {
  isGuessed: boolean | undefined;
}
