import WMSLayer from "./WMSLayer.js";

/**
 * A raster (GeoTIFF) published by GeoServer. It travels as a "wms" layer with
 * the raster flag, so everything that already consumes WMS layers keeps working;
 * the GeoServer layer name is given explicitly instead of being derived from an
 * entity, because a raster has no entity behind it.
 */
export default class RasterLayer extends WMSLayer {
  constructor(id, label, layerName, style) {
    super(id, label);

    this.raster = true;
    this.layers = [layerName];
    if (style) {
      this.availableStyles = [style];
      this.defaultStyle = style;
    } else {
      // no SLD: GeoServer's default raster style applies
      this.defaultStyle = null;
    }
  }

  toString() {
    return `RasterLayer(${this.name} as ${this.label}) with layer ${this.layers[0]}`;
  }
}
