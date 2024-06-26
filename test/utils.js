import store from "../src/store.js";
import stripBom from "strip-bom";
import fs from "fs";

export function readFile(filePath) {
  return stripBom(fs.readFileSync(filePath, "utf8"));
}

export function p(filePath) {
  return `test/files/${filePath}`;
}

export function resetProducts() {
  store.reset();
}
