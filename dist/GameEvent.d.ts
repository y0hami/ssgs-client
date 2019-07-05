import EventIcon from './enums/EventIcon';
export default class GameEvent {
    private readonly name;
    private icon;
    private minValue;
    private maxValue;
    private value;
    constructor(name: string);
    getName(): string;
    setIcon(value: EventIcon): void;
    getIcon(): EventIcon;
    setMinValue(value: number): void;
    getMinValue(): number;
    setMaxValue(value: number): void;
    getMAxValue(): number;
    setValue(value: number): void;
    getValue(): number;
}
