"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// node
const url_1 = require("url");
// npm
const fs_extra_1 = require("fs-extra");
// self
const CorePropPaths_1 = __importDefault(require("./enums/CorePropPaths"));
const Utils_1 = require("./Utils");
class Endpoint {
    constructor(url) {
        if (url) {
            this.baseUrl = url;
        }
    }
    setBaseUrl(value) {
        this.baseUrl = value;
    }
    getBaseUrl() {
        return this.baseUrl;
    }
    setHost(value) {
        this.host = value;
    }
    getHost() {
        return this.host;
    }
    setPort(value) {
        this.port = value;
    }
    getPort() {
        return this.port;
    }
    discoverUrl() {
        return new Promise((resolve, reject) => {
            let path;
            if (process.platform === 'darwin') {
                path = Utils_1.parseEnvs(CorePropPaths_1.default.OSX);
            }
            else {
                path = Utils_1.parseEnvs(CorePropPaths_1.default.WINDOWS);
            }
            fs_extra_1.readJson(path)
                .then((coreProps) => {
                const url = new url_1.URL(`http://${coreProps.address}`);
                this.setHost(url.host);
                this.setPort(Number(url.port));
                this.setBaseUrl(url.toString());
                resolve();
            })
                .catch(reject);
        });
    }
}
exports.default = Endpoint;
