import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';
import ttypescript from 'ttypescript';
// import scss from 'rollup-plugin-scss';

const packageJson = require("./package.json");

const anotherConf = {
  // moduleContext: true
  // preserveModules: true
}
const plugins  = [
  peerDepsExternal(),
  //resolve(),
  commonjs(),
  typescript({ typescript: ttypescript }),
  // postcss(),
  // postcss({
  //   modules: true,
  //   extensions: ['.sass', '.scss'],
  //   namedExports: true,
  //   use: ['sass'],
  //   extract: 'dist/my-custom-file-name.css'
  // }),
  copy({
    targets: [{
      src: './src/@assets/*', 
      dest: `${packageJson.outDir}/@assets`
    }]
  })
];

const input = ["./src/index-module.tsx",]

export default [
  { 
    ...anotherConf,
    input,
    output: [{
      format: "esm",
      sourcemap: false,
      dir: `${packageJson.outDir}`
    }],
    plugins,
  }
];