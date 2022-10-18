# A layout plugin set for Paella Player

## Usage

**Step 1:** Import the plugin context and add it to the Paella Player initialization parameters:

```javascript
...
import getBasicPluginsContext from 'paella-layout-plugins';

let paella = new Paella('player-container', {
    customPluginContext: [
        getBasicPluginsContext()
    ]
});
...
```

**Step 2:** Configure the plugins you want to use in the paella player configuration.

```json
{
    "plugins": {
        ...
        "es.upv.paella.dualVideoSideBySide": {
            "enabled": true,
            "side": "right",
            "order": 0
        }
        ... other plugin settings
    }
}
```

## Included plugins

### Dual video side by side

An alternative layout plugin to the official one, which allows to display videos side by side with different sizes.

```json
{
    "plugins": {
        "es.upv.paella.dualVideoSideBySide": {
            "enabled": true,
            "side": "right",
            "order": 2
        }...
    }
}
```

**Exported as** `DualVideoSideBySidePlugin`.

**Icon customization data:**

- Plugin identifier: `es.upv.paella.dualVideoSideBySide`
- Icon names:
    