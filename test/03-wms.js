import assert from "assert";
import parse from "../src/index.js";
import { resetProducts, readFile, p } from "./utils.js";

suite("Wms");

before(resetProducts);
beforeEach(resetProducts);

test("Testing standard run", () => {
  const input = readFile(p("03/03-input.txt"));
  const expected = JSON.parse(readFile(p("03/03-expected.json")));

  const result = parse(input);

  assert.deepEqual(result, expected);
});
