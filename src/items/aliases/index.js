const _ = require("lodash");

const processes = [
    require("./simple"), // ABC_XYZ -> abcxyz
    require("./fixed"), // Manually-added aliases
    require("./potions"), // Potions
    require("./compound")(require("./data/color")), // Colo(u)red things (not dyes)
    require("./compound")(require("./data/wood")), // Wood things (not tools)
    require("./compound")(require("./data/mineable")), // Ores, armo(u)r, tools
    require("./compound")(require("./data/transport")), // Minecarts
    require("./compound")(require("./data/records")), // Music records
    require("./compound")(require("./data/spawnable")),
    //require("./smooth"), // "Smooth" blocks (top slab texture on all sides)
    require("./compound")(require("./data/misc")), // Misc aliases
];

module.exports = function process(material) {
    return _.flatten(
        processes.map(p =>
            p.test(material) ? p.get(material) : []
        ));
}
