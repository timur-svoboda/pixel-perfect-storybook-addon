import React, { useMemo, useEffect, useCallback } from "react";
import { Checkbox, Slider } from "@mui/material";
import { useAddonState, useStorybookState, useParameter, useChannel } from "@storybook/api";
import { themes } from "@storybook/theming";
import ControlTable from './ui/control-table/control-table';
import { DEFAULT_DYNAMIC_OVERLAY_OPTIONS, EVENTS, DYNAMIC_OVERLAYS_OPTIONS_STATE, PARAM_KEY } from "../../constants";
import { Parameter, DynamicOverlayOptions } from "../../types";

const PanelContent = () => {
  const parameter = useParameter<Parameter>(PARAM_KEY);
  const { storyId } = useStorybookState();
  const emit = useChannel({});
  const [
    dynamicOverlaysOptions,
    setDynamicOverlaysOptions
  ] = useAddonState<Record<string, DynamicOverlayOptions>>(DYNAMIC_OVERLAYS_OPTIONS_STATE, {});

  const currentDynamicOverlayOptions = useMemo(() => {
    return dynamicOverlaysOptions[storyId] ?? {};
  }, [dynamicOverlaysOptions, storyId]);

  useEffect(() => {
    emit(EVENTS.DYNAMIC_OVERLAY_OPTIONS_CHANGED, currentDynamicOverlayOptions);
  }, [currentDynamicOverlayOptions]);

  const updateOverlayOptions = useCallback((options: DynamicOverlayOptions) => {
    setDynamicOverlaysOptions(
      Object.assign(
        {},
        dynamicOverlaysOptions,
        {
          [storyId]: {
            ...currentDynamicOverlayOptions,
            ...options
          },
        },
      )
    );
  }, [dynamicOverlaysOptions, storyId, currentDynamicOverlayOptions]);

  return (
    <div>
      <ControlTable
        rows={[
          {
            name: "Opacity",
            control: <Slider
              value={
                currentDynamicOverlayOptions?.opacity
                ?? parameter?.overlay?.opacity
                ?? DEFAULT_DYNAMIC_OVERLAY_OPTIONS.opacity
              }
              min={0}
              max={1}
              step={0.05}
              onChange={(_, value) => updateOverlayOptions({ opacity: value as number })}
              aria-label="Opacity"
              valueLabelDisplay="auto"
              sx={{
                color: themes.normal.colorSecondary,
              }}
            />,
          },
          {
            name: "Enable color inversion",
            control: <Checkbox
              checked={
                currentDynamicOverlayOptions.colorInversion
                ?? parameter?.overlay?.colorInversion
                ?? DEFAULT_DYNAMIC_OVERLAY_OPTIONS.colorInversion
              }
              onChange={(_, value) => updateOverlayOptions({ colorInversion: value })}
              aria-label="Toggle color inversion"
              sx={{
                color: themes.normal.colorSecondary,
              }}
            />,
          },
        ]}
      />
    </div>
  );
};

export default PanelContent;
