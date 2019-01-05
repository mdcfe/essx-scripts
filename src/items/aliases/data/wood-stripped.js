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
    // These should be preferred over shorter materials
    STRIPPED_$_LOG: ["strippedlog", "barelog", "stripped$tree", "bare$tree", "stripped$trunk", "bare$trunk"],
    STRIPPED_$_WOOD: ["strippedwood", "barewood", "stripped$logall", "bare$logall", "stripped$trunkall", "bare$trunkall", "stripped$treeall", "bare$treeall"],
};

// Certain full names that shouldn't be outputted as aliases here, as they refer to another material
// eg. prevents WHITE_STAINED_GLASS overriding "glass"
const protected = [];

const excluded = [
    "ACACIA_LOG", "BIRCH_LOG", "DARK_OAK_LOG", "JUNGLE_LOG", "OAK_LOG", "SPRUCE_LOG",
    "ACACIA_WOOD", "BIRCH_WOOD", "DARK_OAK_WOOD", "JUNGLE_WOOD", "OAK_WOOD", "SPRUCE_WOOD",
];

module.exports = { prefixes, suffixes, protected, excluded };
