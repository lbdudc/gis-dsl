import assert from "assert";
import parse from "../src/index.js";
import { resetProducts, readFile, p } from "./utils.js";

suite("Tile layer options");

before(resetProducts);
beforeEach(resetProducts);

test("Testing standard run", () => {
  const input = readFile(p("05/00-input.txt"));
  const expected = JSON.parse(readFile(p("05/00-expected.json")));

  const result = parse(input);

  assert.deepEqual(result, expected);
});

test("A tile layer without options has no options key", () => {
  const input = readFile(p("05/00-input.txt"));
  const layers = parse(input).mapViewer.layers;

  assert.equal("options" in layers.find((l) => l.name === "base"), false);
});

test("An unknown option is rejected", () => {
  const input = `CREATE GIS Tiles USING 4326;
USE GIS Tiles;
CREATE TILE LAYER topoLayer ( url "https://x/{z}/{x}/{y}.png", "onclick" "alert(1)" );`;

  assert.throws(() => parse(input), /Unknown tile layer option "onclick"/);
});
