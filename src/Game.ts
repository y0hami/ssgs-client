// self
import GameColor from './enums/GameColor';

export default class Game {
  private readonly name: string;
  private readonly displayName: string;
  private readonly iconColor: GameColor;

  constructor(name: string, displayName: string, iconColor: GameColor = GameColor.SILVER) {
    this.name = name;
    this.displayName = displayName;
    this.iconColor = iconColor;
  }

  public getName(): string {
    return this.name;
  }

  public getDisplayName(): string {
    return this.displayName;
  }

  public getIconColor(): GameColor {
    return this.iconColor;
  }
}
