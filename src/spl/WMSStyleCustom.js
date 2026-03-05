export default class WMSStyleCustom {
  constructor(
    id,
    geometryType,
    fillColor,
    strokeColor,
    fillOpacity,
    strokeOpacity,
    strokeWidth,
  ) {
    this.name = id;
    this.type = "WMSLayerStyle";
    this.geometryType = geometryType;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.fillOpacity = fillOpacity;
    this.strokeOpacity = strokeOpacity;
    this.strokeWidth = strokeWidth;
  }

  getId() {
    return this.name;
  }
}
