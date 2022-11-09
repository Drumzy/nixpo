import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert {type: "json"};
import esbuild from "rollup-plugin-esbuild";
import nodeExternals from "rollup-plugin-node-externals";
import path from "path";
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      nodeExternals(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      esbuild({
        minify: true,
        sourceMap: false,
        tsconfig: path.resolve(process.cwd(), 'tsconfig.json')
      }),
    ],
    external:["react"],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];