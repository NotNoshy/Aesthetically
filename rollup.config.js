import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
  input: "aesthetically.js",
  output: {
    file: "dist/aesthetically.js",
    format: "umd",
    name: "aesthetically",
    compact: true,
  },
  plugins: [
    terser({ "mangle": false, "keep_fnames": true }),
    babel({
      exclude: "node_modules/**",
    }),
  ],
};
