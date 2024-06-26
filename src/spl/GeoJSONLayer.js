export default class GeoJSONLayer {
  constructor(id, label, entityId, editable, style) {
    this.name = id;
    this.type = "geojson";
    this.label = label;
    this.entityName = entityId;
    this.editable = editable;
    this.defaultStyle = style;
    this.availableStyles = [style];
  }

  getId() {
    return this.name;
  }

  toString() {
    return `GeoJSONLayer(${this.name} as ${this.label}) for entity ${
      this.entityName
    } ${this.editable ? "(editable)" : ""}`;
  }
}
