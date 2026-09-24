export default class TileLayer {
  constructor(id, label, url, options) {
    this.name = id;
    this.type = "tilelayer";
    this.label = label;
    this.url = url;
    // only when there are any, so a plain tile layer looks as it always did
    if (options && Object.keys(options).length > 0) this.options = options;
  }

  getId() {
    return this.name;
  }

  toString() {
    return `TileLayer(${this.name} as ${this.label}) with url ${this.url}`;
  }
}
