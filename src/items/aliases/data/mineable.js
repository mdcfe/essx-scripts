// Colours
const prefixes = {
    GOLD: ["gold", "g"],
    IRON: ["iron", "i", "steel", "s", "st"],
    COAL: ["coal", "c"],
    LAPIS: ["lapislazuli", "lapis", "l"],
    DIAMOND: ["crystal", "diamond", "d"],
    EMERALD: ["emerald", "e"],
    REDSTONE: ["redstone", "reds", "red", "rstone", "rs", "r"],
    // While not ores, these have armor and tools
    LEATHER: ["leather", "l"],
    CHAINMAIL: ["chainmail", "chainm", "cmail", "chain", "cm"],
    WOODEN: ["wooden", "wood", "w"],
    STONE: ["cobblestone", "cstone", "cs", "stone", "s"],
};

// Types of material
const suffixes = {
    ORE: ["ore", "o", "!ore", "!o"],
    BLOCK: ["block", "!block"],
    INGOT: ["ingot", "bar", "i", "!ingot", "!bar", "!i"],
    // Tools
    SWORD: ["sword"],
    SHOVEL: ["shovel", "spade"],
    PICKAXE: ["pickaxe", "pick"],
    AXE: ["axe"],
    HOE: ["hoe"],
    // Armor
    HELMET: ["helmet", "helm", "hat", "coif"],
    CHESTPLATE: ["chestplate", "platebody", "plate", "shirt", "tunic"],
    LEGGINGS: ["leggings", "legs", "pants"],
    BOOTS: ["boots", "shoes"],
    HORSE_ARMOR: ["horsearmor", "harmor", "armor"]
}

// Ambiguous aliases that shouldn't get outputted here
const protected = ["ii", "si", "bars", "ingots", "is", "io", "oi", "so", "os"];

module.exports = { prefixes, suffixes, protected };
