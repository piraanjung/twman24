cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-btprinter.BluetoothPrinter",
      "file": "plugins/cordova-plugin-btprinter/www/BluetoothPrinter.js",
      "pluginId": "cordova-plugin-btprinter",
      "clobbers": [
        "BTPrinter"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-btprinter": "0.1.0-dev"
  };
});