// self
import EventIcon from './enums/EventIcon';

export default class GameEvent {
  private readonly name: string;
  private icon: EventIcon = EventIcon.NO_ICON;
  private minValue: number = 0;
  private maxValue: number = 1;
  private value: number = 0;

  constructor(name: string) {
    this.name = name.toUpperCase();
  }

  public getName(): string {
    return this.name;
  }

  public setIcon(value: EventIcon) {
    this.icon = value;
  }

  public getIcon(): EventIcon {
    return this.icon;
  }

  public setMinValue(value: number) {
    this.minValue = value;
  }

  public getMinValue(): number {
    return this.minValue;
  }

  public setMaxValue(value: number) {
    this.maxValue = value;
  }

  public getMAxValue(): number {
    return this.maxValue;
  }

  public setValue(value: number) {
    this.value = value;
  }

  public getValue(): number {
    return this.value;
  }
}
