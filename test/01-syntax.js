import assert from "assert";
import parse from "../src/index.js";
import { resetProducts, readFile, p } from "./utils.js";

suite("Syntax");

before(resetProducts);
beforeEach(resetProducts);

test("Testing extra properties", () => {
  const input = readFile(p("01/00-input-with-extra-properties.txt"));
  const expected = JSON.parse(
    readFile(p("01/00-expected-with-extra-properties.json")),
  );

  const result = parse(input);

  assert.deepEqual(result, expected);
});

// Narrow assertion (not a full-spec fixture diff like the tests above) so this
// isn't coupled to unrelated drift in the default feature list — only the
// entity/property shape the `AS "text"` clause actually affects is asserted.
test("Testing property with an AS-text label", () => {
  const input = readFile(p("01/01-input-with-property-label.txt"));

  const result = parse(input);
  const properties = result.data.dataModel.entities[0].properties;

  assert.deepEqual(
    properties.map((p) => [p.name, p.label]),
    [
      ["id", undefined],
      ["nombre", "Nombre del municipio"],
      ["poblacion", "Población"],
      ["codigo", undefined],
    ],
  );
  // REQUIRED and AS-text combine on the same property without one clobbering
  // the other.
  assert.strictEqual(properties[2].required, true);
});
