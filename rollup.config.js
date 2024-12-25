import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import url from "@rollup/plugin-url";
import external from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.mjs",
      format: "es",
    },
  ],
  plugins: [
    external(),
    url({
      include: ["**/*.mp3"],
      limit: 0
    }),
    resolve(),
    typescript({
      tsconfig: "tsconfig.json",
      declaration: true,
    }),
  ],
  external: ["react", "howler"],
};
