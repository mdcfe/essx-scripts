// Stone brick variations
const prefixes = {
    // These should all be preferred over stone brick variations
    // These will be populated later
    INFESTED_CHISELED: [],
    INFESTED_CRACKED: [],
    INFESTED_MOSSY: [],
    INFESTED: ["silverfish", "sfish", "fish", "infested", "monsteregg", "megg", "trap", "sf"],
    // These should all be preferred over normal stone bricks
    CHISELED: ["chiseled", "circle", "ci"],
    CRACKED: ["cracked", "crack", "cr", "c"],
    MOSSY: ["mossy", "moss", "m"],
    // Normal stone blocks have no prefix
    STONE: [""]
};

Object.keys(prefixes)
    .filter(prefix => prefix.includes("INFESTED_"))
    .forEach(prefix => {
        basePrefix = prefix.substr(9);
        base = prefixes[basePrefix];

        prefixes.INFESTED.forEach(x => {
            base.forEach(y => {
                prefixes[prefix].push(`${x}${y}`);
            });
        });
    });

// All stone bricks end in STONE_BRICKS
const suffixes = {
    STONE_BRICKS: ["stonebrick", "stonebrickblock", "stonebb", "sbrick", "sbricks"],
    COBBLESTONE: ["cobblestone", "cstone", "cobble"],
    STONE: ["stone", "smoothstone", "sstone"],
}

// Certain full names that shouldn't be outputted as aliases here, as they refer to another material
const protected = [];

module.exports = {
    prefixes,
    suffixes,
    protected
};
