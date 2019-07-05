"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// self
const DeviceType_1 = __importDefault(require("./enums/DeviceType"));
const MouseZone_1 = __importDefault(require("./enums/MouseZone"));
const Color_1 = __importDefault(require("./Color"));
const VisualizationMode_1 = __importDefault(require("./enums/VisualizationMode"));
class GameEventHandler {
    constructor(deviceType = DeviceType_1.default.RGB_PER_KEY_ZONES, zone = MouseZone_1.default.LOGO, color = new Color_1.default(0, 0, 255)) {
        this.customZoneKeys = null;
        this.mode = VisualizationMode_1.default.COLOR;
        this.rate = null;
        this.deviceType = deviceType;
        this.zone = zone;
        this.color = color;
    }
    getDevice() {
        return this.deviceType;
    }
    getZone() {
        return this.zone;
    }
    getColor() {
        return this.color;
    }
    setCustomZoneKeys(value) {
        this.customZoneKeys = value;
    }
    addCustomZoneKey(value) {
        if (!Array.isArray(this.customZoneKeys)) {
            this.customZoneKeys = [];
        }
        this.customZoneKeys.push(value);
    }
    getCustomZoneKeys() {
        return this.customZoneKeys;
    }
    setMode(value) {
        this.mode = value;
    }
    getMode() {
        return this.mode;
    }
    setRate(value) {
        this.rate = value;
    }
    getRate() {
        return this.rate;
    }
}
exports.default = GameEventHandler;
