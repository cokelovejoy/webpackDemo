/**
 * webpack 打包入口文件
 */
// 依赖文件
const json =require("./index.json") // Common JS
import { add } from "./other.js"    // ES Module

console.log(json, add(2,3))