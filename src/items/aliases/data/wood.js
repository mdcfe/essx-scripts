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
    // All other materials
    SAPLING: ["sapling", "treesapling", "logsapling", "trunksapling", "woodsapling"],
    LEAVES: ["treeleaves", "logleaves", "trunkleaves", "woodleaves", "leaves", "treeleaf", "logleaf", "trunkleaf", "woodleaf", "leaf", "treeleave", "logleave", "trunkleave", "woodleave", "leave"],
    // TODO: Double slabs are a bit more complicated
    SLAB: ["woodenstep", "woodstep", "wstep", "step", "woodenslab", "woodslab", "wslab", "woodenhalfblock", "woodhalfblock", "whalfblock", "halfblock"],
    STAIRS: ["woodenstairs", "woodstairs", "wstairs", "woodenstair", "woodstair", "wstair", "stair"],
    FENCE_GATE: ["fencegate", "gate"],
    FENCE: ["fence"],
    LOG: ["", "!log", "trunk", "log", "tree"],
    WOOD: ["wood", "logall", "trunkall", "treeall"],
    PLANK: ["woodenplank", "woodplank", "wplank", "plankwooden", "plankwood", "plankw", "plank"]
}

// Certain full names that shouldn't be outputted as aliases here, as they refer to another material
// eg. prevents WHITE_STAINED_GLASS overriding "glass"
const protected = [];

module.exports = { prefixes, suffixes, protected };
