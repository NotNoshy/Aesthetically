import babel from "rollup-plugin-babel";
import terser from "@rollup/plugin-terser";

export default {
  input: "aesthetically.js",
  output: [
    {
      file: "dist/aesthetically.js",
      format: "esm",
      name: "Aesthetically",
      compact: true,
    },
    {
      file: "dist/aesthetically.umd.js",
      format: "umd",
      name: "Aesthetically",
      compact: true,
    },
  ],
  plugins: [
    terser({ "mangle": false, "keep_fnames": true }),
    babel({
      exclude: "node_modules/**",
    }),
  ],
};
