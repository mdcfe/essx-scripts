const _ = require("lodash");

const sources = [
    require("./spigot"), // All item materials from Materials.java
    require("./potions"), // All potions with effects
    require("./spawners"), // Spawners for every spawnable entity
];

module.exports = async function process(material) {
    await Promise.all(
        sources.map(s =>
            s.prep ? s.prep() : null
        )
    );

    return _.flatten(
        sources.map(s => s.retrieve())
    );
}
