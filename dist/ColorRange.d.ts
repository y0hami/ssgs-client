import Color from './Color';
import GradientColor from './GradientColor';
export default class ColorRange {
    private readonly low;
    private readonly high;
    private readonly color;
    constructor(low: number, high: number, color: Color | GradientColor);
    getLow(): number;
    getHigh(): number;
    getColor(): Color | GradientColor;
}
