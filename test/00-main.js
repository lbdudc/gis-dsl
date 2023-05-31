import assert from "assert";
import parse from "../src/index.js";
import stripBom from "strip-bom";
import fs from "fs";

function readFile(filePath) {
  return stripBom(fs.readFileSync(filePath, "utf8"));
}

function p(filePath) {
  return `test/files/${filePath}`;
}

export const getTestPath = (aPath) => `test/files/${aPath}`;

suite("Main");

test("Testing standard run", () => {
  const input = readFile(p("00-input.txt"));
  const expected = JSON.parse(readFile(p("00-expected.json")));

  const result = parse(input);

  assert.deepEqual(result, expected);
});
