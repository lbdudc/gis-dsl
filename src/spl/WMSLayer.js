export default class WMSLayer {
  constructor(id, label) {
    this.name = id;
    this.type = "wms";
    this.label = label;
    this.list = null;
    this.layers = [];
    this.availableStyles = [];
    this.defaultStyles = [];
  }

  getId() {
    return this.name;
  }

  addSubLayer(entityId, style) {
    this.list = entityId;
    this.layers.push(entityId);
    this.defaultStyles = style;
    this.availableStyles.push(style);
  }

  toString() {
    return `WMSLayer(${this.name} as ${this.label}) - ${
      this.layers.length
    } sublayers for entities ${this.layers
      .map((sl) => sl.entityId)
      .join(", ")}`;
  }
}
