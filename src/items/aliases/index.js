const _ = require("lodash");

const processes = [
    require("./simple"),
    require("./color"),
    require("./fixed"),
    // require("./wood"),
    // require("./ores"),
    // require("./slabs"),
    // require("./records"),
    // require("./potions"),
    // require("./arrows"),
    // require("./tools")
];

module.exports = function process(material) {
    return _.flatten(
        processes.map(p =>
            p.test(material) ? p.get(material) : []
        ));
}
