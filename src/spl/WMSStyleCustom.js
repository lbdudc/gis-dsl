export default class WMSStyleCustom {
  constructor(
    id,
    geometryType,
    fillColor,
    strokeColor,
    fillOpacity,
    strokeOpacity,
  ) {
    this.name = id;
    this.type = "WMSLayerStyle";
    this.geometryType = geometryType;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.fillOpacity = fillOpacity;
    this.strokeOpacity = strokeOpacity;
  }

  getId() {
    return this.name;
  }
}
