import assert from "assert";
import parse from "../src/index.js";
import store from "../src/store.js";
import stripBom from "strip-bom";
import fs from "fs";

function readFile(filePath) {
  return stripBom(fs.readFileSync(filePath, "utf8"));
}

function p(filePath) {
  return `test/files/${filePath}`;
}

function resetProducts() {
  store.reset();
}

suite("Main");

beforeEach(resetProducts);

test("Testing standard run", () => {
  const input = readFile(p("00-input.txt"));
  const expected = JSON.parse(readFile(p("00-expected.json")));

  const result = parse(input);

  assert.deepEqual(result, expected);
});

test("Wrong entity in WMS layer", () => {
  const input = readFile(p("01-invalid-input.txt"));
  assert.throws(() => {
    parse(input);
  }, /ERROR: entity Str2eet required by layer cityLayer does not exists!!/);
});

test("Testing more complex run", () => {
  const input = readFile(p("02-input.txt"));
  const expected = JSON.parse(readFile(p("02-expected.json")));

  const result = parse(input);

  assert.deepEqual(result, expected);
});
