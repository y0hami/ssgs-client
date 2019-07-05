// self
import DeviceType from './enums/DeviceType';
import HeadsetZone from './enums/HeadsetZone';
import IndicatorZone from './enums/IndicatorZone';
import KeyboardZone from './enums/KeyboardZone';
import MouseZone from './enums/MouseZone';
import RgbPerKeyZone from './enums/RgbPerKeyZone';
import RgbZone from './enums/RgbZone';
import Color from './Color';
import VisualizationMode from './enums/VisualizationMode';
import GradientColor from './GradientColor';
import FlashEffectFrequency from './FlashEffectFrequency';
import ColorRanges from './ColorRanges';

export default class GameEventHandler {
  private readonly deviceType: DeviceType;
  private readonly zone: HeadsetZone | IndicatorZone
  | KeyboardZone | MouseZone | RgbPerKeyZone | RgbZone;
  private readonly color: Color | GradientColor | ColorRanges;
  private customZoneKeys: RgbPerKeyZone[] | null = null;
  private mode: VisualizationMode = VisualizationMode.COLOR;
  private rate: FlashEffectFrequency | null = null;

  constructor(deviceType: DeviceType = DeviceType.RGB_PER_KEY_ZONES, zone: HeadsetZone
  | IndicatorZone | KeyboardZone | MouseZone | RgbPerKeyZone | RgbZone = MouseZone.LOGO,
  color: Color | GradientColor | ColorRanges = new Color(0, 0, 255)) {
    this.deviceType = deviceType;
    this.zone = zone;
    this.color = color;
  }

  public getDevice(): DeviceType {
    return this.deviceType;
  }

  public getZone(): HeadsetZone | IndicatorZone
  | KeyboardZone | MouseZone | RgbPerKeyZone | RgbZone {
    return this.zone;
  }

  public getColor(): Color | GradientColor | ColorRanges {
    return this.color;
  }

  public setCustomZoneKeys(value: RgbPerKeyZone[]) {
    this.customZoneKeys = value;
  }

  public addCustomZoneKey(value: RgbPerKeyZone) {
    if (!Array.isArray(this.customZoneKeys)) {
      this.customZoneKeys = [];
    }

    this.customZoneKeys.push(value);
  }

  public getCustomZoneKeys(): RgbPerKeyZone[] | null {
    return this.customZoneKeys;
  }

  public setMode(value: VisualizationMode) {
    this.mode = value;
  }

  public getMode(): VisualizationMode {
    return this.mode;
  }

  public setRate(value: FlashEffectFrequency) {
    this.rate = value;
  }

  public getRate(): FlashEffectFrequency | null {
    return this.rate;
  }
}
