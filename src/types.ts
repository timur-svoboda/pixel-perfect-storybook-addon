export type OverlayOptions = {
  src: string;
  opacity?: number;
};

export type Parameter = {
  overlay: OverlayOptions;
}

export type DynamicOverlayOptions = Omit<OverlayOptions, "src">;
