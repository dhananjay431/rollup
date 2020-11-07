import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from "rollup-plugin-uglify";

export default {
    input: './src/index.ts',
    plugins: [
        typescript({ module: 'CommonJS' }),
        commonjs({ extensions: ['.js', '.ts'] }), // the ".ts" extension is required
        // uglify()
    ]
}