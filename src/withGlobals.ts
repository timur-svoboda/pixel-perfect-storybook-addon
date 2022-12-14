import type { DecoratorFunction } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";
import { renderOverlay, removeOverlay } from './utils/overlay';

export const withGlobals: DecoratorFunction = (StoryFn, context) => {
  const [{ pixelPerfect }] = useGlobals();

  useEffect(() => {
    if (
      context.parameters?.pixelPerfect?.overlaySrc
      && pixelPerfect?.active
    ) {
      renderOverlay({
        src: context.parameters.pixelPerfect.overlaySrc
      });

      return () => removeOverlay();
    }
  }, [context.parameters?.pixelPerfect?.overlaySrc, pixelPerfect?.active]);

  return StoryFn();
};
