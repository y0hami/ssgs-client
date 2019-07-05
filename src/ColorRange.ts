// self
import Color from './Color';
import GradientColor from './GradientColor';

export default class ColorRange {
  private readonly low: number;
  private readonly high: number;
  private readonly color: Color | GradientColor;

  constructor(low: number, high: number, color: Color | GradientColor) {
    this.low = low;
    this.high = high;
    this.color = color;
  }

  public getLow(): number {
    return this.low;
  }

  public getHigh(): number {
    return this.high;
  }

  public getColor(): Color | GradientColor {
    return this.color;
  }
}
