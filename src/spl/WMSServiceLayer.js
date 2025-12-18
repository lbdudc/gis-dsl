import WMSLayer from "./WMSLayer.js";

export default class WMSServiceLayer extends WMSLayer {
  constructor({
    id,
    label,
    url,
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
    this.external = true;

    this.url = url;
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
