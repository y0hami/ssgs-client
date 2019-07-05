"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseEnvs(str) {
    return str
        .replace(/%([^%]+)%/g, (substr, match) => process.env[match] || '');
}
exports.parseEnvs = parseEnvs;
const con = console;
function error(...args) {
    con.error.apply(null, args);
}
exports.error = error;
function log(...args) {
    con.log.apply(null, args);
}
exports.log = log;
function debug(...args) {
    const { NODE_ENV } = process.env;
    if (NODE_ENV === 'development') {
        con.debug.apply(null, args);
    }
}
exports.debug = debug;
