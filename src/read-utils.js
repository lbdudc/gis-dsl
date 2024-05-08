import { readFileSync } from "fs";
import path from "path";

export const readFeatSpecFile = () => {
  const jsonPath =
    process.cwd() + path.sep + "src" + path.sep + "features.json";
  return JSON.parse(readFileSync(jsonPath, "utf8"));
};
