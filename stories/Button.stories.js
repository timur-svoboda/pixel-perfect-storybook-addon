import React from "react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
Primary.parameters = {
  pixelPerfect: {
    overlay: {
      src: "/pixel-perfect/button-primary.png",
    },
  },
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};
Secondary.parameters = {
  pixelPerfect: {
    overlay: {
      src: "/pixel-perfect/button-secondary.png",
    },
  },
}

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};
Large.parameters = {
  pixelPerfect: {
    overlay: {
      src: "/pixel-perfect/button-large.png"
    },
  },
}

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
Small.parameters = {
  pixelPerfect: {
    overlay: {
      src: "/pixel-perfect/button-small.png"
    },
  },
}
