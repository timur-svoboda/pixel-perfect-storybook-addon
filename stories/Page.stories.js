import React from 'react';

import { Page } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};
LoggedIn.parameters = {
  pixelPerfect: {
    overlaySrc: "/pixel-perfect/page-logged-in.png",
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
LoggedOut.parameters = {
  pixelPerfect: {
    overlaySrc: "/pixel-perfect/page-logged-out.png",
  },
};
