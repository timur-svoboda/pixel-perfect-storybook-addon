# Storybook Addon Pixel Perfect

Build pixel perfect components by adding an overlaying image of component in Storybook's preview iframe.

[Live example](https://639313fc4b277f76b849dc95-mxzmajchdy.chromatic.com/). Try to toggle eye button in the Storybook toolbar and "Pixel Perfect" panel.

## Features

- Overlay rendering.
- Overlay visibility toggling.
- Overlay opacity customization.
- Overlay color inversion toggling.
- Overlay options resetting.

## Usage

In parameters of your stories:

```javascript
parameters: {
    pixelPerfect: {
        overlay: {
            src: "path/to/overlay",
            opacity: 0.5,
            colorInversion: true,
        },
    },
},
```

### Options

| Name                     | Type    | Default | Description                                                                                                                         |
|--------------------------|---------|---------|-------------------------------------------------------------------------------------------------------------------------------------|
| `overlay.src`            | string  |         | Path to the overlay image. This can be any string that the `src` attribute of the HTML `img` element accepts.                       |
| `overlay.opacity`        | number  | 0.5     | Opacity of the overlay.                                                                                                             |
| `overlay.colorInversion` | boolean | true    | If `true` colors of the overlay are inverted. The effect is the same as using the CSS `filter` property with the value `invert(1)`. |
