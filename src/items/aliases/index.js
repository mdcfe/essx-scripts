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
    require("./compound")(require("./data/spawnable")), // Mobs
    require("./compound")(require("./data/stone")), // Stone bricks
    require("./compound")(require("./data/meatfish")), // Meat and fish (is fish meat?)
    //require("./smooth"), // "Smooth" blocks (top slab texture on all sides)
    require("./compound")(require("./data/misc")), // Misc aliases
];

const watchedMaterials = [];

module.exports = function process(material) {
    if (watchedMaterials.includes(material.material)) {
        console.log(material);
    }
    return _.flatten(
        processes
        .map((p, i) => {
            if (watchedMaterials.includes(material.material) && p) {
                console.log(i, p.test(material));
            }
            return p;
        })
        .map(p =>
            p.test(material) ? p.get(material) : []
        )
        .map((a, i) => {
            if (watchedMaterials.includes(material.material) && a && a.length > 0) {
                console.log(i, a);
            }
            return a;
        }))
}

module.exports.x = processes;
