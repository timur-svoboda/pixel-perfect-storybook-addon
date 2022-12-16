import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { SettingsBackupRestore } from '@mui/icons-material';
import { themes } from "@storybook/theming";

interface ResetButtonProps {
  title: string;
  canReset: boolean;
  onClick: () => void;
}

export const ResetButton = (props: ResetButtonProps) => {
  return (
    <Tooltip title={props.title}>
      <IconButton onClick={props.onClick}>
        <SettingsBackupRestore
          sx={{
            color: props.canReset ? themes.normal.colorSecondary : themes.normal.base,
          }}
        />
      </IconButton>
    </Tooltip>
  );
};
