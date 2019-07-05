// self
import ColorRange from './ColorRange';

export default class ColorRanges {
  private readonly ranges: ColorRange[] = [];

  constructor(ranges: ColorRange[]) {
    this.ranges = ranges;
  }

  public getRanges(): ColorRange[] {
    return this.ranges;
  }
}
