import assert from "assert";
import parse from "../src/index.js";
import { resetProducts, readFile, p } from "./utils.js";

suite("Raster layers");

before(resetProducts);
beforeEach(resetProducts);

test("Testing standard run", () => {
  const input = readFile(p("04/00-input.txt"));
  const expected = JSON.parse(readFile(p("04/00-expected.json")));

  const result = parse(input);

  assert.deepEqual(result, expected);
});

test("A raster without style has no default style", () => {
  const input = readFile(p("04/00-input.txt"));
  const layers = parse(input).mapViewer.layers;
  const raster = layers.find((l) => l.name === "hillshadeLayer");

  assert.equal(raster.raster, true);
  assert.equal(raster.defaultStyle, null);
  assert.deepEqual(raster.layers, ["r_hillshade"]);
});

test("A raster whose style does not exist is rejected", () => {
  const input = `CREATE GIS Rasters USING 4326;
USE GIS Rasters;
CREATE RASTER LAYER elevationLayer ( layerName "r_elevation", style missingStyle );`;

  assert.throws(() => parse(input), /missingStyle/);
});
