import { PluginModule } from "paella-core";
import packageData from "../../package.json";

export default class LayoutPluginsModule extends PluginModule {
    get moduleName() {
        return "paella-layout-plugins";
    }

    get moduleVersion() {
        return packageData.version;
    }
}