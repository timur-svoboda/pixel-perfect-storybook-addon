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
    overlay: {
      src: "/pixel-perfect/header-logged-in.png",
    },
  },
};

export const LoggedOut = (args) => (
  <div style={{ paddingLeft: 20 }}>
    <Header {...args} />
  </div>
);
LoggedOut.args = {};
LoggedOut.parameters = {
  pixelPerfect: {
    overlay: {
      src: "/pixel-perfect/header-logged-out.png",
      colorInversion: false,
    },
  },
};
