// npm
import axios, { AxiosInstance, AxiosResponse } from 'axios';

// self
import { error } from './Utils';
import Game from './Game';
import Endpoint from './Endpoint';
import GameEvent from './GameEvent';
import GameEventHandler from './GameEventHandler';
import ColorRanges from './ColorRanges';

export default class Client {
  private heartbeatInterval: number = 10;
  private heartbeatIntervalId?: NodeJS.Timer;
  private readonly game: Game;
  private readonly endpoint: Endpoint;
  private readonly axiosInstance: AxiosInstance;

  constructor(game: Game, endpoint: Endpoint) {
    this.game = game;
    this.endpoint = endpoint;

    this.axiosInstance = axios.create({
      baseURL: endpoint.getBaseUrl(),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public registerGame(): Promise<object> {
    return this.post('/game_metadata', {
      game: this.game.getName(),
      game_display_name: this.game.getDisplayName(),
      icon_color_id: this.game.getIconColor(),
    });
  }

  public removeGame(): Promise<object> {
    return this.post('/remove_game', {
      game: this.game.getName(),
    });
  }

  public registerEvent(event: GameEvent): Promise<object> {
    return this.post('/register_game_event', {
      game: this.game.getName(),
      event: event.getName(),
      min_value: event.getMinValue(),
      max_value: event.getMAxValue(),
      icon_id: event.getIcon(),
    });
  }

  public removeEvent(event: GameEvent): Promise<object> {
    return this.post('/remove_game_event', {
      game: this.game.getName(),
      event: event.getName(),
    });
  }

  public bindEvent(event: GameEvent, handlers: GameEventHandler[]): Promise<object> {
    return this.post('/bind_game_event', {
      game: this.game.getName(),
      event: event.getName(),
      min_value: event.getMinValue(),
      max_value: event.getMAxValue(),
      icon_id: event.getIcon(),
      handlers: handlers.map((handler: GameEventHandler) => {
        const handlerData: { [key: string]: any; } = {
          zone: handler.getZone(),
          color: handler.getColor(),
          mode: handler.getMode(),
          'device-type': handler.getDevice(),
        };

        if (handler.getRate()) {
          handlerData.rate = handler.getRate();
        }

        if (handler.getColor().constructor.name === 'GradientColor') {
          handlerData.color = {
            gradient: handler.getColor(),
          };
        } else if (handler.getColor().constructor.name === 'ColorRanges') {
          handlerData.color = (handler.getColor() as ColorRanges).getRanges();
        }

        if (handler.getCustomZoneKeys()) {
          handlerData['custom-zone-keys'] = handler.getCustomZoneKeys();
        }

        return handlerData;
      }),
    });
  }

  public sendGameEventUpdate(event: GameEvent): Promise<object> {
    return this.post('/game_event', {
      game: this.game.getName(),
      event: event.getName(),
      data: {
        value: event.getValue(),
      },
    });
  }

  public startHeartbeat() {
    this.heartbeatIntervalId = setInterval(() => {
      this
        .post('/game_heartbeat', {
          game: this.game.getName(),
        }).catch(error);
    }, this.heartbeatInterval * 1000);
  }

  public stopHeartbeat() {
    if (this.heartbeatIntervalId) {
      clearInterval(Number(this.heartbeatIntervalId));
      this.heartbeatIntervalId = undefined;
    }
  }

  private post(path: string, data: object): Promise<object> {
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .post(path, data)
        .then((res: AxiosResponse) => {
          if (res.status === 200) {
            resolve(res.data);
          } else {
            reject(new Error(`Failed to complete request (status ${res.status})`));
          }
        })
        .catch(reject);
    });
  }
}
