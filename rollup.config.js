import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

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
    resolve(),
    typescript({
      tsconfig: "tsconfig.json",
      declaration: true,
    }),
  ],
  external: ["react", "howler"],
};
