import { DynamicOverlayOptions } from "./types";

export const ADDON_ID = "pixel-perfect-storybook-addon";
export const TOGGLE_OVERLAY_TOOL_ID = `${ADDON_ID}/toggle-overlay-tool`;
export const PANEL_ID = `${ADDON_ID}/panel`;
export const PARAM_KEY = `pixelPerfect`;

export const DYNAMIC_OVERLAYS_OPTIONS_STATE = `${ADDON_ID}/dynamic-overlays-options-state`;

export const DEFAULT_DYNAMIC_OVERLAY_OPTIONS: DynamicOverlayOptions = {
  opacity: 0.5,
  colorInversion: true,
};

export const EVENTS = {
  DYNAMIC_OVERLAY_OPTIONS_CHANGED: `${ADDON_ID}/dynamic-overlay-options-changed`
};
