# GIS DSL

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2019.0.0-brightgreen.svg)
![npm version](https://badge.fury.io/js/gis-dsl.svg)

It parses a DSL instance and generates the spec for the web-based GIS SPL.

## Installation

```bash
npm install @lbdudc/gp-gis-dsl
```

## Usage

```js
import gisdslParser from "@lbdudc/gp-gis-dsl";

const spec = gisdslParser(inputString);
```

The DSL instance must finish with a `GENERATE GIS` sentence in order to work. See examples within the tests files.

## Raster and tile layers

A raster (GeoTIFF) published by GeoServer has no entity behind it, so its
GeoServer layer name is given explicitly. The optional style must have been
created before with `CREATE WMS STYLE`; without one GeoServer's default raster
style is used:

```
CREATE RASTER LAYER elevationLayer AS "Elevation" (
  layerName "r_elevation",
  style elevationLayerStyle
);
```

It becomes a `wms` layer in the spec with `raster: true`.

A tile layer takes optional Leaflet options as quoted `"key" "value"` pairs
(`attribution`, `minZoom`, `maxZoom`, `minNativeZoom`, `maxNativeZoom`,
`subdomains`, `tms`; any other key is an error):

```
CREATE TILE LAYER topoLayer AS "OpenTopoMap" (
  url "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
  "attribution" "Map data: &copy; OpenStreetMap contributors",
  "maxNativeZoom" "17"
);
```

Note that `RASTER` is now a keyword, so it can't be used as an identifier.

## Pre-requisites

- Have installed in your machine:
  - [Node.js](https://nodejs.org/en/download/)

## Author

Alejandro Cortiñas
Email: <alejandro.cortinas@udc.es>

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
