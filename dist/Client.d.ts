import Game from './Game';
import Endpoint from './Endpoint';
import GameEvent from './GameEvent';
import GameEventHandler from './GameEventHandler';
export default class Client {
    private heartbeatInterval;
    private heartbeatIntervalId?;
    private readonly game;
    private readonly endpoint;
    private readonly axiosInstance;
    constructor(game: Game, endpoint: Endpoint);
    registerGame(): Promise<object>;
    removeGame(): Promise<object>;
    registerEvent(event: GameEvent): Promise<object>;
    removeEvent(event: GameEvent): Promise<object>;
    bindEvent(event: GameEvent, handlers: GameEventHandler[]): Promise<object>;
    sendGameEventUpdate(event: GameEvent): Promise<object>;
    startHeartbeat(): void;
    stopHeartbeat(): void;
    private post;
}
