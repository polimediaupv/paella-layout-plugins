import dictionaries from './dictionaries';

import DualVideoSideBySideLayout from './plugins/es.upv.paella.dualVideoSideBySide';

export default function getLayoutPluginsContext() {
    return require.context("./plugins", true, /\.js/)
}

export const DualVideoSideBySideLayoutPlugin = DualVideoSideBySideLayout;
