const _ = require("lodash");

const sources = [
    require("./spigot"), // all materials from Materials.java
    require("./potions"), // All potions with effects
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
