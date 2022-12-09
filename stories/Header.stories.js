import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};
LoggedIn.parameters = {
  pixelPerfect: {
    overlaySrc: "/pixel-perfect/header-logged-in.png",
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
LoggedOut.parameters = {
  pixelPerfect: {
    overlaySrc: "/pixel-perfect/header-logged-out.png",
  },
};
