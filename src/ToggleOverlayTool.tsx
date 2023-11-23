import React, { useCallback } from "react";
import { useGlobals } from "@storybook/manager-api";
import { Icons, IconButton } from "@storybook/components";
import { TOGGLE_OVERLAY_TOOL_ID } from "./constants";

export const ToggleOverlayTool = () => {
  const [{ pixelPerfect }, updateGlobals] = useGlobals();

  const toggleOverlay = useCallback(
    () =>
      updateGlobals({
        pixelPerfect: {
          active: !pixelPerfect?.active
        }
      }),
    [pixelPerfect?.active]
  );

  return (
    // @ts-ignore
    <IconButton
      key={TOGGLE_OVERLAY_TOOL_ID}
      active={pixelPerfect?.active}
      title="Toggle the component overlaying image"
      onClick={toggleOverlay}
    >
      <Icons icon={pixelPerfect?.active ? 'eye' : 'eyeclose' } />
    </IconButton>
  );
};
