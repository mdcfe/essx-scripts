// Prefixes
const prefixes = {
    PRISMARINE_BRICK: ["prismarinebricks", "prismarinebrick", "prismarinebr", "prisbricks", "prisbrick", "prisbr", "seabricks", "seabrick", "seabr"],
    DARK_PRISMARINE: ["darkprismarine", "dprismarine", "darkpris", "dpris", "darksea", "dsea"],
    PRISMARINE: ["prismarine", "pris", "sea"]
};

// Suffixes
const suffixes = {
    BRICKS: [""],
    SLAB: ["slab", "sl"],
    STAIRS: ["stairs", "stair", "st"],
    CRYSTALS: ["crystals", "crystal"],
    SHARD: ["shard", "fragment"],
    "": ["", "block"]
}

// Certain full names that shouldn't be outputted as aliases here, as they refer to another material
const protected = [];

module.exports = {
    prefixes,
    suffixes,
    protected
};
