const _ = require("lodash");

const sources = [
    require("./spigot"), // ABC_XYZ -> abcxyz
    require("./potions"), // Manually-added aliases
];

module.exports = async function process(material) {
    await Promise.all(
        sources.map(s => 
            s.prep ? s.prep() : null
        )
    );

    return _.flatten(
        sources.map(s => s.retrieve());
    );
}
