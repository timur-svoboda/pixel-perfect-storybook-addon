import React from "react";
import { AddonPanel } from "@storybook/components";
import PanelContent from "./components/panel-content/panel-content";

interface PanelProps {
  active: boolean;
}

export const Panel = (props: PanelProps) => {
  return (
    <AddonPanel {...props}>
      <PanelContent />
    </AddonPanel>
  );
};