// self
import Color from './Color';

export default class GradientColor {
  private readonly zero: Color;
  private readonly hundred: Color;

  constructor(zero: Color, hundred: Color) {
    this.zero = zero;
    this.hundred = hundred;
  }

  public getZero(): Color {
    return this.zero;
  }

  public getHundred(): Color {
    return this.hundred;
  }
}
