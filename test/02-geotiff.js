import assert from "assert";
import parse from "../src/index.js";
import { resetProducts, readFile, p } from "./utils.js";

suite("Geotiff");

before(resetProducts);
beforeEach(resetProducts);

test("Testing standard run", () => {
  const input = readFile(p("02/00-input.txt"));
  const expected = JSON.parse(readFile(p("02/00-expected.json")));

  const result = parse(input);

  assert.deepEqual(result, expected);
});
