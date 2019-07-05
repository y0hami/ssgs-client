"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// self
const EventIcon_1 = __importDefault(require("./enums/EventIcon"));
class GameEvent {
    constructor(name) {
        this.icon = EventIcon_1.default.NO_ICON;
        this.minValue = 0;
        this.maxValue = 1;
        this.value = 0;
        this.name = name.toUpperCase();
    }
    getName() {
        return this.name;
    }
    setIcon(value) {
        this.icon = value;
    }
    getIcon() {
        return this.icon;
    }
    setMinValue(value) {
        this.minValue = value;
    }
    getMinValue() {
        return this.minValue;
    }
    setMaxValue(value) {
        this.maxValue = value;
    }
    getMAxValue() {
        return this.maxValue;
    }
    setValue(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
exports.default = GameEvent;
