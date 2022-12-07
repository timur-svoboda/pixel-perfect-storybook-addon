import React from "react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    myAddonParameter: `
<MyComponent boolProp scalarProp={1} complexProp={{ foo: 1, bar: '2' }}>
  <SomeOtherComponent funcProp={(a) => a.id} />
</MyComponent>
`,
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
Primary.parameters = {
  pixelPerfect: {
    overlaySrc: "/pixel-perfect/button-primary.png",
  },
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};
Secondary.parameters = {
  pixelPerfect: {
    overlaySrc: "/pixel-perfect/button-secondary.png",
  },
}

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};
Large.parameters = {
  pixelPerfect: {
    overlaySrc: "/pixel-perfect/button-large.png",
  },
}

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
Small.parameters = {
  pixelPerfect: {
    overlaySrc: "/pixel-perfect/button-small.png",
  },
}
