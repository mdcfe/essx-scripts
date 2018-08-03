// Colours
const prefixes = {
    GOLD: ["gold", "g"],
    IRON: ["iron", "i", "steel", "s"],
    COAL: ["coal", "c"],
    LAPIS: ["lapislazuli", "lapis", "l"],
    DIAMOND: ["crystal", "diamond", "d"],
    EMERALD: ["emerald", "e"],
    REDSTONE: ["redstone", "reds", "red", "rstone", "rs", "r"],
};

// Types of material
const suffixes = {
    ORE: ["ore", "o", "!ore", "!o"],
    BLOCK: ["block", "!block"],
    INGOT: ["ingot", "bar", "i", "!ingot", "!bar", "!i"],
}

// Ambiguous aliases that shouldn't get outputted here
const protected = ["ii", "si", "bars", "ingots", "is", "io", "oi", "so", "os"];

module.exports = { prefixes, suffixes, protected };
