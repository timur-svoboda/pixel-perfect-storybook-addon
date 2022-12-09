import { addons, types } from "@storybook/addons";

import { ADDON_ID, TOGGLE_OVERLAY_TOOL_ID } from "../constants";
import { ToggleOverlayTool } from "../ToggleOverlayTool";

// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOGGLE_OVERLAY_TOOL_ID, {
    type: types.TOOL,
    title: "Toggle overlay",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^story$/)),
    render: ToggleOverlayTool,
  });
});
