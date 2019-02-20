// Stone brick variations
const suffixes = {
    // These should all be preferred over stone brick variations
    // These will be populated later
    INFESTED_CHISELED: [],
    INFESTED_CRACKED: [],
    INFESTED_MOSSY: [],
    // This is used by the code below but not directly used for generating aliases
    INFESTED: ["!silverfish", "!sfish", "!fish", "!infested", "!monsteregg", "!megg", "!trap", "!sf", "!me"],
    // These should all be preferred over normal stone bricks
    CHISELED: ["!chiseled", "!circle", "!ci"],
    CRACKED: ["!cracked", "!crack", "!cr", "!c"],
    MOSSY: ["!mossy", "!moss", "!m"],
    // These are sandstone variations
    SMOOTH: ["!smooth", "!sm"],
    CUT: ["!cut"],
    // These are actually suffixes here
    SLAB: ["slab", "sl"],
    STAIR: ["stair", "stairs", "st"],
    // Normal stone blocks have no prefix
    $: [""]
};

Object.keys(suffixes)
    .filter(suffix => suffix.includes("INFESTED_"))
    .forEach(suffix => {
        baseSuffix = suffix.substr(9);
        base = suffixes[baseSuffix];

        suffixes.INFESTED.forEach(x => {
            base.forEach(y => {
                y = y.replace("!", "");
                suffixes[suffix].push(`${x}${y}`);
            });
        });
    });

const prefixes = {
    // Match first
    COBBLESTONE_WALL: ["cobblestonewall", "cobblewall", "cstonewall", "cswall", "cwall", "cobblestonefence", "cobblefence", "cstonefence", "csfence", "cfence", "stonewall", "swall"],
    STONE_BRICKS: ["stonebrick", "stonebrickblock", "stonebb", "sbrick", "sbricks", "sbrickblock", "stonebricks", "sbb"],
    // Rest of the aliases
    COBBLESTONE: ["cobblestone", "cstone", "cobble"],
    RED_SANDSTONE: ["redsandstone", "rsandstone", "rsandst", "rsastone"],
    SANDSTONE: ["sandstone", "sandst", "sastone"],
    STONE: ["stone", "smoothstone", "sstone"],
}

// Certain full names that shouldn't be outputted as aliases here, as they refer to another material
const protected = ["sandstone"];

// Materials that should never be matched
const excluded = [];

module.exports = {
    prefixes,
    suffixes,
    protected,
    excluded
};
