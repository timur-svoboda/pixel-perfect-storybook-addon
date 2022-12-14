import React, { useMemo, useEffect, useCallback } from "react";
import ControlTable from './ui/control-table/control-table';
import Slider from '@mui/material/Slider';
import { useAddonState, useStorybookState, useParameter, useChannel } from "@storybook/api";
import { DEFAULT_OVERLAY_OPTIONS, EVENTS, DYNAMIC_OVERLAYS_OPTIONS_STATE, PARAM_KEY } from "../../constants";
import { Parameter, DynamicOverlayOptions } from "../../types";
import { themes } from "@storybook/theming";

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
                ?? DEFAULT_OVERLAY_OPTIONS.opacity
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
        ]}
      />
    </div>
  );
};

export default PanelContent;
