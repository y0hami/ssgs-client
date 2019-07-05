"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// npm
const axios_1 = __importDefault(require("axios"));
// self
const Utils_1 = require("./Utils");
class Client {
    constructor(game, endpoint) {
        this.heartbeatInterval = 10;
        this.game = game;
        this.endpoint = endpoint;
        this.axiosInstance = axios_1.default.create({
            baseURL: endpoint.getBaseUrl(),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    registerGame() {
        return this.post('/game_metadata', {
            game: this.game.getName(),
            game_display_name: this.game.getDisplayName(),
            icon_color_id: this.game.getIconColor(),
        });
    }
    removeGame() {
        return this.post('/remove_game', {
            game: this.game.getName(),
        });
    }
    registerEvent(event) {
        return this.post('/register_game_event', {
            game: this.game.getName(),
            event: event.getName(),
            min_value: event.getMinValue(),
            max_value: event.getMAxValue(),
            icon_id: event.getIcon(),
        });
    }
    removeEvent(event) {
        return this.post('/remove_game_event', {
            game: this.game.getName(),
            event: event.getName(),
        });
    }
    bindEvent(event, handlers) {
        return this.post('/bind_game_event', {
            game: this.game.getName(),
            event: event.getName(),
            min_value: event.getMinValue(),
            max_value: event.getMAxValue(),
            icon_id: event.getIcon(),
            handlers: handlers.map((handler) => {
                const handlerData = {
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
                }
                else if (handler.getColor().constructor.name === 'ColorRanges') {
                    handlerData.color = handler.getColor().getRanges();
                }
                if (handler.getCustomZoneKeys()) {
                    handlerData['custom-zone-keys'] = handler.getCustomZoneKeys();
                }
                return handlerData;
            }),
        });
    }
    sendGameEventUpdate(event) {
        return this.post('/game_event', {
            game: this.game.getName(),
            event: event.getName(),
            data: {
                value: event.getValue(),
            },
        });
    }
    startHeartbeat() {
        this.heartbeatIntervalId = setInterval(() => {
            this
                .post('/game_heartbeat', {
                game: this.game.getName(),
            }).catch(Utils_1.error);
        }, this.heartbeatInterval * 1000);
    }
    stopHeartbeat() {
        if (this.heartbeatIntervalId) {
            clearInterval(Number(this.heartbeatIntervalId));
            this.heartbeatIntervalId = undefined;
        }
    }
    post(path, data) {
        return new Promise((resolve, reject) => {
            this.axiosInstance
                .post(path, data)
                .then((res) => {
                if (res.status === 200) {
                    resolve(res.data);
                }
                else {
                    reject(new Error(`Failed to complete request (status ${res.status})`));
                }
            })
                .catch(reject);
        });
    }
}
exports.default = Client;
