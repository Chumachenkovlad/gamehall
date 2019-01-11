import { SharedModule } from '@gh/common';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { AliasCardComponent } from 'apps/gamehall/src/app/pages/alias/components/alias-card/alias-card.component';

storiesOf('AliasCard', module)
  .addDecorator(
    moduleMetadata({
      imports: [SharedModule]
    })
  )
  .add(
    'with content',
    withNotes({
      text: `
        Alias card component
        input AliasCard
        output cardGuessed
    `
    })(() => ({
      component: AliasCardComponent,
      props: {
        cardGuessed: action('clicked'),
        card: {
          name: 'Test Name'
        }
      }
    }))
  );
