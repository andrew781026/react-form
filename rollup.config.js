import babel from "rollup-plugin-babel";
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
        babel(),
        typescript()
    ],
    external: [ // <-- suppresses the warning
        'lodash',
        '@progress/kendo-data-query',
        '@progress/kendo-drawing',
        '@progress/kendo-react-dateinputs',
        '@progress/kendo-react-dropdowns',
        '@progress/kendo-drawing',
        '@progress/kendo-react-grid',
        '@progress/kendo-react-inputs',
        '@progress/kendo-react-intl',
        '@progress/kendo-theme-default'
    ]
};

