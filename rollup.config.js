import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import typescript from 'rollup-plugin-typescript';

import pkg from "./package.json";

export default {
    input: "src/components/index.js",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: false
        },
        {
            file: pkg.module,
            format: "es",
            sourcemap: false
        }
    ],
    plugins: [
        external(),
        babel(),
        resolve(),
        commonjs(),
        typescript()
    ],
    external: ['@progress/kendo-drawing', 'react-is'] // <-- suppresses the warning
};
