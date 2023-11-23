import { OverlayOptions } from "../types";

const rootSelector = "#storybook-root";
const overlayId = "pixel-perfect-overlay";

export const renderOverlay = ({
  src,
  opacity,
  colorInversion,
}: Required<OverlayOptions>) => {
  const root = document.querySelector(rootSelector);
  if (!root) return;

  const rootRect = root.getBoundingClientRect();

  const existingOverlay = root.querySelector(`#${overlayId}`) as HTMLElement;

  if (!existingOverlay) {
    const newOverlay = document.createElement("img");
    
    newOverlay.setAttribute("id", overlayId);
    newOverlay.setAttribute("alt", "pixel perfect overlaying image");
    newOverlay.style.position = "absolute";
    newOverlay.style.top = `${rootRect.top}px`;
    newOverlay.style.left = `${rootRect.left}px`;
    newOverlay.style.zIndex = "100000";
    newOverlay.style.pointerEvents = "none";
    
    // Customizations
    newOverlay.setAttribute("src", src);
    newOverlay.style.opacity = `${opacity}`;
    newOverlay.style.filter = colorInversion ? "invert(1)" : "none";

    root.appendChild(newOverlay);
  } else {
    if (existingOverlay.getAttribute("src") !== src) {
      existingOverlay.setAttribute("src", src);
    }

    if (Number(existingOverlay.style.opacity) !== opacity) {
      existingOverlay.style.opacity = `${opacity}`;
    }

    const isInverted = existingOverlay.style.filter === "invert(1)";
    if (isInverted !== colorInversion) {
      existingOverlay.style.filter = colorInversion ? "invert(1)" : "none";
    }
  }
}

export const removeOverlay =() => {
  const overlay = document.querySelector(`${rootSelector} #${overlayId}`);
  if (!overlay) return;
  overlay.remove();
}
