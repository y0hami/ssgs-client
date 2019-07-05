export default class Color {
  private readonly red: number;
  private readonly green: number;
  private readonly blue: number;

  constructor(red: number, green: number, blue: number) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  public getRed(): number {
    return this.red;
  }

  public getGreen(): number {
    return this.green;
  }

  public getBlue(): number {
    return this.blue;
  }
}
