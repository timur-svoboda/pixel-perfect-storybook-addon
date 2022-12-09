import type { DecoratorFunction } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";
import renderOverlay from './utils/render-overlay';

export const withGlobals: DecoratorFunction = (StoryFn, context) => {
  const [{ pixelPerfect }] = useGlobals();

  useEffect(() => {
    if (
      context.parameters?.pixelPerfect?.overlaySrc
      && pixelPerfect?.active
    ) {
      const overlay = renderOverlay({
        src: context.parameters.pixelPerfect.overlaySrc
      });

      return () => {
        overlay.remove();
      }
    }
  }, [context.parameters?.pixelPerfect?.overlaySrc, pixelPerfect?.active]);

  return StoryFn();
};
