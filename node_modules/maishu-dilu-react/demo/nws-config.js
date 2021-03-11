const { getVirtualPaths } = require("maishu-chitu-scaffold");

let virtualPaths = getVirtualPaths(null, __dirname);

exports.default = {
    port: 7345,
    virtualPaths
}