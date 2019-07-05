"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// self
const GameColor_1 = __importDefault(require("./enums/GameColor"));
class Game {
    constructor(name, displayName, iconColor = GameColor_1.default.SILVER) {
        this.name = name;
        this.displayName = displayName;
        this.iconColor = iconColor;
    }
    getName() {
        return this.name;
    }
    getDisplayName() {
        return this.displayName;
    }
    getIconColor() {
        return this.iconColor;
    }
}
exports.default = Game;
