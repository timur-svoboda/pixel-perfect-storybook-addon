import { addons, types } from "@storybook/addons";
import { ADDON_ID, TOGGLE_OVERLAY_TOOL_ID, PANEL_ID } from "../constants";
import { ToggleOverlayTool } from "../ToggleOverlayTool";
import { Panel } from "../Panel";

// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOGGLE_OVERLAY_TOOL_ID, {
    type: types.TOOL,
    title: "Toggle overlay",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^story$/)),
    render: ToggleOverlayTool,
  });

  // Register the panel
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Pixel Perfect",
    match: ({ viewMode }) => viewMode === "story",
    render: Panel,
  });
});
