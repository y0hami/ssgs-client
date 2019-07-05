import GameColor from './enums/GameColor';
export default class Game {
    private readonly name;
    private readonly displayName;
    private readonly iconColor;
    constructor(name: string, displayName: string, iconColor?: GameColor);
    getName(): string;
    getDisplayName(): string;
    getIconColor(): GameColor;
}
