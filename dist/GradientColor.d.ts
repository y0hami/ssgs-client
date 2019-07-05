import Color from './Color';
export default class GradientColor {
    private readonly zero;
    private readonly hundred;
    constructor(zero: Color, hundred: Color);
    getZero(): Color;
    getHundred(): Color;
}
