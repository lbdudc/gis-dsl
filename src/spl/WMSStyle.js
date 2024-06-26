export default class WMSStyle {
  constructor(id, sldPath) {
    this.name = id;
    this.type = "WMSLayerSLDStyle";
    this.cached = true;
    this.sldPath = sldPath;
    this.sld = `@include:${sldPath}`;
  }

  getId() {
    return this.name;
  }
}
