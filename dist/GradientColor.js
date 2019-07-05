"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GradientColor {
    constructor(zero, hundred) {
        this.zero = zero;
        this.hundred = hundred;
    }
    getZero() {
        return this.zero;
    }
    getHundred() {
        return this.hundred;
    }
}
exports.default = GradientColor;
