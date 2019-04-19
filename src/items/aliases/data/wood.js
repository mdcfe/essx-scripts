// Wood types
const prefixes = {
    // This should be preferred over oak
    DARK_OAK: ["darkoak", "doak", "do"],
    // All other tree types
    OAK: ["", "oak", "o"],
    SPRUCE: ["pine", "p", "dark", "d", "spruce", "s"],
    BIRCH: ["birch", "b", "light", "l", "white", "w"],
    JUNGLE: ["jungle", "j", "forest", "f"],
    ACACIA: ["acacia", "a"]
};

// Types of material
const suffixes = {
    SAPLING: ["sapling", "treesapling", "logsapling", "trunksapling", "woodsapling"],
    LEAVES: ["treeleaves", "logleaves", "trunkleaves", "woodleaves", "leaves", "treeleaf", "logleaf", "trunkleaf", "woodleaf", "leaf", "treeleave", "logleave", "trunkleave", "woodleave", "leave"],
    // TODO: Double slabs are a bit more complicated
    SLAB: ["woodenstep", "woodstep", "wstep", "step", "woodenslab", "woodslab", "wslab", "woodenhalfblock", "woodhalfblock", "whalfblock", "halfblock"],
    STAIRS: ["woodenstairs", "woodstairs", "wstairs", "woodenstair", "woodstair", "wstair", "stair"],
    FENCE_GATE: ["fencegate", "gate"],
    FENCE: ["fence"],
    BOAT: ["boat"],
    LOG: ["", "!log", "trunk", "log", "tree"],
    WOOD: ["wood", "logall", "trunkall", "treeall"],
    PLANK: ["woodenplank", "woodplank", "wplank", "plankwooden", "plankwood", "plankw", "plank"],
    TRAPDOOR: ["trapdoor", "doortrap", "hatch", "tdoor", "doort", "trapd", "dtrap"],
    PRESSURE_PLATE: ["pressureplate", "pressplate", "pplate", "plate"]
};

// Certain full names that shouldn't be outputted as aliases here, as they refer to another material
// eg. prevents WHITE_STAINED_GLASS overriding "glass"
const protected = ["dplate", "lplate"];

const excluded = [
    "STRIPPED_ACACIA_LOG", "STRIPPED_BIRCH_LOG", "STRIPPED_DARK_OAK_LOG", "STRIPPED_JUNGLE_LOG", "STRIPPED_OAK_LOG", "STRIPPED_SPRUCE_LOG",
    "STRIPPED_ACACIA_WOOD", "STRIPPED_BIRCH_WOOD", "STRIPPED_DARK_OAK_WOOD", "STRIPPED_JUNGLE_WOOD", "STRIPPED_OAK_WOOD", "STRIPPED_SPRUCE_WOOD",
];

module.exports = { prefixes, suffixes, protected, excluded };
