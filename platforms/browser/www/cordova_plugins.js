cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-btprinter/www/BluetoothPrinter.js",
        "id": "cordova-plugin-btprinter.BluetoothPrinter",
        "pluginId": "cordova-plugin-btprinter",
        "clobbers": [
            "BTPrinter"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
        "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
        "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-barcodescanner/src/browser/BarcodeScannerProxy.js",
        "id": "phonegap-plugin-barcodescanner.BarcodeScannerProxy",
        "pluginId": "phonegap-plugin-barcodescanner",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-btprinter": "0.1.0-dev",
    "phonegap-plugin-barcodescanner": "8.1.0",
    "cordova-plugin-compat": "1.2.0"
}
// BOTTOM OF METADATA
});