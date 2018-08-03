const _ = require("lodash");

const processes = [
    require("./simple"), // ABC_XYZ -> abcxyz
    require("./fixed"), // Manually-added aliases
    require("./compound")(require("./data/color")), // Colo(u)red things (not dyes)
    require("./compound")(require("./data/wood")), // Wood things (not tools)
    require("./compound")(require("./data/mineable")), // Ores, armo(u)r, tools
    require("./compound")(require("./data/transport")), // Minecarts
    //require("./compound")(require("./data/dye")), // Dyes
    //require("./compound")(require("./data/music")), // Music discs/disks
    //require("./smooth"), // "Smooth" blocks (top slab texture on all sides)
    //require("./potions"), // Potions
    //require("./arrows") // Tipped arrows
];

module.exports = function process(material) {
    return _.flatten(
        processes.map(p =>
            p.test(material) ? p.get(material) : []
        ));
}
