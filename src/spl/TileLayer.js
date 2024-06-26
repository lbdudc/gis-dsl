export default class TileLayer {
  constructor(id, label, url) {
    this.name = id;
    this.type = "tilelayer";
    this.label = label;
    this.url = url;
  }

  getId() {
    return this.name;
  }

  toString() {
    return `TileLayer(${this.name} as ${this.label}) with url ${this.url}`;
  }
}
