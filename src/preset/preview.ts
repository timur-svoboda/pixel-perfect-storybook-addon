import { withOverlay } from "../withOverlay";
import type { Renderer, ProjectAnnotations } from '@storybook/types';

const preview: ProjectAnnotations<Renderer> = {
  decorators: [withOverlay],
  globals: {
    "pixelPerfect": false,
  },
};

export default preview;