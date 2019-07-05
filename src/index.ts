// self
import Client from './Client';
import Color from './Color';
import ColorRange from './ColorRange';
import ColorRanges from './ColorRanges';
import GradientColor from './GradientColor';
import Endpoint from './Endpoint';
import FlashEffectFrequency from './FlashEffectFrequency';
import Game from './Game';
import GameEvent from './GameEvent';
import GameEventHandler from './GameEventHandler';

// enums
import DeviceType from './enums/DeviceType';
import EventIcon from './enums/EventIcon';
import GameColor from './enums/GameColor';
import HeadsetZone from './enums/HeadsetZone';
import IndicatorZone from './enums/IndicatorZone';
import KeyboardZone from './enums/KeyboardZone';
import MouseZone from './enums/MouseZone';
import RgbPerKeyZone from './enums/RgbPerKeyZone';
import RgbZone from './enums/RgbZone';
import VisualizationMode from './enums/VisualizationMode';

const GSClient = Client;
const GSEndpoint = Endpoint;

export {
  GSClient,
  GSEndpoint,
  Color,
  ColorRange,
  ColorRanges,
  GradientColor,
  FlashEffectFrequency,
  Game,
  GameEvent,
  GameEventHandler,

  // enums
  DeviceType,
  EventIcon,
  GameColor,
  HeadsetZone,
  IndicatorZone,
  KeyboardZone,
  MouseZone,
  RgbPerKeyZone,
  RgbZone,
  VisualizationMode,
};
