const _ = require("lodash");

const processes = [
    require("./simple"),
    require("./fixed"),
    require("./compound")(require("./data/color")),
    require("./compound")(require("./data/wood")),
    require("./compound")(require("./data/mineable")),
    // require("./compound")(require("./data/dye")),
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
