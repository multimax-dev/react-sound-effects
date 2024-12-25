import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import copy from "rollup-plugin-copy";
import url from "@rollup/plugin-url";

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
    url({
      include: ["**/*.mp3"],
      limit: 0
    }),
    resolve(),
    typescript({
      tsconfig: "tsconfig.json",
      declaration: true,
    }),
    copy({
      targets: [
        { src: "src/sounds/assets/*.mp3", dest: "dist/sounds/assets" }
      ]
    })
  ],
  external: ["react", "howler"],
};
