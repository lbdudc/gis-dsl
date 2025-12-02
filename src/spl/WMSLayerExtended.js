import WMSLayer from "./WMSLayer.js";

export default class WMSLayerExtended extends WMSLayer {
  constructor({
    id,
    label,
    serviceUrl,
    layerName,
    format,
    crs,
    bbox,
    styles = [],
    queryable = false,
    attribution = null,
    version,
  }) {
    super(id, label);

    this.type = "wms";

    this.serviceUrl = serviceUrl;
    this.layerName = layerName;
    this.format = format;
    this.crs = crs;
    this.bbox = bbox;
    this.version = version;

    this.styles = styles;
    this.defaultStyles = styles?.[0] || null;
    this.queryable = queryable;
    this.attribution = attribution;

    this.visible = true;
    this.opacity = 1.0;

    this.layers = [layerName];
    this.availableStyles = styles;
  }
}
