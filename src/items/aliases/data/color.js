// Colours
const prefixes = {
    // These should be preferred over dark versions
    LIGHT_BLUE: ["lb", "lblu", "lightblu", "lblue", "lightblue"],
    LIGHT_GRAY: ["lg", "lgra", "lgrey", "lgray", "lightgra", "lightgrey", "lightgray", "si", "sia", "silver"],
    // All other colors
    WHITE: ["", "w", "white"],
    ORANGE: ["o", "orange"],
    MAGENTA: ["m", "magenta"],
    YELLOW: ["y", "yellow"],
    LIME: ["l", "lime", "lgre", "lightgre", "lgreen", "lightgreen"],
    PINK: ["pi", "pink"],
    GRAY: ["gra", "grey", "gray", "dgra", "darkgra", "dgrey", "dgray", "darkgrey", "darkgray"],
    CYAN: ["c", "cyan"],
    PURPLE: ["pu", "purple"],
    BLUE: ["blu", "blue"],
    BROWN: ["bro", "brown"],
    GREEN: ["gre", "dgre", "darkgre", "green", "dgreen", "darkgreen"],
    RED: ["r", "red"],
    BLACK: ["bk", "bla", "black"]
};

// Types of material
const suffixes = {
    // These should be preferred over shorter materials
    STAINED_GLASS_PANE: ["glasspane", "sglasspane", "stainedglasspane", "gpane"],
    GLAZED_TERRACOTTA: ["glazedtcota", "glazedterra", "glazedterracotta", "glazedterracota"],
    WALL_BANNER: ["wallbanner"],
    CONCRETE_POWDER: ["concretepowder", "concretesand"],
    // All other materials
    WOOL: ["wool", "cloth", "cotton"],
    STAINED_GLASS: ["glass", "sglass", "stainedglass"],
    // Misspelling "terracota" included for backwards-compat with EssX's items.csv
    TERRACOTTA: ["clay", "sclay", "stainedclay", "terra", "tcota", "terracota", "terracotta"],
    BANNER: ["standingbanner", "banner"],
    BED: ["bed"],
    CARPET: ["carpet", "floor"],
    CONCRETE: ["concrete"],
    SHULKER_BOX: ["shulkerbox", "chest"]
}

// Certain full names that shouldn't be outputted as aliases here, as they refer to another material
// eg. prevents WHITE_STAINED_GLASS overriding "glass"
const protected = ["glass", "glasspane", "clay", "chest"];

module.exports = { prefixes, suffixes, protected };
