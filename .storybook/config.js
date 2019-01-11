import { configure } from '@storybook/angular';

// automatically import all files ending in *.stories.ts

// todo change config according to projects
const req = require.context('../src/stories', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
