import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import url from "@rollup/plugin-url";
import external from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "es",
      preserveModules: true, // Preserve module structure for code splitting
    },
  ],
  plugins: [
    external(),
    url({
      fileName: `[name][extname]`,
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
