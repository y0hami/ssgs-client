"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ColorRange {
    constructor(low, high, color) {
        this.low = low;
        this.high = high;
        this.color = color;
    }
    getLow() {
        return this.low;
    }
    getHigh() {
        return this.high;
    }
    getColor() {
        return this.color;
    }
}
exports.default = ColorRange;
