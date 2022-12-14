import { DEFAULT_OVERLAY_OPTIONS } from "../constants";
import { OverlayOptions } from "../types";

const rootSelector = "#root";
const overlayId = "pixel-perfect-overlay";

export const renderOverlay = ({ src, opacity }: OverlayOptions) => {
  const root = document.querySelector(rootSelector);
  if (!root) return;

  const rootRect = root.getBoundingClientRect();

  const existingOverlay = root.querySelector(`#${overlayId}`) as HTMLElement;

  if (!existingOverlay) {
    const newOverlay = document.createElement("img");
    
    newOverlay.setAttribute("id", overlayId);
    newOverlay.setAttribute("src", src);
    newOverlay.setAttribute("alt", "pixel perfect overlaying image");

    newOverlay.style.position = "absolute";
    newOverlay.style.top = `${rootRect.top}px`;
    newOverlay.style.left = `${rootRect.left}px`;
    newOverlay.style.zIndex = "100000";

    newOverlay.style.opacity = opacity !== undefined
      ? `${opacity}`
      : `${DEFAULT_OVERLAY_OPTIONS.opacity}`;

      newOverlay.style.filter = "invert(1)";
      newOverlay.style.pointerEvents = "none";

    root.appendChild(newOverlay);
  } else {
    if (existingOverlay.getAttribute("src") !== src) {
      existingOverlay.setAttribute("src", src);
    }

    if (Number(existingOverlay.style.opacity) !== opacity) {
      existingOverlay.style.opacity = `${opacity}`;
    }
  }
}

export const removeOverlay =() => {
  const overlay = document.querySelector(`${rootSelector} #${overlayId}`);
  if (!overlay) return;
  overlay.remove();
}
