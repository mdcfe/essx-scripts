// Stone brick variations
const prefixes = {
    // These should all be preferred over stone brick variations
    // These will be populated later
    INFESTED_CHISELED: [],
    INFESTED_CRACKED: [],
    INFESTED_MOSSY: [],
    INFESTED: ["silverfish", "sfish", "fish", "infested", "monsteregg", "megg", "trap", "sf", "me"],
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

const suffixes = {
    // Match first
    COBBLESTONE_WALL: ["cobblestonewall", "cobblewall", "cstonewall", "cswall", "cwall", "cobblestonefence", "cobblefence", "cstonefence", "csfence", "cfence", "stonewall", "swall"],
    STONE_BRICKS: ["stonebrick", "stonebrickblock", "stonebb", "sbrick", "sbricks", "sbrickblock", "stonebricks", "sbb"],
    // Rest of the aliases
    _COBBLESTONE: ["cobblestone", "cstone", "cobble"],
    _SANDSTONE: ["sandstone"],
    _STONE: ["stone", "smoothstone", "sstone"],
}

// Certain full names that shouldn't be outputted as aliases here, as they refer to another material
const protected = ["sandstone"];

// Materials that should never be matched
const excluded = ["COBBLESTONE_WALL", "MOSSY_COBBLESTONE_WALL"];

module.exports = {
    prefixes,
    suffixes,
    protected,
    excluded
};
