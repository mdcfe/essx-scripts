const aliases = {
    // == Stones ==
    STONE: ["sstone", "smoothstone", "rock"],
    GRANITE: ["gstone"],
    DIORITE: ["dstone"],
    ANDESITE: ["astone"],
    POLISHED_GRANITE: ["pgranite", "pgstone", "polishedgstone"],
    POLISHED_DIORITE: ["pdiorite", "pdstone", "polisheddstone"],
    POLISHED_ANDESITE: ["pandesite", "pastone", "polishedastone"],
    COBBLESTONE: ["cstone", "cobble"],
    BEDROCK: ["oprock", "opblock", "adminblock", "adminrock", "adminium"],
    // == Dirt ==
    GRASS_BLOCK: ["greendirt", "greenearth", "greenland"],
    DIRT: ["earth", "land"],
    COARSE_DIRT: ["cdirt", "grasslessdirt", "grasslessearth", "grasslessland", "coarseland", "coarseearth"],
    // == Liquid ==
    /* ID 9 and 11 don't have a 1.13 equivalent, so point to the WATER/LAVA types */
    WATER: ["stationarywater", "stillwater", "swater"],
    LAVA: ["stationarylava", "stilllava", "slava"],
    RED_SAND: ["rsand"], // misc
    // == Redstone ==
    STONE_PRESSURE_PLATE: ["stonepressplate", "stonepplate", "stoneplate", "spressureplate", "spressplate", "spplate", "splate", "smoothstonepressueplate", "smoothstonepressplate", "smoothstonepplate", "smoothstoneplate", "sstonepressureplate", "sstonepressplate", "sstonepplate", "sstoneplate"],
    REDSTONE_TORCH: ["rstonetorch", "redstorch", "redtorch", "rstorch"],
    STONE_BUTTON: ["smoothstonebutton", "sstonebutton", "sbutton", "button"],
    DISPENSER: ["dispense"],
    NOTE_BLOCK: ["musicblock", "nblock", "mblock"],
    JUKEBOX: ["jbox"],
    // == Decorative ==
    GLASS: ["blockglass", "glassblock"],
    SANDSTONE: ["sastone"],
    CHISELED_SANDSTONE: ["cpstone", "creepersandstone", "creepersastone", "creepsandstone", "creepsastone", "csandstone", "csastone", "hieroglyphicsandstone", "hieroglyphicsastone", "hieroglyphsandstone", "hieroglyphsastone", "hsandstone", "hsastone", "pyramidsandstone", "pyramidsastone", "psandstone", "psastone", "chiseledsastone", "chiselsandstone", "chiselsastone"],
    // "CUT_SANDSTONE" used to be called "SMOOTH_SANDSTONE"
    // "SMOOTH_SANDSTONE" is now a double slab
    CUT_SANDSTONE: ["smstone", "smoothsastone", "ssandstone", "smsastone", "ssastone"],
    RED_SANDSTONE: ["rsstone", "redsandstone"],
    CHISELED_RED_SANDSTONE: ["crstone", "redsandstonechiseled", "chiseledredsandstone"],
    CUT_RED_SANDSTONE: ["srstone", "redsandstonesmooth", "smoothredsandstone"],
    COBWEB: ["spiderweb", "sweb", "cweb", "web"],
}

const validMaterials = Object.keys(aliases);

module.exports = {
    prep: null,
    test: ({ name }) => validMaterials.includes(name),
    get: ({ name }) => aliases[name],
}
