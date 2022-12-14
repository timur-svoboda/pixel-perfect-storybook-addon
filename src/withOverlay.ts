import type { DecoratorFunction } from "@storybook/addons";
import { useEffect } from "@storybook/addons";
import { renderOverlay, removeOverlay } from './utils/overlay';

export const withOverlay: DecoratorFunction = (StoryFn, context) => {
  const global = context.globals.pixelPerfect;
  const parameter = context.parameters.pixelPerfect;

  useEffect(() => {
    if (global?.active && parameter) {
      renderOverlay(parameter.overlay);

      return () => removeOverlay();
    }
  }, [global?.active, parameter]);

  return StoryFn();
};
