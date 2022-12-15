const rootSelector = "#root";
const overlayId = "pixel-perfect-overlay";

interface RenderOverlayArgs {
  src: string;
}

export const renderOverlay = ({ src }: RenderOverlayArgs) => {
  const root = document.querySelector(rootSelector);
  if (!root) return;

  const rootRect = root.getBoundingClientRect();

  const overlay = document.createElement("img");

  overlay.setAttribute("id", overlayId);
  overlay.setAttribute("src", src);
  overlay.setAttribute("alt", "pixel perfect overlaying image");

  overlay.style.position = "absolute";
  overlay.style.top = `${rootRect.top}px`;
  overlay.style.left = `${rootRect.left}px`;
  overlay.style.zIndex = "100000";
  overlay.style.opacity = "0.5";
  overlay.style.filter = "invert(1)";
  overlay.style.pointerEvents = "none";

  root.appendChild(overlay);
}

export const removeOverlay =() => {
  const overlay = document.querySelector(`${rootSelector} #${overlayId}`);
  if (!overlay) return;
  overlay.remove();
}
