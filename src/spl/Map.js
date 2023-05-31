class TileLayer {
  constructor(id, label, url) {
    this.id = id;
    this.type = "TileLayer";
    this.label = label;
    this.url = url;
  }

  toString() {
    return `TileLayer(${this.id} as ${this.label}) with url ${this.url}`;
  }
}

class GeoJSONLayer {
  constructor(id, label, entityId, editable, style) {
    this.id = id;
    this.type = "GeoJSONLayer";
    this.label = label;
    this.entityId = entityId;
    this.editable = editable;
    this.style = style;
  }

  toString() {
    return `GeoJSONLayer(${this.id} as ${this.label}) for entity ${
      this.entityId
    } ${this.editable ? "(editable)" : ""}`;
  }
}

class WMSStyle {
  constructor(id, sldPath) {
    this.id = id;
    this.sldPath = sldPath;
  }
}

class WMSLayer {
  constructor(id, label) {
    this.id = id;
    this.type = "WMSLayer";
    this.label = label;
    this.sublayers = [];
  }

  addSubLayer(entityId, style) {
    this.sublayers.push({
      entityId,
      style,
    });
  }

  toString() {
    return `WMSLayer(${this.id} as ${this.label}) - ${
      this.sublayers.length
    } sublayers for entities ${this.sublayers
      .map((sl) => sl.entityId)
      .join(", ")}`;
  }
}

class Map {
  constructor(id, label, sortable = false) {
    this.id = id;
    this.label = label;
    this.sortable = sortable;
    this.layers = [];
  }

  addLayer(layer, isBaseLayer = false, hidden = false) {
    this.layers.push({ layer, isBaseLayer, hidden });
  }

  toString() {
    return (
      `\n${this.sortable ? "Sortable" : ""}Map(${this.id} as ${this.label}) - ${
        this.layers.length
      } layers:\n\t` +
      `${this.layers
        .map(
          (l) =>
            (l.isBaseLayer ? "BL-" : "") +
            (l.hidden ? "H-" : "") +
            l.layer.toString()
        )
        .join("\n\t")}`
    );
  }
}

export { GeoJSONLayer, TileLayer, WMSStyle, WMSLayer, Map };
