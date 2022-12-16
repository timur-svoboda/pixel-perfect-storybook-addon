export type OverlayOptions = {
  src: string;
  opacity?: number;
  colorInversion?: boolean;
};

export type Parameter = {
  overlay: OverlayOptions;
}

export type DynamicOverlayOptions = Omit<OverlayOptions, "src">;
