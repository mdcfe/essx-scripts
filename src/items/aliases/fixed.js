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
    IRON_BARS: ["ironbarsb", "ironbarsblock", "ironfence", "metalbars", "metalbarsb", "metalbarsblock", "metalfence", "jailbars", "jailbarsb", "jailbarsblock", "jailfence", "mbars", "mbarsb", "mbarsblock", "mfence", "jbars", "jbarsb", "jbarsblock", "ibars", "ibarsb", "ibarsblock", "ifence"],
    // == Plants (not crops) ==
    TALL_GRASS: ["longgrass", "wildgrass", "grasslong", "grasstall", "grasswild", "lgrass", "tgrass", "wgrass"],
    DEAD_BUSH: ["bush", "deadshrub", "dshrub", "dbush", "deadsapling"],
    DANDELION: ["yellowdandelion", "ydandelion", "yellowflower", "yflower", "flower"],
    POPPY: ["rose", "redrose", "rrose", "redflower", "rflower", "poppy", "redpoppy"],
    BLUE_ORCHID: ["cyanorchid", "lightblueorchid", "lblueorchid", "orchid", "cyanflower", "lightblueflower", "lblueflower"],
    ALLIUM: ["magentaallium", "magentaflower"],
    AZURE_BLUET: ["whiteazurebluet", "abluet", "azureb", "houstonia"],
    RED_TULIP: ["tulipred", "rtulip", "tulipr"],
    WHITE_TULIP: ["tulipwhite", "wtulip", "tulipw"],
    PINK_TULIP: ["tulippink", "ptulip", "tulipp"],
    ORANGE_TULIP: ["tuliporange", "otulip", "tulipo"],
    OXEYE_DAISY: ["oxeye", "daisy", "daisyoxeye", "moondaisy", "daisymoon", "lightgrayoxeye", "lgrayoxeye", "lightgreyoxeye", "lgreyoxeye"],
    // == Combat ==
    SHIELD: ["handshield", "woodshield", "woodenshield"],
    TOTEM_OF_UNDYING: ["totem"],
    // == Crops ==
    CARVED_PUMPKIN: ["hollowpumpkin", "cutpumpkin", "oldpumpkin", "legacypumpkin"],
    JACK_O_LANTERN: ["pumpkinlantern", "glowingpumpkin", "lightpumpkin", "jpumpkin", "plantren", "glowpumpkin", "gpumpkin", "lpumpkin"],
    BEETROOT: ["broot", "beet", "beets", "beetplant", "beetcrop"],
    BEETROOT_SEEDS: ["beetrootseed", "brootseed", "brootseeds", "beetseed", "beetseeds", "beetsseeds", "beetplantseeds", "beetcropseeds"],
    // == Food ==
    BEETROOT_SOUP: ["brootsoup", "beetsoup", "beetssoup", "beetplantsoup", "beetcropsoup", "redsoup"],
    // == End Materials ==
    END_PORTAL: ["endergoo", "enderportal", "endgoo", "eportal", "egoo"],
    END_PORTAL_FRAME: ["endergooframe", "enderportalframe", "endgooframe", "eportalframe", "egooframe", "enderframe", "endframe"],
    END_STONE: ["enderstone", "endrock", "enderrock", "erock", "estone"],
    DRAGON_EGG: ["enderdragonegg", "endegg", "degg", "bossegg", "begg"],
    ELYTRA: ["hangglider", "glider", "wings", "wing", "playerwings", "playerwing", "pwings", "pwing"],

}

const validMaterials = Object.keys(aliases);

module.exports = {
    prep: null,
    test: ({ material }) => validMaterials.includes(material),
    get: ({ material }) => aliases[material],
}
