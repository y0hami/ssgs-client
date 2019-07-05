# SteelSeries GameSense(TM) Client (Unofficial)  

> GameSense™ is a framework in SteelSeries Engine 3 that allows games to send status updates to Engine,
> which can then drive illumination (and potentially more) capabilities of SteelSeries devices.

This is not an official client implementation. *GameSense(TM)* is a trademark of [SteelSeries](https://steelseries.com/).

This client was heavily inspired from [gamesense-client](https://github.com/cschuller/gamesense-client)
[now inactive] and [gamesense-sdk](https://github.com/SteelSeries/gamesense-sdk).

Although this was based on gamesense-client I have rewrite the entire code base in TypeScript so you
can use the library with beautiful types.

### Documentation
The library is documented via [TypeDoc](https://typedoc.org), you can view the docs
[here](https://ssgs-client.hammy2899.dev). For the official SteelSeries SDK docs you can view them
[here](https://github.com/SteelSeries/gamesense-sdk). 

### Example

Make your `ESC` key flash red.

```javascript
const {
  GSClient, GSEndpoint, Game, GameColor,
  GameEvent, Color, GameEventHandler,
  DeviceType, RgbPerKeyZone,
} = require('ssgs-client');

const endpoint = new GSEndpoint();
endpoint
  .discoverUrl()
  .then(() => {
    const game = new Game('FLASHING_ESC', 'Flashing ESC Key', GameColor.BLUE);
    const client = new GSClient(game, endpoint);
    const blinkEvent = new GameEvent('IS_BLINK_ACTIVE');

    client.registerGame()
      .then(() => {
        const blinkColor = new Color(255, 0, 0);
        const escKeyHandler = new GameEventHandler(
          DeviceType.KEYBOARD,
          RgbPerKeyZone.ESCAPE,
          blinkColor,
        );

        return client.bindEvent(blinkEvent, [escKeyHandler]);
      })
      .then(() => {
        const updateBlinkEvent = () => {
          blinkEvent.setValue(blinkEvent.getValue() > 0 ? 0 : 1);
          client.sendGameEventUpdate(blinkEvent)
            .catch(console.error);
        };

        setInterval(updateBlinkEvent, 300);
      })
      .catch(console.error);
  })
  .catch(console.error);
```

### License

Released under [MIT license](LICENSE.md)
