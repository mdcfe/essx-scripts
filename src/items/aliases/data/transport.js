// Rail types
const prefixes = {
    // These should all be preferred over basic rails
    ACTIVATOR: ["activator", "activate", "trigger", "a", "t"],
    DETECTOR: ["detector", "detecting", "detect", "d"],
    POWERED: ["powered", "booster", "power", "boost", "p", "b"],
    // These should all be preferred over basic minecarts
    TNT: ["tnt", "dynamite", "bomb", "t", "d", "b"],
    HOPPER: ["hopper", "hop", "h"],
    CHEST: ["storage", "chest", "s", "c"],
    COMMAND_BLOCK: ["cmdblock", "cblock", "command", "cmd", "cb", "commandblock"],
    FURNACE: ["engine", "powered", "power", "furnace", "e", "p", "f"],
    // Basic rails/minecarts don't have a prefix
    RAIL: ["", "minecart", "mcart", "mc"],
    MINECART: [""],
};

// There's only one rail type here
const suffixes = {
    RAIL: ["rails", "rail", "track"],
    MINECART: ["minecart", "mcart", "mc", "cart"],
}

// Certain full names that shouldn't be outputted as aliases here, as they refer to another material
const protected = [];

module.exports = { prefixes, suffixes, protected };
